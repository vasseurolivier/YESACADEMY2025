'use client';

import { useState } from 'react';
import { handleImageUpload } from "./actions";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

export function UploadForm({ imageId }: { imageId: string }) {
  const { toast } = useToast();
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    if (!formData.get('image') || (formData.get('image') as File).size === 0) {
        toast({
            variant: 'destructive',
            title: 'Aucun fichier sélectionné',
            description: 'Veuillez sélectionner un fichier avant de le remplacer.',
        });
        return;
    }

    setIsPending(true);

    try {
      const result = await handleImageUpload(formData);

      if (result.success) {
        toast({
          title: 'Succès !',
          description: result.message,
        });
        // Force a reload to ensure the new image is displayed everywhere
        setTimeout(() => {
          window.location.reload();
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
            description: e.message || 'Une erreur est survenue lors du téléversement.',
        });
        setIsPending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="hidden" name="imageId" value={imageId} />
      <Input 
        type="file" 
        name="image" 
        accept="image/*"
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
