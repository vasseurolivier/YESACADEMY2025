
'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { handleAdminLogin } from './actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Eye, EyeOff } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

export function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { toast } = useToast();
  const [isPending, setIsPending] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    setIsPending(true);
    try {
      const result = await handleAdminLogin(formData);

      if (result.success) {
        toast({
          title: 'Succès !',
          description: 'Connexion réussie. Redirection en cours...',
        });
        // Reload the page to let the middleware handle the redirect.
        // This is more reliable than client-side navigation in this context.
        setTimeout(() => {
            const redirectUrl = searchParams.get('redirect') || '/admin/photos';
            router.push(redirectUrl);
            router.refresh();
        }, 1500);
      } else {
        toast({
          variant: 'destructive',
          title: 'Erreur',
          description: result.message,
        });
        setIsPending(false);
      }
    } catch (e: any) {
      toast({
          variant: 'destructive',
          title: 'Erreur de communication',
          description: e.message || 'An error occurred.',
      });
      setIsPending(false);
    }
  };

  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <CardContent className="p-6 space-y-4">
                 <div className="relative">
                    <Input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        placeholder="Password"
                        required
                        disabled={isPending}
                        className="pr-10"
                    />
                    <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        <span className="sr-only">Toggle password visibility</span>
                    </Button>
                 </div>
            </CardContent>
            <CardFooter>
                 <Button
                    type="submit"
                    disabled={isPending}
                    className="w-full"
                >
                    {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Login
                </Button>
            </CardFooter>
        </form>
    </Card>
  );
}
