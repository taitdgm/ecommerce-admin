import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";

interface DashboardLayoutProps {
  children: ReactNode;
  params: {
    storeId: string;
  };
}

export default async function DashboardLayout({
  children,
  params,
}: DashboardLayoutProps) {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
