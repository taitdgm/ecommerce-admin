import { redirect } from "next/navigation";
import { UserButton, auth, currentUser } from "@clerk/nextjs";
import { prisma } from "@/lib/prismadb";
import StoreSwitcher from "@/components/StoreSwitcher";
import { ThemeToggle } from "@/components/ThemeToggle";
import Links from "@/components/layout/sidebar/Links";
import { Separator } from "@/components/ui/separator";
import User from "@/components/User";

const Sidebar = async () => {
  const user = await currentUser();
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
      <div className="flex flex-col">
        <StoreSwitcher stores={stores} />
        <Links />
      </div>

      <div className="px-5">
        <Separator />
        <div className="flex justify-between items-center mt-4"></div>
      </div>

      <User user={user} />
    </nav>
  );
};

export default Sidebar;
