import { DashboardLayout } from "@/components/DashboardLayout";

const Missions = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-2">All Missions</h2>
          <p className="text-muted-foreground">Manage and monitor all space missions</p>
        </div>
        <div className="glass-panel rounded-xl p-8 text-center">
          <p className="text-muted-foreground">Missions page - Coming soon! 🚀</p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Missions;
