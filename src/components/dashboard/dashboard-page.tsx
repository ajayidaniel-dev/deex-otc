"use client";

import { useDashboardMetrics } from "@/hooks/use-dashboard";
import { MetricCard } from "./metric-card";
import { DepositButton } from "./deposit-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function DashboardPage() {
  const { data: metrics, isLoading } = useDashboardMetrics();

  if (isLoading) {
    return (
      <div className="p-6">
        <div className="animate-pulse space-y-6">
          <div className="h-8 bg-gray-700 rounded w-48"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-32 bg-gray-700 rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Dashboard</h1>
        </div>

        <div className="flex items-center space-x-4">
          {/* <Button
            variant="ghost"
            size="sm"
            onClick={() => refetch()}
            className="text-gray-400 hover:text-white"
          >
            Refresh
          </Button> */}
          <DepositButton />
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {metrics?.map((metric, index) => (
          <MetricCard key={metric.id} metric={metric} index={index} />
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Rate History Chart */}
        <Card className="card-dark border-0">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-white">Rate History (BTC/NGN)</CardTitle>
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-white"
            >
              Refresh
            </Button>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center text-gray-400">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-700 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">📈</span>
                </div>
                <p>Chart will be displayed here</p>
                <p className="text-sm">Mock data integration needed</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Volume History Chart */}
        <Card className="card-dark border-0">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-white">
              Volume History (Total Transactions)
            </CardTitle>
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-white"
            >
              Refresh
            </Button>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center text-gray-400">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-700 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">📊</span>
                </div>
                <p>Chart will be displayed here</p>
                <p className="text-sm">Mock data integration needed</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
