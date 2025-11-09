import { DashboardLayout } from "@/components/DashboardLayout";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { MissionCard } from "@/components/dashboard/MissionCard";
import { Rocket, Globe, Satellite, Users } from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Active Missions",
      value: "12",
      icon: Rocket,
      description: "Across 8 planets",
      trend: { value: "+2 this month", positive: true },
    },
    {
      title: "Planets Explored",
      value: "847",
      icon: Globe,
      description: "In observable universe",
      trend: { value: "+15 this week", positive: true },
    },
    {
      title: "Satellites Online",
      value: "1,234",
      icon: Satellite,
      description: "Operational status",
      trend: { value: "98.2% uptime", positive: true },
    },
    {
      title: "Crew Members",
      value: "156",
      icon: Users,
      description: "Active astronauts",
      trend: { value: "+8 new recruits", positive: true },
    },
  ];

  const missions = [
    {
      name: "Mars Colony Alpha",
      status: "active" as const,
      progress: 67,
      planet: "Mars",
      crew: 12,
    },
    {
      name: "Jupiter Exploration",
      status: "active" as const,
      progress: 43,
      planet: "Jupiter",
      crew: 8,
    },
    {
      name: "Venus Research Station",
      status: "planned" as const,
      progress: 15,
      planet: "Venus",
      crew: 6,
    },
    {
      name: "Europa Ice Mining",
      status: "completed" as const,
      progress: 100,
      planet: "Europa",
      crew: 10,
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Welcome Section */}
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-2">
            Welcome back, Commander! 🚀
          </h2>
          <p className="text-muted-foreground">
            Here's an overview of your space operations
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <StatsCard key={stat.title} {...stat} />
          ))}
        </div>

        {/* Missions Section */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-foreground">Active Missions</h3>
            <button className="text-primary hover:underline text-sm font-medium">
              View All →
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {missions.map((mission) => (
              <MissionCard key={mission.name} {...mission} />
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="glass-panel rounded-xl p-6">
          <h3 className="text-xl font-bold text-foreground mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[
              { time: "2 hours ago", event: "New satellite launched from Mars base", type: "success" },
              { time: "5 hours ago", event: "Crew rotation completed on Space Station Alpha", type: "info" },
              { time: "1 day ago", event: "Europa mission achieved milestone: 50% completion", type: "success" },
              { time: "2 days ago", event: "System maintenance scheduled for next week", type: "warning" },
            ].map((activity, index) => (
              <div key={index} className="flex items-start space-x-3 pb-4 border-b border-border last:border-0">
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  activity.type === 'success' ? 'bg-secondary' : 
                  activity.type === 'warning' ? 'bg-primary' : 
                  'bg-muted'
                }`} />
                <div className="flex-1">
                  <p className="text-sm text-foreground">{activity.event}</p>
                  <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
