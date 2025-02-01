import Image from 'next/image';

interface ShopImageGalleryProps {
  imageUrl: string;
}

export default function ShopImageGallery({ imageUrl }: ShopImageGalleryProps) {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
      <div className="flex flex-row lg:flex-col gap-4">
        {[1, 2, 3, 4].map((num) => (
          <div key={num}>
            <Image
              src={imageUrl}
              alt={`Thumbnail ${num}`}
              width={60}
              height={60}
              className="w-16 h-16 object-contain rounded-md border border-gray-300"
            />
          </div>
        ))}
      </div>
      <Image
        src={imageUrl}
        alt="Product Image"
        width={250}
        height={250}
        className="rounded-md"
      />
    </div>
  );
}
