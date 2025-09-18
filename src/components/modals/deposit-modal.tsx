"use client";

import { useState } from "react";
import { X, Copy, RefreshCw } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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
import { toast } from "sonner";

interface DepositModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const mockDepositAddress = "TNWV7qJav4gJim56HfVaWoMAVVv4TJ58mp";

export function DepositModal({ isOpen, onClose }: DepositModalProps) {
  const [selectedCurrency, setSelectedCurrency] = useState("USDT");
  const [selectedNetwork, setSelectedNetwork] = useState("Tron Network");

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(mockDepositAddress);
    toast.success("Address copied to clipboard");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-[#2c2c2c] border-gray-700">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-white text-xl font-bold">
              DEPOSIT
            </DialogTitle>
            <div className="flex space-x-2">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white"
              >
                <X className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white"
              >
                <RefreshCw className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Currency Selection */}
          <div className="space-y-2">
            <Label className="text-gray-300">Currency</Label>
            <Select
              value={selectedCurrency}
              onValueChange={setSelectedCurrency}
            >
              <SelectTrigger className="bg-[#1a1a1a] border-gray-600 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-[#2c2c2c] border-gray-700">
                <SelectItem
                  value="USDT"
                  className="text-white hover:bg-gray-700"
                >
                  USDT
                </SelectItem>
                <SelectItem
                  value="BTC"
                  className="text-white hover:bg-gray-700"
                >
                  BTC
                </SelectItem>
                <SelectItem
                  value="ETH"
                  className="text-white hover:bg-gray-700"
                >
                  ETH
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Network Selection */}
          <div className="space-y-2">
            <Label className="text-gray-300">Network</Label>
            <Select value={selectedNetwork} onValueChange={setSelectedNetwork}>
              <SelectTrigger className="bg-[#1a1a1a] border-gray-600 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-[#2c2c2c] border-gray-700">
                <SelectItem
                  value="Tron Network"
                  className="text-white hover:bg-gray-700"
                >
                  Tron Network
                </SelectItem>
                <SelectItem
                  value="Ethereum"
                  className="text-white hover:bg-gray-700"
                >
                  Ethereum
                </SelectItem>
                <SelectItem
                  value="Bitcoin"
                  className="text-white hover:bg-gray-700"
                >
                  Bitcoin
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* QR Code Placeholder */}
          <div className="flex justify-center">
            <div className="w-48 h-48 bg-white rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="text-4xl mb-2">📱</div>
                <div className="text-sm">QR Code</div>
                <div className="text-xs">Scan to deposit</div>
              </div>
            </div>
          </div>

          {/* Deposit Address */}
          <div className="space-y-2">
            <Label className="text-white font-semibold">ADDRESS</Label>
            <div className="flex space-x-2">
              <Input
                value={mockDepositAddress}
                readOnly
                className="bg-[#1a1a1a] border-gray-600 text-white font-mono text-sm"
              />
              <Button
                onClick={handleCopyAddress}
                variant="outline"
                size="sm"
                className="border-gray-600 text-gray-300 hover:bg-gray-700"
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Important Warning */}
          <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
            <p className="text-red-400 font-semibold text-sm mb-2">
              IMPORTANT: Send only {selectedCurrency} to this address
            </p>
            <ul className="text-red-300 text-xs space-y-1">
              <li>
                • Sending coins or tokens other than {selectedCurrency} to this
                address will result in the loss of your deposit
              </li>
              <li>
                • Sending coins or tokens to a different network other than{" "}
                {selectedNetwork} will result in the loss of your deposit
              </li>
            </ul>
          </div>

          {/* Conversion Rates */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-600 rounded-lg p-3 text-center">
              <div className="text-white font-semibold">110,99.00 USD</div>
            </div>
            <div className="bg-green-600 rounded-lg p-3 text-center">
              <div className="text-white font-semibold">170,947,0 NGN</div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
