"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

export function CaptureTransactionForm() {
  const [transactionHash, setTransactionHash] = useState("");
  const [currency, setCurrency] = useState("BTC");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!transactionHash.trim()) {
      toast.error("Please enter a transaction hash");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast.success("Transaction captured successfully!");
    setTransactionHash("");
    setIsSubmitting(false);
  };

  return (
    <div className="max-w-md mx-auto">
      <Card className="card-dark border-0">
        <CardContent className="p-8">
          <h1 className="text-2xl font-bold text-white text-center mb-8">
            Capture Transaction
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Transaction Hash */}
            <div className="space-y-2">
              <Label htmlFor="hash" className="text-white">
                Transaction Hash
              </Label>
              <Input
                id="hash"
                type="text"
                value={transactionHash}
                onChange={(e) => setTransactionHash(e.target.value)}
                placeholder="Enter transaction hash"
                className="bg-[#1a1a1a] border-gray-600 text-white placeholder-gray-400"
                disabled={isSubmitting}
              />
            </div>

            {/* Currency Selection */}
            <div className="space-y-2">
              <Label htmlFor="currency" className="text-white">
                Currency
              </Label>
              <Select
                value={currency}
                onValueChange={setCurrency}
                disabled={isSubmitting}
              >
                <SelectTrigger className="bg-[#1a1a1a] border-gray-600 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-[#2c2c2c] border-gray-700">
                  <SelectItem
                    value="BTC"
                    className="text-white hover:bg-gray-700"
                  >
                    BTC
                  </SelectItem>
                  <SelectItem
                    value="USDT"
                    className="text-white hover:bg-gray-700"
                  >
                    USDT
                  </SelectItem>
                  <SelectItem
                    value="ETH"
                    className="text-white hover:bg-gray-700"
                  >
                    ETH
                  </SelectItem>
                  <SelectItem
                    value="BNB"
                    className="text-white hover:bg-gray-700"
                  >
                    BNB
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg disabled:opacity-50"
            >
              {isSubmitting ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Processing...</span>
                </div>
              ) : (
                <div className="flex items-center justify-center space-x-2">
                  <span>Submit</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
