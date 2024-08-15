import { h } from 'preact';
import { useState } from 'preact/hooks';

export function FeaturedImageGallery({ images }) {
  const [active, setActive] = useState(images[0]);

  const handleImageClick = (image) => {
    console.log("Image clicked:", image); // Verifica que la imagen es correcta
    setActive(image);
    console.log("Active image set to:", active); // Verifica que el estado se está actualizando
  };

  return (
    <section className="w-[1000px] self-center">
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
            src={active}
            alt=""
          />
        </div>
        <div className="grid grid-cols-5 gap-4">
          {images.map((image, index) => (
            <div key={index}>
              <img
                onClick={() => handleImageClick(image)}
                src={image}
                className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center"
                alt={`gallery-image-${index}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedImageGallery;
