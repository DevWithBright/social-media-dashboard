
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from "recharts";

// Mock data
const platformData = [
  {
    name: "Twitter",
    followers: 4000,
    engagement: 2400,
    reach: 6000,
  },
  {
    name: "Instagram",
    followers: 10000,
    engagement: 5000,
    reach: 18000,
  },
  {
    name: "Facebook",
    followers: 7000,
    engagement: 3000,
    reach: 12000,
  },
  {
    name: "LinkedIn",
    followers: 3000,
    engagement: 2000,
    reach: 5000,
  },
  {
    name: "YouTube",
    followers: 2500,
    engagement: 1500,
    reach: 8000,
  },
];

export function PlatformPerformance() {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Platform Performance</CardTitle>
      </CardHeader>
      <CardContent className="pl-2">
        <ResponsiveContainer width="100%" height={350}>
          <BarChart
            data={platformData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="followers" name="Followers" fill="#8884d8" />
            <Bar dataKey="engagement" name="Engagement" fill="#82ca9d" />
            <Bar dataKey="reach" name="Reach" fill="#ffc658" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
