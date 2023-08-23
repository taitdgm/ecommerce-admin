import { UserButton, auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prismadb";
import StoreSwitcher from "@/components/StoreSwitcher";
import { ThemeToggle } from "@/components/ThemeToggle";

const Sidebar = async () => {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const stores = await prisma.store.findMany({
    where: {
      userId,
    },
  });

  return (
    <nav className="sticky top-0 left-0 h-screen w-fit flex flex-col bg-[#F7F8FB] dark:bg-background border-r justify-between overflow-auto px-3 py-4">
      <StoreSwitcher stores={stores} />

      <div className="flex flex-col items-center gap-4">
        <ThemeToggle />
        <UserButton afterSignOutUrl="/" />
      </div>
    </nav>
  );
};

export default Sidebar;
