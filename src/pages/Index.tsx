
import DashboardLayout from "@/components/DashboardLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { EngagementChart } from "@/components/dashboard/EngagementChart";
import { PlatformPerformance } from "@/components/dashboard/PlatformPerformance";
import { ContentCalendar } from "@/components/dashboard/ContentCalendar";
import { RecentEngagement } from "@/components/dashboard/RecentEngagement";
import { Users, MessageSquare, Eye, TrendingUp } from "lucide-react";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Your social media performance at a glance.
          </p>
        </div>
        
        {/* Stats Overview */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard 
            title="Total Followers" 
            value="27.5K"
            change={{ value: 12, trend: "up" }}
            icon={<Users className="h-4 w-4" />}
          />
          <StatCard 
            title="Engagement Rate" 
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
            title="Growth Rate" 
            value="2.1%"
            change={{ value: 0.3, trend: "down" }}
            icon={<TrendingUp className="h-4 w-4" />}
          />
        </div>
        
        {/* Charts */}
        <div className="grid gap-4 md:grid-cols-3">
          <EngagementChart />
          <PlatformPerformance />
        </div>
        
        {/* Content Calendar */}
        <div className="grid gap-4 md:grid-cols-2">
          <ContentCalendar />
          <RecentEngagement />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
