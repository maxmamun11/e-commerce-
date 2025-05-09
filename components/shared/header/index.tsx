import { ShoppingCart, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";
import ModeToggle from "./mode-trggle";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-10 py-4">
        <div className="flex items-start justify-start">
          <Link href="/" className="flex items-start justify-start">
            <Image
              src="/images/logo.svg"
              alt={`${APP_NAME} logo`}
              width={48}
              height={48}
              priority
            />
            <span className="hidden lg:block font-bold text-2xl ml-3">
              {APP_NAME}
            </span>
          </Link>
        </div>
        <div className="space-x-2 flex">
          <ModeToggle />
          <Button
            asChild
            variant="ghost"
            className="flex items-center gap-1 bg-white hover:bg-gray-200 transition-colors"
          >
            <Link href="/cart">
              <ShoppingCart className="w-4 h-4" />
              <span>Cart</span>
            </Link>
          </Button>
          <Button
            asChild
            variant="ghost"
            className="flex items-center gap-1 bg-white hover:bg-gray-200 transition-colors"
          >
            <Link href="/sign-in">
              <UserIcon className="w-4 h-4" />
              <span>Sign In</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
