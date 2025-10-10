'use client';

import { useState, useTransition } from 'react';
import { handleImageUpload } from "./actions";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

export function UploadForm({ imageId }: { imageId: string }) {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    startTransition(async () => {
      try {
        const result = await handleImageUpload(formData);

        if (result.success) {
          toast({
            title: 'Succès !',
            description: result.message,
          });
          // Reload to see changes. A more advanced implementation could re-fetch data.
          window.location.reload();
        } else {
          toast({
            variant: 'destructive',
            title: 'Erreur',
            description: result.message,
          });
        }
      } catch (e: any) {
        toast({
            variant: 'destructive',
            title: 'Erreur de communication',
            description: e.message || 'Une erreur est survenue.',
        });
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="hidden" name="imageId" value={imageId} />
      <Input 
        type="file" 
        name="image" 
        accept="image/*" 
        required 
        disabled={isPending}
      />
      <Button 
        type="submit" 
        disabled={isPending}
        className="w-full"
      >
        {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        Remplacer l'image
      </Button>
    </form>
  );
}
