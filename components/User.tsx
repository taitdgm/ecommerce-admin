"use client";

import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronDown } from "lucide-react";
import { User as ClerkUser } from "@clerk/nextjs/server";

interface UserProps {
  user: ClerkUser | null;
}

const User = ({ user }: UserProps) => {
  console.log("file: User.tsx:12 ~ User ~ user:", user);
  const [open, setOpen] = useState(false);

  const fullName = `${user?.firstName} ${user?.lastName}`;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          aria-label="Select a team"
          className="w-full justify-between text-base bg-transparent border-none"
        >
          <div className="flex items-center gap-2">
            <Avatar className="mr-2 h-10 w-10">
              <AvatarImage src={user?.imageUrl} alt="User Avatar" />
            </Avatar>

            <div className="flex flex-col gap-1 text-sm text-left">
              <span>{fullName}</span>
              <span className="text-muted-foreground text-xs">
                {user?.emailAddresses[0].emailAddress}
              </span>
            </div>
          </div>

          <ChevronDown className="ml-auto h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <div className="space-y-2">test</div>
        <div className="space-y-2">test</div>
        <div className="space-y-2">test</div>
        <div className="space-y-2">test</div>
      </PopoverContent>
    </Popover>
  );
};

export default User;
