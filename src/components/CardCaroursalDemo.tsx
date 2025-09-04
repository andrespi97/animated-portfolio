
import { Carrusel } from "./ui/carrusel"

function BasicExample() {
    const images = [
        { src: "src/assets/images/rxmode/1.webp", alt: "Image 1" },
        { src: "src/assets/images/rxmode/2.webp", alt: "Image 2" },
        { src: "src/assets/images/rxmode/3.webp", alt: "Image 3" },
        { src: "src/assets/images/rxmode/4.webp", alt: "Image 4" },
        { src: "src/assets/images/rxmode/5.webp", alt: "Image 5" },
        { src: "src/assets/images/rxmode/6.webp", alt: "Image 6" },
        { src: "src/assets/images/rxmode/7.webp", alt: "Image 7" },
        { src: "src/assets/images/rxmode/8.webp", alt: "Image 8" },
    ]

    return (
        <div className="w-full">
            <div className="pt-10">
                <Carrusel
                    images={images}
                    autoplayDelay={2000}
                />
            </div>
        </div>
    )
}
export default BasicExample