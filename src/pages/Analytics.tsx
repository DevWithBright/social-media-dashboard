
import DashboardLayout from "@/components/DashboardLayout";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { 
  AreaChart, 
  Area, 
  BarChart,
  Bar,
  PieChart, 
  Pie, 
  Cell,
  LineChart,
  Line,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
  ResponsiveContainer 
} from "recharts";
import { StatCard } from "@/components/dashboard/StatCard";
import { TrendingUp, TrendingDown, Users, Eye, Share2, MessageSquare } from "lucide-react";

// Mock data
const followerGrowthData = [
  { name: "Jan", followers: 10000 },
  { name: "Feb", followers: 12000 },
  { name: "Mar", followers: 15000 },
  { name: "Apr", followers: 18000 },
  { name: "May", followers: 22000 },
  { name: "Jun", followers: 27500 },
];

const platformDistributionData = [
  { name: "Instagram", value: 45 },
  { name: "Twitter", value: 25 },
  { name: "Facebook", value: 20 },
  { name: "LinkedIn", value: 10 },
];

const contentPerformanceData = [
  { name: "Post 1", views: 1500, engagement: 300, shares: 120 },
  { name: "Post 2", views: 2200, engagement: 450, shares: 180 },
  { name: "Post 3", views: 1800, engagement: 380, shares: 95 },
  { name: "Post 4", views: 3000, engagement: 600, shares: 210 },
  { name: "Post 5", views: 2500, engagement: 500, shares: 150 },
];

const audienceDemographicsData = [
  { name: "18-24", male: 15, female: 20, other: 2 },
  { name: "25-34", male: 25, female: 30, other: 3 },
  { name: "35-44", male: 18, female: 20, other: 2 },
  { name: "45-54", male: 10, female: 12, other: 1 },
  { name: "55+", male: 8, female: 10, other: 1 },
];

const PLATFORM_COLORS = {
  Instagram: "#E1306C",
  Twitter: "#1DA1F2",
  Facebook: "#4267B2",
  LinkedIn: "#0077B5",
};

const AnalyticsPage = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
            <p className="text-muted-foreground">
              Detailed metrics and insights for your social media performance.
            </p>
          </div>
          <div className="flex gap-2">
            <Select defaultValue="30days">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Time Period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7days">Last 7 Days</SelectItem>
                <SelectItem value="30days">Last 30 Days</SelectItem>
                <SelectItem value="90days">Last 90 Days</SelectItem>
                <SelectItem value="year">This Year</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        {/* Overview Stats */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard 
            title="Total Followers" 
            value="27.5K"
            change={{ value: 12, trend: "up" }}
            icon={<Users className="h-4 w-4" />}
          />
          <StatCard 
            title="Avg. Engagement" 
            value="4.3%"
            change={{ value: 0.8, trend: "up" }}
            icon={<MessageSquare className="h-4 w-4" />}
          />
          <StatCard 
            title="Total Reach" 
            value="89.2K"
            change={{ value: 5.2, trend: "up" }}
            icon={<Eye className="h-4 w-4" />}
          />
          <StatCard 
            title="Total Shares" 
            value="1.2K"
            change={{ value: 0.3, trend: "down" }}
            icon={<Share2 className="h-4 w-4" />}
          />
        </div>
        
        {/* Growth Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Follower Growth</CardTitle>
            <CardDescription>
              Track your follower growth across all platforms
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <AreaChart
                data={followerGrowthData}
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
                <Area type="monotone" dataKey="followers" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        {/* Platform Distribution & Content Performance */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Platform Distribution</CardTitle>
              <CardDescription>
                Follower distribution across platforms
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={platformDistributionData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {platformDistributionData.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={PLATFORM_COLORS[entry.name as keyof typeof PLATFORM_COLORS]} 
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Content Performance</CardTitle>
              <CardDescription>
                Performance metrics for your recent posts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={contentPerformanceData}
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
                  <Bar dataKey="views" name="Views" fill="#8884d8" />
                  <Bar dataKey="engagement" name="Engagement" fill="#82ca9d" />
                  <Bar dataKey="shares" name="Shares" fill="#ffc658" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
        
        {/* Audience Demographics */}
        <Card>
          <CardHeader>
            <CardTitle>Audience Demographics</CardTitle>
            <CardDescription>
              Age and gender distribution of your audience
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart
                data={audienceDemographicsData}
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
                <Bar dataKey="male" name="Male" fill="#3b82f6" />
                <Bar dataKey="female" name="Female" fill="#ec4899" />
                <Bar dataKey="other" name="Other" fill="#10b981" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default AnalyticsPage;
