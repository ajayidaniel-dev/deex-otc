"use client";

import { useState } from "react";
import { useTransactions } from "@/hooks/use-transactions";
import { TransactionTable } from "./transaction-table";
import { TransactionFilters } from "./transaction-filters";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function TransactionsPage() {
  const [status, setStatus] = useState("all");
  const [dateFrom, setDateFrom] = useState<Date | undefined>();
  const [dateTo, setDateTo] = useState<Date | undefined>();
  const [sortBy, setSortBy] = useState("date-desc");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const { data, isLoading, error } = useTransactions({
    status: status === "all" ? undefined : status,
    dateRange: dateFrom && dateTo ? { from: dateFrom, to: dateTo } : undefined,
    page: currentPage,
    limit: itemsPerPage,
  });

  const totalPages = data ? Math.ceil(data.total / itemsPerPage) : 0;

  const handleStatusChange = (newStatus: string) => {
    setStatus(newStatus);
    setCurrentPage(1);
  };

  const handleDateRangeChange = (
    from: Date | undefined,
    to: Date | undefined
  ) => {
    setDateFrom(from);
    setDateTo(to);
    setCurrentPage(1);
  };

  const handleSortChange = (newSort: string) => {
    setSortBy(newSort);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (error) {
    return (
      <div className="p-6 text-center">
        <div className="text-red-400 mb-4">Error loading transactions</div>
        <Button onClick={() => window.location.reload()}>Try Again</Button>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-3xl font-bold text-white">Transactions</h1>
          {data && (
            <Badge className="bg-green-600 hover:bg-green-700 text-white px-3 py-1">
              {data.total.toLocaleString()}
            </Badge>
          )}
        </div>
      </div>

      {/* Filters */}
      <div>
        <TransactionFilters
          onStatusChange={handleStatusChange}
          onDateRangeChange={handleDateRangeChange}
          onSortChange={handleSortChange}
          selectedStatus={status}
          dateFrom={dateFrom}
          dateTo={dateTo}
          sortBy={sortBy}
        />
      </div>

      {/* Transaction Table */}
      <div>
        <TransactionTable
          transactions={data?.transactions || []}
          isLoading={isLoading}
        />
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="border-gray-600 text-gray-300 hover:bg-gray-700 disabled:opacity-50"
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>

          <div className="flex space-x-1">
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              const page = i + 1;
              return (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  size="sm"
                  onClick={() => handlePageChange(page)}
                  className={`${
                    currentPage === page
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "border-gray-600 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  {page}
                </Button>
              );
            })}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="border-gray-600 text-gray-300 hover:bg-gray-700 disabled:opacity-50"
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
}
