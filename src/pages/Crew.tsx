import { DashboardLayout } from "@/components/DashboardLayout";

const Crew = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-2">Crew Members</h2>
          <p className="text-muted-foreground">Manage astronauts and crew assignments</p>
        </div>
        <div className="glass-panel rounded-xl p-8 text-center">
          <p className="text-muted-foreground">Crew page - Coming soon! 👨‍🚀</p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Crew;
