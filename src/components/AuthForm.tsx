import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';

export const AuthForm = () => {
  const navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupName, setSignupName] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login:', { loginEmail, loginPassword });
    toast.success('🚀 Launch successful! Welcome aboard!');
    setTimeout(() => {
      navigate('/dashboard');
    }, 1000);
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Signup:', { signupName, signupEmail, signupPassword });
    toast.success('✨ Account created! Preparing for launch...');
    setTimeout(() => {
      navigate('/dashboard');
    }, 1000);
  };

  return (
    <div className="relative z-10 w-full max-w-md mx-auto p-8">
      <div className="glass-panel rounded-2xl p-8 shadow-2xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-glow mb-2">
            Welcome to <span className="text-primary">Cosmos</span>
          </h1>
          <p className="text-muted-foreground">Explore the universe of possibilities</p>
        </div>

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6 bg-space-medium">
            <TabsTrigger value="login" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Sign In
            </TabsTrigger>
            <TabsTrigger value="signup" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Create Account
            </TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="login-email" className="text-foreground">Email</Label>
                <Input
                  id="login-email"
                  type="email"
                  placeholder="astronaut@cosmos.com"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  className="bg-space-medium border-border focus:border-primary transition-colors"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="login-password" className="text-foreground">Password</Label>
                <Input
                  id="login-password"
                  type="password"
                  placeholder="••••••••"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  className="bg-space-medium border-border focus:border-primary transition-colors"
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-lg transition-all hover:scale-105"
              >
                Launch Into Space 🚀
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="signup">
            <form onSubmit={handleSignup} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="signup-name" className="text-foreground">Full Name</Label>
                <Input
                  id="signup-name"
                  type="text"
                  placeholder="Neil Armstrong"
                  value={signupName}
                  onChange={(e) => setSignupName(e.target.value)}
                  className="bg-space-medium border-border focus:border-primary transition-colors"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="signup-email" className="text-foreground">Email</Label>
                <Input
                  id="signup-email"
                  type="email"
                  placeholder="astronaut@cosmos.com"
                  value={signupEmail}
                  onChange={(e) => setSignupEmail(e.target.value)}
                  className="bg-space-medium border-border focus:border-primary transition-colors"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="signup-password" className="text-foreground">Password</Label>
                <Input
                  id="signup-password"
                  type="password"
                  placeholder="••••••••"
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
                  className="bg-space-medium border-border focus:border-primary transition-colors"
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold py-6 text-lg transition-all hover:scale-105"
              >
                Begin Your Journey ✨
              </Button>
            </form>
          </TabsContent>
        </Tabs>

        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            By continuing, you agree to our{' '}
            <a href="#" className="text-primary hover:underline">Terms of Service</a>
            {' '}and{' '}
            <a href="#" className="text-primary hover:underline">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
};
