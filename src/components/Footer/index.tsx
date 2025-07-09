import { Button } from "@/components/ui/button";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "lucide-react";

const socialLinks = [
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

function Footer() {
  return (
    <footer className="space-x-2 text-center">
      {socialLinks.map(({ name, url, icon: Icon }) => (
        <Button
          key={name}
          variant="ghost"
          className="hover:bg-primary/25 focus-visible:bg-background/10 transition-colors"
          asChild
        >
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
          >
            <Icon className="h-6 w-6" />
          </a>
        </Button>
      ))}
    </footer>
  );
}

export default Footer;
