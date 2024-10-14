import React from "react";

export function FeaturedImageGallery({ images }) {
    const [active, setActive] = React.useState(images[0]);

    return (
        <section className="flex flex-col gap-5 md:gap-10 max-w-[1000px] w-full self-center py-20 px-5">
            <h3 className="uppercase text-3xl md:text-6xl font-bold text-center">Expériences</h3>
            <div>
                <img
                    className="h-auto w-full max-w-full aspect-video rounded-lg object-cover object-center"
                    src={active}
                    alt=""
                />
            </div>
            <div className="flex justify-between gap-2">
                {images.map((imgelink, index) => (
                    <div key={index} >
                        <img
                            onClick={() => setActive(imgelink)}
                            src={imgelink}
                            className="max-h-[120px] aspect-square md:aspect-video cursor-pointer rounded-lg object-cover object-center"
                            alt={`imagen-${index}`}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
