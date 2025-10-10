// src/app/admin/logo/page.tsx
'use client';

import { useState } from 'react';
import { handleLogoUpload } from "./actions";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import Image from 'next/image';

export default function UploadPage() {
  const { toast } = useToast();
  const [isPending, startTransition] = useState(false);
  const [logoPreview, setLogoPreview] = useState<string | null>('/logo.png');
  
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setLogoPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    startTransition(true);
    try {
      const result = await handleLogoUpload(formData);

      if (result.success) {
        toast({
            title: 'Succès !',
            description: 'Logo téléversé avec succès ! Le site va se rafraîchir.',
        });
        setTimeout(() => window.location.reload(), 2000);
      } else {
         toast({
            variant: 'destructive',
            title: 'Erreur',
            description: result.message || 'Une erreur inconnue est survenue.',
        });
      }
    } catch (e: any) {
        toast({
            variant: 'destructive',
            title: 'Erreur de communication',
            description: e.message || 'Une erreur est survenue.',
        });
    } finally {
        startTransition(false);
    }
  };

  return (
    <div className="container mx-auto py-8">
        <div className="mb-8">
            <h1 className="text-3xl font-bold">Gérer le logo du site</h1>
            <p className="text-muted-foreground">
                Uploadez une nouvelle image pour remplacer le logo actuel sur l'ensemble du site.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
                <CardHeader>
                    <CardTitle>Nouveau Logo</CardTitle>
                    <CardDescription>
                        Sélectionnez un fichier image (PNG, JPG, etc.). Il sera automatiquement converti et remplacera le logo existant.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <Input 
                            type="file" 
                            name="logo" 
                            accept="image/*" 
                            required 
                            disabled={isPending}
                            onChange={handleFileChange}
                        />
                        <Button 
                            type="submit" 
                            disabled={isPending}
                            className="w-full"
                        >
                            {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            Remplacer le logo
                        </Button>
                    </form>
                </CardContent>
            </Card>
             <Card>
                <CardHeader>
                    <CardTitle>Aperçu</CardTitle>
                    <CardDescription>
                        Aperçu du logo actuel et du nouveau logo sélectionné.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-2 gap-4 items-center text-center">
                         <div>
                            <p className="text-sm font-semibold mb-2">Actuel</p>
                            <div className="relative w-32 h-32 mx-auto bg-muted rounded-md flex items-center justify-center">
                                <Image src="/logo.png" alt="Current Logo" unoptimized fill className="object-contain p-2"/>
                            </div>
                        </div>
                        <div>
                             <p className="text-sm font-semibold mb-2">Nouveau</p>
                             <div className="relative w-32 h-32 mx-auto bg-muted rounded-md flex items-center justify-center">
                                {logoPreview && logoPreview !== '/logo.png' ? (
                                     <Image src={logoPreview} alt="New Logo Preview" fill className="object-contain p-2"/>
                                ) : (
                                    <span className="text-xs text-muted-foreground">Aucun fichier</span>
                                )}
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    </div>
  );
}
