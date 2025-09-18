import { useQuery } from "@tanstack/react-query";
import {
  mockDashboardMetrics,
  mockRateHistory,
  mockVolumeHistory,
} from "@/lib/mock-data";

export const useDashboardMetrics = () => {
  return useQuery({
    queryKey: ["dashboard-metrics"],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 300));
      return mockDashboardMetrics;
    },
  });
};

export const useRateHistory = () => {
  return useQuery({
    queryKey: ["rate-history"],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 300));
      return mockRateHistory;
    },
  });
};

export const useVolumeHistory = () => {
  return useQuery({
    queryKey: ["volume-history"],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 300));
      return mockVolumeHistory;
    },
  });
};
