
import { SparklesIcon } from "lucide-react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import "swiper/css/effect-coverflow"

interface CarouselProps {
    images: { src: string; alt: string }[]
    autoplayDelay?: number
    showPagination?: boolean
    showNavigation?: boolean
}

export const Carrusel: React.FC<CarouselProps> = ({
    images,
    autoplayDelay = 1500,
}) => {
    const css = `
  .swiper {
    width: 100%;
    // padding-bottom: 10px;
  }
  
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    /* height: 300px; */
    /* margin: 20px; */
  }
  
  .swiper-slide img {
    display: block;
    width: 100%;
  }
  
  .swiper-3d .swiper-slide-shadow-left {
    background-image: none;
  }
  .swiper-3d .swiper-slide-shadow-right{
    background: none;
  }
  `
    return (
        <section className="w-ace-y-4">
            <style>{css}</style>
            <div className="mx-auto w-full max-w-2xl rounded-[24px] border border-black/5 p-2 shadow-sm md:rounded-t-[44px]">
                <div className="relative mx-auto flex w-full flex-col rounded-[24px] border border-black/5 bg-neutral-800/5 p-2 shadow-sm md:items-start md:gap-2 md:rounded-b-[20px] md:rounded-t-[40px] md:p-2">
                    <div
                        // variant="outline"
                        className="absolute left-4 top-6 rounded-[14px] border border-black/10 text-base md:left-6"
                    >
                        <SparklesIcon className="fill-[#EEBDE0] stroke-1 text-neutral-800" />{" "}
                        Latest component
                    </div>
                    <div className="flex flex-col justify-center pb-2 pl-4 pt-14 md:items-center">
                        <div className="flex gap-2">
                            <div>
                                <h3 className="text-4xl opacity-85 font-bold tracking-tight">
                                    Card Carousel
                                </h3>
                                <p>Seamless Images carousel animation.</p>
                            </div>
                        </div>
                    </div>

                    <div className=" w-full items-center justify-center gap-4">
                        <div className="w-full">
                            <Swiper
                                // install Swiper modules
                                // modules={[Navigation, Pagination, Scrollbar, A11y]}
                                modules={[EffectCoverflow, Autoplay]}
                                spaceBetween={10}
                                slidesPerView={"auto"}
                                autoplay={{
                                    delay: autoplayDelay,
                                    disableOnInteraction: false,
                                }}
                                effect={"coverflow"}
                                coverflowEffect={{
                                    rotate: 5,
                                    stretch: 2,
                                    depth: 100,
                                    modifier: 2.5,
                                }}
                                grabCursor={true}
                                centeredSlides={true}
                                loop={true}
                            // navigation
                            // pagination={{ clickable: true }}
                            // scrollbar={{ draggable: true }}
                            // onSwiper={(swiper) => console.log(swiper)}
                            // onSlideChange={() => console.log('slide change')}
                            >
                                {images.map((image, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="size-full rounded-3xl">
                                            <img src={image.src} alt={image.alt} className="rounded-lg w-full h-auto" />
                                        </div>
                                    </SwiperSlide>
                                ))}
                                {images.map((image, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="size-full rounded-3xl">
                                            <img src={image.src} alt={image.alt} className="rounded-lg w-full h-auto" />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-6 px-2">
                        <span className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-4 h-4 mr-2" />
                            React
                        </span>
                        <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="w-4 h-4 mr-2" />
                            TypeScript
                        </span>
                        <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swiper/swiper-original.svg" alt="Swiper" className="w-4 h-4 mr-2" />
                            Swiper
                        </span>
                        <span className="inline-flex items-center rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-800">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="Tailwind CSS" className="w-4 h-4 mr-2" />
                            Tailwind CSS
                        </span>
                    </div>
                    <div className="flex flex-col gap-1 mt-2 px-2 text-xs">
                        <span className="text-purple-600">React: UI library for building interfaces</span>
                        <span className="text-blue-600">TypeScript: Typed JavaScript for safer code</span>
                        <span className="text-green-600">Swiper: Modern touch slider library</span>
                        <span className="text-yellow-600">Tailwind CSS: Utility-first CSS framework</span>
                    </div>

                </div>
            </div>
        </section >
    )
}
