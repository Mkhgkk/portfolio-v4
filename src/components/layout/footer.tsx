import Link from "next/link";
import { Mail } from "lucide-react";
import { person } from "@/data";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

export function Footer() {
  return (
    <footer className="mt-20 pt-8 border-t border-neutral-200 dark:border-neutral-800">
      <div className="flex items-center justify-between">
        <p className="text-sm text-neutral-400 dark:text-neutral-500">
          © {new Date().getFullYear()} Emmachalz
        </p>
        <div className="flex items-center gap-3">
          <Link
            href={`mailto:${person.email}`}
            className="text-neutral-400 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors"
            aria-label="Email"
          >
            <Mail size={16} />
          </Link>
          <Link
            href={person.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon width={16} height={16} />
          </Link>
          <Link
            href={person.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon width={16} height={16} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
