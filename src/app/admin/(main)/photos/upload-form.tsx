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

    const file = formData.get('image') as File;
    if (!file || file.size === 0) {
        toast({
            variant: 'destructive',
            title: 'Aucun fichier sélectionné',
            description: 'Veuillez sélectionner un fichier avant de le remplacer.',
        });
        return;
    }

    setIsPending(true);

    try {
      // The server action will throw an error on failure.
      await handleImageUpload(formData);

      // If it reaches here, it was successful.
      toast({
        title: 'Succès !',
        description: "L'image a été remplacée. La page va se rafraîchir.",
      });

      // Force a reload to ensure the new image is displayed everywhere
      setTimeout(() => {
        window.location.reload();
      }, 1500);

    } catch (e: any) {
      // Catch any error thrown by the server action.
      toast({
          variant: 'destructive',
          title: 'Erreur de téléversement',
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
