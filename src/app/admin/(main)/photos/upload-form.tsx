'use client';

import { useState } from 'react';
import { handleImageUrlUpdate } from "./actions";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

export function UploadForm({ imageId }: { imageId: string }) {
  const { toast } = useToast();
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsPending(true);

    const formData = new FormData(event.currentTarget);
    const imageUrl = formData.get('imageUrl') as string;

    if (!imageUrl) {
        toast({
            variant: 'destructive',
            title: 'URL manquante',
            description: 'Veuillez saisir une URL d\'image.',
        });
        setIsPending(false);
        return;
    }

    try {
      await handleImageUrlUpdate(formData);

      toast({
        title: 'Succès !',
        description: "L'image a été mise à jour. La page va se rafraîchir.",
      });

      // Force a reload to ensure the new image is visible across the site.
      setTimeout(() => {
        window.location.reload();
      }, 1500);

    } catch (e: any) {
      // Catch errors thrown from the server action
      toast({
          variant: 'destructive',
          title: 'Erreur de mise à jour',
          description: e.message || 'Une erreur est survenue lors de la mise à jour.',
      });
      setIsPending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="hidden" name="imageId" value={imageId} />
      <Input 
        type="url" 
        name="imageUrl"
        placeholder="Collez l'URL de la nouvelle image ici"
        disabled={isPending}
        required
      />
      <Button 
        type="submit" 
        disabled={isPending}
        className="w-full"
      >
        {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        Remplacer par URL
      </Button>
    </form>
  );
}
