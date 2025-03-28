'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { LockKeyhole } from 'lucide-react';
import { users } from '@/lib/auth';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      router.push(`/${user?.role}/dashboard`);

    } else {
      setError('Invalid credentials');
    }
  };

  // useEffect(() => {
  //   const userStr = localStorage.getItem('user');
  //   if (userStr) {
  //     const userData = JSON.parse(userStr);
  //     setUser(userData);
  //     router.push(`/${users.role}/dashboard`);
  //   }
  // }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-[400px]">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-primary p-3 rounded-full">
              <LockKeyhole className="w-6 h-6 text-primary-foreground" />
            </div>
          </div>
          <CardTitle className="text-2xl text-center">Welcome</CardTitle>
          <CardDescription className="text-center">
            Enter your credentials to access your dashboard
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            {error && (
              <div className="text-sm text-red-500 text-center">{error}</div>
            )}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Sign in
            </Button>
          </form>

          <div className="mt-4 text-sm text-muted-foreground">
            <p className="text-center">Demo Accounts:</p>
            <div className="mt-2 space-y-1">
              <p className="text-xs text-center text-muted-foreground mt-4">
                admin@example.com, projectmanager@example.com, hr@example.com,
                finance@example.com, employee@example.com <br />
                {`(password: "password" for all)`}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
// admin: admin @example.com / password123

// manager: projectmanager @example.com / password123

// hr: hr @example.com / password123

// finance: finance @example.com / password123

// employee: employee @example.com / password123