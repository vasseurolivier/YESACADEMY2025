// src/app/upload/page.tsx
'use client';

import { useState } from 'react';
import { handleLogoUpload } from "./actions";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function UploadPage() {
  const [status, setStatus] = useState<{ type: 'idle' | 'loading' | 'success' | 'error'; message: string }>({ type: 'idle', message: '' });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus({ type: 'loading', message: 'Téléversement en cours...' });

    const formData = new FormData(event.currentTarget);
    try {
      const result = await handleLogoUpload(formData);

      if (result.success) {
        setStatus({ type: 'success', message: 'Logo téléversé avec succès ! Le site va se rafraîchir.' });
        // Attendre un peu pour que l'utilisateur voie le message, puis rafraîchir.
        setTimeout(() => window.location.reload(), 2000);
      } else {
        setStatus({ type: 'error', message: result.message || 'Une erreur inconnue est survenue.' });
      }
    } catch (e: any) {
        setStatus({ type: 'error', message: e.message || 'Une erreur de communication est survenue.' });
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-2">Uploader un nouveau logo</h1>
      <p className="text-muted-foreground mb-6">
        Sélectionnez une image (PNG, JPG, etc.) depuis votre ordinateur. Elle remplacera le logo actuel du site.
        Le fichier sera automatiquement renommé en <strong>logo.png</strong>.
      </p>
      <form onSubmit={handleSubmit} className="max-w-md space-y-4">
        <Input 
          type="file" 
          name="logo" 
          accept="image/*" 
          required 
          disabled={status.type === 'loading'}
        />
        <Button 
          type="submit" 
          disabled={status.type === 'loading'}
        >
          {status.type === 'loading' ? 'En cours...' : 'Téléverser et remplacer le logo'}
        </Button>
      </form>
      {status.type !== 'idle' && (
        <div 
          className={`mt-4 p-4 rounded-md text-sm ${
            status.type === 'error' 
              ? 'bg-destructive/10 text-destructive border border-destructive/20' 
              : 'bg-green-500/10 text-green-700 border border-green-500/20'
          }`}
        >
          {status.message}
        </div>
      )}
    </div>
  );
}
