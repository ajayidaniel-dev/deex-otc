"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

export function SettingsPage() {
  const [automaticPayouts, setAutomaticPayouts] = useState(true);
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (newPassword.length < 8) {
      toast.error("Password must be at least 8 characters long");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast.success("Password changed successfully!");
    setOldPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setIsSubmitting(false);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">Settings</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* General Settings */}
        <div>
          <Card className="card-dark border-0">
            <CardHeader>
              <CardTitle className="text-white">GENERAL</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Automatic Payouts */}
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label className="text-white font-medium">
                    Automatic payouts
                  </Label>
                  <p className="text-sm text-gray-400">
                    Automatically process payouts when transactions are
                    completed
                  </p>
                </div>
                <Checkbox
                  checked={automaticPayouts}
                  onCheckedChange={(checked) =>
                    setAutomaticPayouts(checked === true)
                  }
                  className="data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                />
              </div>

              <Separator className="bg-gray-700" />

              {/* Two-Factor Authentication */}
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label className="text-white font-medium">
                    Two-Factor Authentication
                  </Label>
                  <p className="text-sm text-gray-400">
                    Add an extra layer of security to your account
                  </p>
                </div>
                <Checkbox
                  checked={twoFactorAuth}
                  onCheckedChange={(checked) =>
                    setTwoFactorAuth(checked === true)
                  }
                  className="data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Change Password */}
        <div>
          <Card className="card-dark border-0">
            <CardHeader>
              <CardTitle className="text-white">CHANGE PASSWORD</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handlePasswordChange} className="space-y-4">
                {/* Old Password */}
                <div className="space-y-2">
                  <Label htmlFor="oldPassword" className="text-white">
                    Old Password
                  </Label>
                  <Input
                    id="oldPassword"
                    type="password"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                    className="bg-[#1a1a1a] border-gray-600 text-white"
                    disabled={isSubmitting}
                  />
                </div>

                {/* New Password */}
                <div className="space-y-2">
                  <Label htmlFor="newPassword" className="text-white">
                    New Password
                  </Label>
                  <Input
                    id="newPassword"
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="bg-[#1a1a1a] border-gray-600 text-white"
                    disabled={isSubmitting}
                  />
                </div>

                {/* Confirm Password */}
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-white">
                    Confirm Password
                  </Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="bg-[#1a1a1a] border-gray-600 text-white"
                    disabled={isSubmitting}
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Updating...</span>
                    </div>
                  ) : (
                    "Submit"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
