import { SolarSystem } from '@/components/SolarSystem';
import { FloatingText } from '@/components/FloatingText';
import { AuthForm } from '@/components/AuthForm';

const Index = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <SolarSystem />
      <FloatingText />
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <AuthForm />
      </div>
    </div>
  );
};

export default Index;
