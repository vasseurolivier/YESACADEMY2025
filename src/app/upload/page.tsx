// src/app/upload/page.tsx
'use client';

import { useState } from 'react';
import { handleLogoUpload } from "./actions";

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
    <div style={{ padding: '40px', fontFamily: 'sans-serif', maxWidth: '600px', margin: 'auto' }}>
      <h1>Uploader un nouveau logo</h1>
      <p>
        Sélectionnez une image (PNG, JPG, etc.) depuis votre ordinateur. Elle remplacera le logo actuel du site.
        Le fichier sera automatiquement renommé en <strong>logo.png</strong>.
      </p>
      <form onSubmit={handleSubmit}>
        <input 
          type="file" 
          name="logo" 
          accept="image/*" 
          required 
          disabled={status.type === 'loading'}
          style={{ display: 'block', margin: '20px 0' }}
        />
        <button 
          type="submit" 
          disabled={status.type === 'loading'}
          style={{
            padding: '10px 20px',
            cursor: 'pointer',
            background: status.type === 'loading' ? '#ccc' : '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px'
          }}
        >
          {status.type === 'loading' ? 'En cours...' : 'Téléverser et remplacer le logo'}
        </button>
      </form>
      {status.type !== 'idle' && (
        <div style={{ 
          marginTop: '20px', 
          padding: '10px', 
          borderRadius: '5px', 
          background: status.type === 'error' ? '#ffdddd' : '#ddffdd',
          color: status.type === 'error' ? '#d8000c' : '#4f8a10',
          border: `1px solid ${status.type === 'error' ? '#d8000c' : '#4f8a10'}`
        }}>
          {status.message}
        </div>
      )}
    </div>
  );
}
