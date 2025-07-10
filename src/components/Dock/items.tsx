import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  LucideIcon,
} from "lucide-react";

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
}

export interface NavbarItem {
  href: string;
  icon: LucideIcon;
  label: string;
}

export const navbarLinks: NavbarItem[] = [];

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://www.github.com/samuelgomes0",
    icon: GithubIcon,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/samuelgomes0/",
    icon: InstagramIcon,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/samuelgomes0/",
    icon: LinkedinIcon,
  },
];
