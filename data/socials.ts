import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa6";
import { siteConfig } from "./site";

export const socials = [
  {
    name: "GitHub",
    href: "https://github.com/kaweesha-anuhas",
    icon: FaGithub,
    ariaLabel: "Visit my GitHub profile",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/anuhas-senawirathne-048454308",
    icon: FaLinkedin,
    ariaLabel: "Visit my LinkedIn profile",
  },
  {
    name: "Email",
    href: `mailto:${siteConfig.email}`,
    icon: FaEnvelope,
    ariaLabel: "Send me an email",
  },
  {
    name: "WhatsApp",
    href: `https://wa.me/94768871510`,
    icon: FaWhatsapp,
    ariaLabel: "Message me on WhatsApp",
  },
];