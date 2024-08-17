import React from "react";

export function FeaturedImageGallery({ images }) {
    const [active, setActive] = React.useState(images[0]);

    return (
        <section className="flex flex-col gap-5 w-[1000px] self-center my-20">
            <h3 className="uppercase text-6xl font-bold mb-10 text-center">Experiencias</h3>
            <div>
                <img
                    className="h-auto w-full max-w-full aspect-video rounded-lg object-cover object-center"
                    src={active}
                    alt=""
                />
            </div>
            <div className="flex justify-between ">
                {images.map((imgelink, index) => (
                    <div key={index} >
                        <img
                            onClick={() => setActive(imgelink)}
                            src={imgelink}
                            className="h-[120px] aspect-video cursor-pointer rounded-lg object-cover object-center"
                            alt={`gallery-image-${index}`}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
