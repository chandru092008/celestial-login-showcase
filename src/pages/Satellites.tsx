import { DashboardLayout } from "@/components/DashboardLayout";

const Satellites = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-2">Satellites</h2>
          <p className="text-muted-foreground">Monitor satellite network and operations</p>
        </div>
        <div className="glass-panel rounded-xl p-8 text-center">
          <p className="text-muted-foreground">Satellites page - Coming soon! 🛰️</p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Satellites;
