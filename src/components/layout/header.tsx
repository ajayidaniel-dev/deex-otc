"use client";

import { Menu, User, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { mockUser } from "@/lib/mock-data";
import { useState } from "react";
import { NotificationsModal } from "@/components/modals/notifications-modal";

interface HeaderProps {
  onMenuClick: () => void;
  title?: string;
}

export function Header({ onMenuClick }: HeaderProps) {
  const notifications = 1;
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  return (
    <header className="bg-[#1a1a1a] border-b border-gray-800 sticky top-0 z-30">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Left side - Logo and Menu */}
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={onMenuClick}
            className="text-white hover:bg-gray-800 lgsm:hidden"
          >
            <Menu className="h-6 w-6" />
          </Button>

          <div className="flex items-center space-x-2">
            {/* Logo */}
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-red-500 via-orange-500 to-blue-500 flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <span className="text-white font-semibold text-lg">DeeX Desk</span>
            {/* {title && (
              <>
                <span className="text-gray-500">/</span>
                <span className="text-white font-semibold text-lg">
                  {title}
                </span>
              </>
            )} */}
          </div>
        </div>

        {/* Right side - Notifications and User */}
        <div className="flex items-center space-x-3">
          {/* Notifications */}
          <div className="relative">
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-gray-800 relative"
              onClick={() => setNotificationsOpen(true)}
            >
              <Bell className="h-5 w-5" />
              {notifications > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
                >
                  {notifications}
                </Badge>
              )}
            </Button>
          </div>

          {/* User Profile */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-white hover:bg-gray-800">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-orange-500 text-white text-sm font-semibold">
                    {mockUser.avatar}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-56 bg-[#2c2c2c] border-gray-700"
            >
              <div className="px-3 py-2">
                <p className="text-sm font-medium text-white">
                  {mockUser.name}
                </p>
                <p className="text-xs text-gray-400">{mockUser.email}</p>
              </div>
              <DropdownMenuSeparator className="bg-gray-700" />
              <DropdownMenuItem className="text-gray-300 hover:bg-gray-700 hover:text-white">
                <User className="mr-2 h-4 w-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem className="text-gray-300 hover:bg-gray-700 hover:text-white">
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-gray-700" />
              <DropdownMenuItem className="text-red-400 hover:bg-gray-700 hover:text-red-300">
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <NotificationsModal
        open={notificationsOpen}
        onOpenChange={setNotificationsOpen}
      />
    </header>
  );
}
