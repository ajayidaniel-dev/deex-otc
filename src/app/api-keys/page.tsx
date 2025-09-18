import { MainLayout } from "@/components/layout/main-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Key } from "lucide-react";

export default function ApiKeys() {
  return (
    <MainLayout title="API Keys">
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-white">API Keys</h1>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            <Plus className="h-4 w-4 mr-2" />
            Generate New Key
          </Button>
        </div>

        <Card className="card-dark border-0">
          <CardHeader>
            <CardTitle className="text-white">Your API Keys</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-12 text-gray-400">
              <Key className="h-16 w-16 mx-auto mb-4 opacity-50" />
              <h3 className="text-xl font-semibold mb-2">No API Keys</h3>
              <p>
                Generate your first API key to start using the DeeX Desk API
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}
