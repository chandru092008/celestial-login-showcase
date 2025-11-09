import { DashboardLayout } from "@/components/DashboardLayout";

const Settings = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-2">Settings</h2>
          <p className="text-muted-foreground">Configure your mission control preferences</p>
        </div>
        <div className="glass-panel rounded-xl p-8 text-center">
          <p className="text-muted-foreground">Settings page - Coming soon! ⚙️</p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
