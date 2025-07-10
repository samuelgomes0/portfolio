import {
  InstagramIcon,
  LinkedinIcon,
  LucideIcon,
  MailIcon,
} from "lucide-react";

interface ContactItem {
  name: string;
  href: string;
  icon: LucideIcon;
  external?: boolean;
}

const contactItems: ContactItem[] = [
  {
    name: "E-mail",
    href: "mailto:samuel_gomes26@hotmail.com",
    icon: MailIcon,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/samuelgomes0/",
    icon: LinkedinIcon,
    external: true,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/samuelgomes0/",
    icon: InstagramIcon,
    external: true,
  },
];

export default contactItems;
