import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/validations/contact";

const rateLimitMap = new Map();

export async function POST(req: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ error: "Missing API Key" }, { status: 500 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const ip = req.headers.get("x-forwarded-for") || "unknown";
    const now = Date.now();
    const windowMs = 15 * 60 * 1000;
    const maxRequests = 3;

    const rateData = rateLimitMap.get(ip) || { count: 0, resetTime: now + windowMs };
    if (now > rateData.resetTime) {
      rateData.count = 0;
      rateData.resetTime = now + windowMs;
    }
    if (rateData.count >= maxRequests) {
      return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
    }
    rateData.count++;
    rateLimitMap.set(ip, rateData);

    const body = await req.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
    }

    const { name, email, message, honeypot } = result.data;

    if (honeypot) return NextResponse.json({ success: true });

    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL || "kaweesha7anuhas@gmail.com",
      subject: `New message from ${name} (Portfolio)`,
      replyTo: email,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      `,
    });

    if (data.error) {
      return NextResponse.json({ error: data.error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Internal Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}