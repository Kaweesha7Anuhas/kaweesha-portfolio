import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 text-center">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-violet/20 rounded-full blur-[100px] -z-10" />
      
      <h1 className="text-8xl md:text-9xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-indigo via-brand-violet to-brand-cyan mb-4">
        404
      </h1>
      <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Page Not Found</h2>
      <p className="text-muted-foreground max-w-md mb-8">
        Oops! The page you are looking for doesn't exist or has been moved.
      </p>
      
      <Link href="/">
        <Button size="lg" className="rounded-full">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
        </Button>
      </Link>
    </div>
  );
}