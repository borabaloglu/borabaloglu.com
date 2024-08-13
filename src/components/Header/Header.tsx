import Link from "next/link";

import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@borabaloglu/ui";
import { RiMenu2Line } from "react-icons/ri";

const Header = () => {
  return (
    <header className="flex items-center justify-between py-8 text-label-xs">
      <div className="flex items-center gap-x-2">
        <div className="h-6 aspect-square flex items-center justify-center bg-semantic-accent-moderate font-semibold text-semantic-fg-on-contrast">
          B
        </div>
        <p className="font-semibold">Bora Baloglu</p>
      </div>
      <div className="hidden sm:flex gap-x-4">
        <Link
          className="hover:text-semantic-accent-moderate transition-colors"
          href="https://drive.google.com/file/d/1-E3m9-ZfiLoAIsIZz9ThqpuMmClmOm7l/view?usp=sharing"
          target="_blank"
        >
          Resume
        </Link>
        {"/"}
        <Link
          className="hover:text-semantic-accent-moderate transition-colors"
          href="https://www.linkedin.com/in/bora-baloglu/"
          target="_blank"
        >
          Linkedin
        </Link>
        {"/"}
        <Link
          className="hover:text-semantic-accent-moderate transition-colors"
          href="github.com/borabaloglu"
          target="_blank"
        >
          Github
        </Link>
        {"/"}
        <Link
          className="hover:text-semantic-accent-moderate transition-colors"
          href="https://x.com/borabalogluu"
          target="_blank"
        >
          Twitter
        </Link>
      </div>
      <div className="flex sm:hidden">
        <Dialog>
          <DialogTrigger asChild>
            <RiMenu2Line
              className="cursor-pointer hover:text-semantic-accent-moderate transition-colors"
              size={16}
            />
          </DialogTrigger>
          <DialogContent className="!max-w-full w-full !max-h-full h-full rounded-none">
            <div className="flex flex-col gap-y-2 mt-8">
              <Link
                className="hover:text-semantic-accent-moderate transition-colors p-4 text-center"
                href="https://drive.google.com/file/d/1-E3m9-ZfiLoAIsIZz9ThqpuMmClmOm7l/view?usp=sharing"
                target="_blank"
              >
                Resume
              </Link>
              <Link
                className="hover:text-semantic-accent-moderate transition-colors p-4 text-center"
                href="https://www.linkedin.com/in/bora-baloglu/"
                target="_blank"
              >
                Linkedin
              </Link>
              <Link
                className="hover:text-semantic-accent-moderate transition-colors p-4 text-center"
                href="github.com/borabaloglu"
                target="_blank"
              >
                Github
              </Link>
              <Link
                className="hover:text-semantic-accent-moderate transition-colors p-4 text-center"
                href="https://x.com/borabalogluu"
                target="_blank"
              >
                Twitter
              </Link>
            </div>
            <DialogFooter className="sm:justify-start">
              <DialogClose asChild>
                <Button type="button" variant="filledTonal">
                  Close
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </header>
  );
};

export default Header;
