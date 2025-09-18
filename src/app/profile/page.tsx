import { MainLayout } from "@/components/layout/main-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { mockUser } from "@/lib/mock-data";

export default function Profile() {
  return (
    <MainLayout title="Profile">
      <div className="p-6 space-y-6">
        <h1 className="text-3xl font-bold text-white">Profile</h1>

        <Card className="card-dark border-0">
          <CardHeader>
            <CardTitle className="text-white">Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center space-x-4">
              <Avatar className="h-20 w-20">
                <AvatarFallback className="bg-orange-500 text-white text-2xl font-bold">
                  {mockUser.avatar}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {mockUser.name}
                </h3>
                <p className="text-gray-400">{mockUser.role}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-white">Full Name</Label>
                <Input
                  defaultValue={mockUser.name}
                  className="bg-[#1a1a1a] border-gray-600 text-white"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-white">Email</Label>
                <Input
                  defaultValue={mockUser.email}
                  className="bg-[#1a1a1a] border-gray-600 text-white"
                />
              </div>
            </div>

            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Update Profile
            </Button>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}
