"use client";

import { Calendar, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { format } from "date-fns";

interface TransactionFiltersProps {
  onStatusChange: (status: string) => void;
  onDateRangeChange: (from: Date | undefined, to: Date | undefined) => void;
  onSortChange: (sort: string) => void;
  selectedStatus: string;
  dateFrom: Date | undefined;
  dateTo: Date | undefined;
  sortBy: string;
}

export function TransactionFilters({
  onStatusChange,
  onDateRangeChange,
  onSortChange,
  selectedStatus,
  dateFrom,
  dateTo,
  sortBy,
}: TransactionFiltersProps) {
  const isCalendarOpen = false;

  const statusOptions = [
    { value: "all", label: "All Status" },
    { value: "completed", label: "Completed" },
    { value: "pending", label: "Pending" },
    { value: "processing", label: "Processing" },
  ];

  const sortOptions = [
    { value: "date-desc", label: "Date (Newest First)" },
    { value: "date-asc", label: "Date (Oldest First)" },
    { value: "amount-desc", label: "Amount (Highest First)" },
    { value: "amount-asc", label: "Amount (Lowest First)" },
  ];

  return (
    <div className="space-y-4">
      {/* Status Filters */}
      <div className="flex flex-wrap gap-2">
        {statusOptions.map((option) => (
          <Button
            key={option.value}
            variant={selectedStatus === option.value ? "default" : "outline"}
            size="sm"
            onClick={() => onStatusChange(option.value)}
            className={`${
              selectedStatus === option.value
                ? "bg-blue-600 hover:bg-blue-700 text-white"
                : "border-gray-600 text-gray-300 hover:bg-gray-700"
            }`}
          >
            {option.label}
            {selectedStatus === option.value && (
              <span className="ml-2 text-xs">×</span>
            )}
          </Button>
        ))}
      </div>

      {/* Date Range and Sort */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Date Range */}
        <div className="flex-1">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left border-gray-600 text-gray-300 hover:bg-gray-700"
              >
                <Calendar className="mr-2 h-4 w-4" />
                {dateFrom && dateTo
                  ? `${format(dateFrom, "MMM dd, yyyy")} - ${format(
                      dateTo,
                      "MMM dd, yyyy"
                    )}`
                  : "Select date range"}
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="w-auto p-0 bg-[#2c2c2c] border-gray-700"
              align="start"
            >
              <CalendarComponent
                mode="range"
                selected={{ from: dateFrom, to: dateTo }}
                onSelect={(range) => {
                  onDateRangeChange(range?.from, range?.to);
                }}
                className="rounded-md border-0"
                classNames={{
                  day: "text-white hover:bg-gray-700",
                  day_selected: "bg-blue-600 text-white",
                  day_today: "bg-gray-600 text-white",
                }}
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Sort */}
        <div className="flex gap-2">
          <Select value={sortBy} onValueChange={onSortChange}>
            <SelectTrigger className="w-[180px] border-gray-600 text-gray-300 bg-[#2c2c2c]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent className="bg-[#2c2c2c] border-gray-700">
              {sortOptions.map((option) => (
                <SelectItem
                  key={option.value}
                  value={option.value}
                  className="text-gray-300 hover:bg-gray-700"
                >
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button
            variant="outline"
            size="sm"
            className="border-gray-600 text-gray-300 hover:bg-gray-700"
          >
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
        </div>
      </div>
    </div>
  );
}
