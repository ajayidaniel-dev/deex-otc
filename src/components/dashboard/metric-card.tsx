"use client";

import { Card, CardContent } from "@/components/ui/card";
import { DashboardMetric } from "@/lib/types";

interface MetricCardProps {
  metric: DashboardMetric;
  index: number;
}

const colorVariants = {
  green: "bg-gradient-to-br from-green-500 to-green-600",
  red: "bg-gradient-to-br from-red-500 to-red-600",
  blue: "bg-gradient-to-br from-blue-500 to-blue-600",
  teal: "bg-gradient-to-br from-teal-500 to-teal-600",
  gray: "bg-gradient-to-br from-gray-500 to-gray-600",
};

export function MetricCard({ metric, index }: MetricCardProps) {
  return (
    <div className="hover:scale-105 transition-transform duration-200">
      <Card className="card-dark border-0 overflow-hidden">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div
              className={`w-12 h-12 rounded-lg ${
                colorVariants[metric.color]
              } flex items-center justify-center`}
            >
              <span className="text-white text-lg font-bold">
                {metric.title.charAt(0)}
              </span>
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex items-baseline space-x-2">
              <span className="text-2xl font-bold text-white">
                {metric.value}
              </span>
              <span className="text-sm text-gray-400">{metric.currency}</span>
            </div>
            <p className="text-sm text-gray-400 font-medium">{metric.title}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
