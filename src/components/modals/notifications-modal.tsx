"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";
import { useMemo, useState } from "react";
import { CheckCircle } from "lucide-react";

interface NotificationItem {
  id: string;
  title: string;
  description?: string;
  time: string;
  read?: boolean;
}

interface NotificationsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  notifications?: NotificationItem[];
}

export function NotificationsModal({
  open,
  onOpenChange,
  notifications,
}: NotificationsModalProps) {
  const [items, setItems] = useState<NotificationItem[]>(
    notifications ?? [
      {
        id: "1",
        title: "Deposit confirmed",
        description: "Your 2.5 BTC deposit has been confirmed.",
        time: "2m ago",
      },
      {
        id: "2",
        title: "New API key created",
        description: "A new API key was generated successfully.",
        time: "1h ago",
      },
      {
        id: "3",
        title: "Rate alert: BTC/NGN",
        description: "BTC/NGN crossed 1,600,000.",
        time: "Yesterday",
      },
    ]
  );

  const [showUnreadOnly, setShowUnreadOnly] = useState(false);

  function markAllRead() {
    setItems((prev) => prev.map((n) => ({ ...n, read: true })));
  }

  function clearAll() {
    setItems([]);
  }

  function toggleRead(id: string) {
    setItems((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: !n.read } : n))
    );
  }

  const visibleItems = useMemo(
    () => (showUnreadOnly ? items.filter((n) => !n.read) : items),
    [items, showUnreadOnly]
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="right-4 top-16 left-auto translate-x-0 translate-y-0 sm:right-6 bg-[#1f1f1f]/90 supports-[backdrop-filter]:bg-[#1f1f1f]/70 backdrop-blur border-gray-700 text-white w-[380px] sm:w-[420px] max-h-[70vh] overflow-visible rounded-xl shadow-2xl p-0">
        <div className="absolute -top-2 right-8 h-4 w-4 rotate-45 bg-[#1f1f1f]/90 supports-[backdrop-filter]:bg-[#1f1f1f]/70 border-t border-l border-gray-700" />

        <div className="px-4 py-3 border-b border-gray-700 bg-gradient-to-r from-[#242424] to-[#1d1d1d]">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <div className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-blue-400" />
              <DialogHeader className="p-0">
                <DialogTitle className="text-base">Notifications</DialogTitle>
              </DialogHeader>
              <Badge className="ml-2 bg-blue-600/90">{items.length}</Badge>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="hidden sm:flex items-center bg-[#262626] rounded-md p-0.5 border border-gray-700">
                <button
                  className={`px-3 py-1.5 text-xs rounded ${
                    !showUnreadOnly
                      ? "bg-[#333333] text-white"
                      : "text-gray-300"
                  }`}
                  onClick={() => setShowUnreadOnly(false)}
                >
                  All
                </button>
                <button
                  className={`px-3 py-1.5 text-xs rounded ${
                    showUnreadOnly ? "bg-[#333333] text-white" : "text-gray-300"
                  }`}
                  onClick={() => setShowUnreadOnly(true)}
                >
                  Unread
                </button>
              </div>
              <Button
                size="sm"
                variant="ghost"
                className="text-gray-200 border border-gray-700 bg-[#2a2a2a] hover:bg-[#2f2f2f] hover:text-white rounded-md px-3"
                onClick={markAllRead}
              >
                <CheckCircle className="h-4 w-4 mr-2" />
                Mark all
              </Button>
            </div>
          </div>
        </div>

        <div className="max-h-[50vh] overflow-auto">
          <div className="divide-y divide-gray-800">
            {visibleItems.map((n) => (
              <button
                key={n.id}
                onClick={() => toggleRead(n.id)}
                className="w-full text-left p-4 flex items-start gap-3 hover:bg-[#242424] transition-colors"
              >
                <div className="mt-1">
                  <span
                    className={`inline-block h-2.5 w-2.5 rounded-full ${
                      n.read ? "bg-gray-500" : "bg-blue-500"
                    }`}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <p className="font-medium leading-tight">{n.title}</p>
                    <span className="text-xs text-gray-400 whitespace-nowrap">
                      {n.time}
                    </span>
                  </div>
                  {n.description && (
                    <p className="text-sm text-gray-300 mt-1 leading-relaxed">
                      {n.description}
                    </p>
                  )}
                  {!n.read && (
                    <span className="mt-2 inline-flex text-[10px] uppercase tracking-wide text-blue-300/90">
                      Unread
                    </span>
                  )}
                </div>
              </button>
            ))}
            {visibleItems.length === 0 && (
              <div className="p-8 text-center text-gray-400">
                No notifications
              </div>
            )}
          </div>
        </div>

        {/* <div className="px-4 py-3 border-t border-gray-700 flex items-center justify-between bg-[#222222]">
          <Button
            variant="ghost"
            className="text-gray-300 hover:text-white"
            size="sm"
            onClick={clearAll}
          >
            Clear all
          </Button>
          <Button
            variant="ghost"
            className="text-blue-400 hover:text-blue-300"
            size="sm"
          >
            View all
          </Button>
        </div> */}
      </DialogContent>
    </Dialog>
  );
}
