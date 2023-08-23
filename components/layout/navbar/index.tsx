import { ThemeToggle } from "@/components/ThemeToggle";
import LogoIcon from "@/components/icons/logo";
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="border-b px-6 h-16 flex items-center justify-between">
      <LogoIcon className="h-8 w-8" />

      <div className="flex items-center gap-2">
        <ThemeToggle />
        <UserButton afterSignOutUrl="/" />
      </div>
    </nav>
  );
};

export default Navbar;
