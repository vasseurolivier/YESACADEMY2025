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

    setIsPending(true);
    try {
      await handleImageUpload(formData);

      toast({
        title: 'Succès !',
        description: "Image téléversée avec succès. La page va s'actualiser.",
      });
      // Recharger pour voir les changements. C'est la méthode la plus fiable ici.
      setTimeout(() => window.location.reload(), 1500);

    } catch (e: any) {
        toast({
            variant: 'destructive',
            title: 'Erreur',
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
