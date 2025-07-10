import { GithubIcon, InstagramIcon, LinkedinIcon } from "lucide-react";
import { JSX } from "react";
import { IconProps } from ".";

export const Icons = {
  github: (props: IconProps) => <GithubIcon {...props} />,
  instagram: (props: IconProps) => <InstagramIcon {...props} />,
  linkedin: (props: IconProps) => <LinkedinIcon {...props} />,
};

export interface SocialLink {
  name: string;
  url: string;
  icon: (props: IconProps) => JSX.Element;
}

export interface NavbarItem {
  href: string;
  icon: (props: IconProps) => JSX.Element;
  label: string;
}

export const navbarLinks: NavbarItem[] = [];

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://www.github.com/samuelgomes0",
    icon: Icons.github,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/samuelgomes0/",
    icon: Icons.instagram,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/samuelgomes0/",
    icon: Icons.linkedin,
  },
];
