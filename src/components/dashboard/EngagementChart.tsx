
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts";

// Mock data
const weekData = [
  { name: "Mon", twitter: 2400, instagram: 4000, facebook: 1200, linkedin: 900 },
  { name: "Tue", twitter: 1398, instagram: 3000, facebook: 1800, linkedin: 1300 },
  { name: "Wed", twitter: 9800, instagram: 2000, facebook: 2800, linkedin: 2900 },
  { name: "Thu", twitter: 3908, instagram: 2780, facebook: 3908, linkedin: 2500 },
  { name: "Fri", twitter: 4800, instagram: 1890, facebook: 4800, linkedin: 2100 },
  { name: "Sat", twitter: 3800, instagram: 2390, facebook: 3800, linkedin: 1700 },
  { name: "Sun", twitter: 4300, instagram: 3490, facebook: 2300, linkedin: 1500 }
];

const monthData = [
  { name: "Week 1", twitter: 4000, instagram: 10000, facebook: 5000, linkedin: 3000 },
  { name: "Week 2", twitter: 3000, instagram: 12000, facebook: 6000, linkedin: 2500 },
  { name: "Week 3", twitter: 9000, instagram: 9000, facebook: 8000, linkedin: 4000 },
  { name: "Week 4", twitter: 7000, instagram: 11000, facebook: 7000, linkedin: 3500 }
];

export function EngagementChart() {
  const [activeTab, setActiveTab] = useState("week");
  const [chartData, setChartData] = useState(weekData);

  useEffect(() => {
    setChartData(activeTab === "week" ? weekData : monthData);
  }, [activeTab]);

  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Engagement Overview</CardTitle>
        <Tabs defaultValue="week" className="w-[400px]" onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="week">This Week</TabsTrigger>
            <TabsTrigger value="month">This Month</TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <AreaChart
            data={chartData}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="instagram" stackId="1" stroke="#E1306C" fill="#E1306C" fillOpacity={0.5} />
            <Area type="monotone" dataKey="twitter" stackId="1" stroke="#1DA1F2" fill="#1DA1F2" fillOpacity={0.5} />
            <Area type="monotone" dataKey="facebook" stackId="1" stroke="#4267B2" fill="#4267B2" fillOpacity={0.5} />
            <Area type="monotone" dataKey="linkedin" stackId="1" stroke="#0077B5" fill="#0077B5" fillOpacity={0.5} />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
