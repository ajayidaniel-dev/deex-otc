import { MainLayout } from "@/components/layout/main-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Rates() {
  const rates = [
    { pair: "BTC/USD", rate: "65,000.00", change: "+2.5%", positive: true },
    {
      pair: "BTC/NGN",
      rate: "104,000,000.00",
      change: "+1.8%",
      positive: true,
    },
    { pair: "USDT/USD", rate: "1.00", change: "0.0%", positive: true },
    { pair: "USDT/NGN", rate: "1,603.00", change: "+0.3%", positive: true },
    { pair: "ETH/USD", rate: "3,200.00", change: "-1.2%", positive: false },
    { pair: "ETH/NGN", rate: "5,120,000.00", change: "-0.8%", positive: false },
  ];

  return (
    <MainLayout title="Rates">
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-white">Exchange Rates</h1>
          <Button variant="ghost" className="text-gray-400 hover:text-white">
            Refresh
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {rates.map((rate, index) => (
            <Card key={index} className="card-dark border-0">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-white font-semibold">{rate.pair}</h3>
                  <Badge
                    className={`${
                      rate.positive
                        ? "bg-green-600 hover:bg-green-700"
                        : "bg-red-600 hover:bg-red-700"
                    } text-white`}
                  >
                    {rate.change}
                  </Badge>
                </div>
                <p className="text-2xl font-bold text-white">{rate.rate}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
