// src/app/upload/page.tsx
import { handleLogoUpload } from "./actions";

export default function UploadPage() {
  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif', maxWidth: '600px', margin: 'auto' }}>
      <h1>Uploader un nouveau logo</h1>
      <p>
        Sélectionnez une image (PNG, JPG, etc.) depuis votre ordinateur. Elle remplacera le logo actuel du site.
        Le fichier sera automatiquement renommé en <strong>logo.png</strong>.
      </p>
      <form action={handleLogoUpload}>
        <input 
          type="file" 
          name="logo" 
          accept="image/*" 
          required 
          style={{ display: 'block', margin: '20px 0' }}
        />
        <button 
          type="submit" 
          style={{
            padding: '10px 20px',
            cursor: 'pointer',
            background: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px'
          }}
        >
          Téléverser et remplacer le logo
        </button>
      </form>
    </div>
  );
}