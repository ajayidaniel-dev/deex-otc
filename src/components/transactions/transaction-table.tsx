"use client";

import { FiMoreHorizontal } from "react-icons/fi";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Transaction } from "@/lib/types";

interface TransactionTableProps {
  transactions: Transaction[];
  isLoading?: boolean;
}

export function TransactionTable({
  transactions,
  isLoading,
}: TransactionTableProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-600 hover:bg-green-700";
      case "pending":
        return "bg-yellow-600 hover:bg-yellow-700";
      case "processing":
        return "bg-blue-600 hover:bg-blue-700";
      default:
        return "bg-gray-600 hover:bg-gray-700";
    }
  };

  if (isLoading) {
    return (
      <div className="space-y-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="bg-gray-700 rounded-lg p-4">
              <div className="flex justify-between items-center">
                <div className="space-y-2">
                  <div className="h-4 bg-gray-600 rounded w-32"></div>
                  <div className="h-3 bg-gray-600 rounded w-24"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-600 rounded w-40"></div>
                  <div className="h-3 bg-gray-600 rounded w-32"></div>
                </div>
                <div className="h-6 bg-gray-600 rounded w-20"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (transactions.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-24 h-24 bg-gray-700 rounded-lg mx-auto mb-4 flex items-center justify-center">
          <span className="text-4xl">📄</span>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">
          No transactions found
        </h3>
        <p className="text-gray-400">
          Try adjusting your search or filter to find what you&apos;re looking
          for.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {transactions.map((transaction) => (
        <div
          key={transaction.id}
          className="bg-[#2c2c2c] rounded-lg p-4 border border-gray-700 hover:border-gray-600 transition-colors"
        >
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
            {/* Amount Column */}
            <div className="flex-1 min-w-0">
              <div className="md:hidden text-xs text-gray-400 mb-1">Amount</div>
              <div className="text-lg font-semibold text-white truncate">
                {transaction.amount} {transaction.currency}
              </div>
              <div className="text-sm text-gray-400">
                {transaction.exchangeRate}
              </div>
              <div className="mt-2 text-xs text-gray-400 md:hidden">
                {transaction.date}, {transaction.time}
              </div>
            </div>

            {/* Payout Amount Column */}
            <div className="flex-1 min-w-0 md:text-center">
              <div className="md:hidden text-xs text-gray-400 mb-1">Payout</div>
              <div className="text-lg font-semibold text-white truncate">
                {transaction.payoutAmount} {transaction.payoutCurrency}
              </div>
              <div className="text-sm text-gray-400">
                {transaction.usdAmount} USD
              </div>
              <div className="text-sm text-blue-400">
                @{transaction.rate} NGN/USD
              </div>
            </div>

            {/* Status / Actions */}
            <div className="flex items-center justify-between md:justify-end gap-3">
              <div className="flex items-center gap-3">
                <Badge
                  className={`${getStatusColor(
                    transaction.status
                  )} text-white font-medium px-3 py-1`}
                >
                  {transaction.status.toUpperCase()}
                </Badge>
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-400 hover:text-white"
                  >
                    <FiMoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="bg-[#2c2c2c] border-gray-700"
                >
                  <DropdownMenuItem className="text-gray-300 hover:bg-gray-700 hover:text-white">
                    View Transaction
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-gray-300 hover:bg-gray-700 hover:text-white">
                    Confirm Transaction
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Date for md+ */}
          <div className="hidden md:block mt-3 text-sm text-gray-400">
            {transaction.date}, {transaction.time}
          </div>
        </div>
      ))}
    </div>
  );
}
