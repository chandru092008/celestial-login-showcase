import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface MissionCardProps {
  name: string;
  status: "active" | "completed" | "planned";
  progress: number;
  planet: string;
  crew: number;
}

export function MissionCard({ name, status, progress, planet, crew }: MissionCardProps) {
  const statusColors = {
    active: "bg-secondary text-secondary-foreground",
    completed: "bg-primary text-primary-foreground",
    planned: "bg-muted text-muted-foreground",
  };

  return (
    <div className="glass-panel rounded-xl p-5 hover:border-primary/50 transition-colors">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h4 className="text-lg font-semibold text-foreground mb-1">{name}</h4>
          <p className="text-sm text-muted-foreground">Destination: {planet}</p>
        </div>
        <Badge className={statusColors[status]}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </Badge>
      </div>
      
      <div className="space-y-3">
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-muted-foreground">Progress</span>
            <span className="text-foreground font-medium">{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
        
        <div className="flex items-center text-sm text-muted-foreground">
          <span>👨‍🚀 {crew} crew members</span>
        </div>
      </div>
    </div>
  );
}
