import { useQuery } from "@tanstack/react-query";
import { mockTransactions } from "@/lib/mock-data";
import { Transaction } from "@/lib/types";

export const useTransactions = (filters?: {
  status?: string;
  dateRange?: { from: Date; to: Date };
  page?: number;
  limit?: number;
}) => {
  return useQuery({
    queryKey: ["transactions", filters],
    queryFn: async (): Promise<{
      transactions: Transaction[];
      total: number;
    }> => {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 500));

      let filteredTransactions = [...mockTransactions];

      if (filters?.status) {
        filteredTransactions = filteredTransactions.filter(
          (t) => t.status === filters.status
        );
      }

      if (filters?.dateRange) {
        filteredTransactions = filteredTransactions.filter((t) => {
          const transactionDate = new Date(t.date);
          return (
            transactionDate >= filters.dateRange!.from &&
            transactionDate <= filters.dateRange!.to
          );
        });
      }

      const total = filteredTransactions.length;
      const page = filters?.page || 1;
      const limit = filters?.limit || 10;
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;

      return {
        transactions: filteredTransactions.slice(startIndex, endIndex),
        total,
      };
    },
  });
};
