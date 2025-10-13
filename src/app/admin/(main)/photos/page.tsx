
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';
import { UploadForm } from './upload-form';

export const metadata = {
    title: 'Gérer les images du site',
};

export default function ManagePhotosPage() {
    return (
        <div className="container mx-auto py-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold">Gérer les images du site</h1>
                <p className="text-muted-foreground">Téléversez de nouvelles images pour remplacer celles existantes.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PlaceHolderImages.map((image) => (
                    <Card key={image.id}>
                        <CardHeader>
                            <CardTitle className="text-lg">{image.id}</CardTitle>
                            <CardDescription>{image.description}</CardDescription>
                            {image.location && (
                                <p className="text-sm font-semibold text-primary pt-2">{image.location}</p>
                            )}
                        </CardHeader>
                        <CardContent>
                            <div className="relative aspect-video mb-4 overflow-hidden rounded-md">
                                <Image
                                    src={image.imageUrl}
                                    alt={image.description}
                                    fill
                                    className="object-cover"
                                    unoptimized // Important for local images in /public
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                            <UploadForm imageId={image.id} />
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
