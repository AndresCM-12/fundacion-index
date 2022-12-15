import Button from "@/components/common/Button";
import Image from "next/image";
import Link from "next/link";
import LeftArrowCircle from "@/components/icons/LeftArrowCircle";
import RightArrowCircle from "@/components/icons/RightArrowCircle";

const CarouselTransparencia = () => {
    const scroll = 360;
    let scrollPosition = 0;

    const lateralScrollL = (e) => {
        e.preventDefault();

        document.querySelector(".carouselsection").scroll({
            left: (scrollPosition -= scroll),
            behavior: "smooth",
        });
        if (scrollPosition + scroll <= 0) {
            const maxWidthSlider =
                document.querySelector(".carouselsection").scrollWidth -
                document.querySelector(".carouselsection").clientWidth;
            document.querySelector(".carouselsection").scroll({
                left: maxWidthSlider,
                behavior: "smooth",
            });
            scrollPosition = maxWidthSlider;
        }
    };
    const lateralScrollR = (e) => {
        e.preventDefault();

        document.querySelector(".carouselsection").scroll({
            left: (scrollPosition += scroll),
            behavior: "smooth",
        });
        const maxWidthSlider =
            document.querySelector(".carouselsection").scrollWidth -
            document.querySelector(".carouselsection").clientWidth;
        if (maxWidthSlider + scroll <= scrollPosition) {
            document.querySelector(".carouselsection").scroll({
                left: 0,
                behavior: "smooth",
            });
            scrollPosition = 0;
        }
    };
    return (
        <>
            <div className='flex justify-around gap-4 sm:justify-end'>
                <a onClick={lateralScrollL}>
                    <LeftArrowCircle />
                </a>
                <a onClick={lateralScrollR}>
                    <RightArrowCircle />
                </a>
            </div>
            <div className='carouselsection mt-16 flex w-full scrollbar-hide   lg:scrollbar-default snap-x overflow-x-auto px-0 lg:px-8 lg:mb-16'>
                {/* ITEM ONE  */}
                <div className='item border-l-2 border-index-border px-4 max-w-xs shrink-0 snap-center '>
                    <div className='imagecontainer h-[256px]'>
                        <Image
                            src='/images/nosotros/confiocircle.png'
                            alt='carouselimg'
                            className='w-full'
                            width={232}
                            height={233}
                            layout='fixed'
                        />
                    </div>
                    <div className='downsection px-4 pt-4 pb-8'>
                        <p className='font-semibold font-albra text-2xl  leading-8 w-full'>
                            Cada 2 años
                        </p>
                        <br />
                        <p>
                            Cumplimos voluntariamente con el análisis de buenas
                            prácticas y transparencia de Confío A.C.
                        </p>
                        <br />
                        <p>
                            (Construyendo Organizaciones Civiles Transparentes
                            A.C.)
                        </p>
                        <br />
                        <Button
                            label='Ver nuestro reporte'
                            externalUrl='http://intranet.confio.org.mx/oscreports/70'
                            appearance='white'
                            className='text-black text-[15px] font-normal py-5 hover:text-white hover:bg-index-aqua'
                        />
                    </div>
                </div>
                {/* ITEM TWO */}
                <div className='item border-l-2 border-index-border px-4 max-w-xs shrink-0 snap-center '>
                    <div className='imagecontainer h-[256px]'>
                        <Image
                            src='/images/nosotros/cemeficircle.png'
                            alt='carouselimg'
                            className='w-full'
                            width={232}
                            height={233}
                            layout='fixed'
                        />
                    </div>
                    <div className='downsection px-4 pt-4 pb-8'>
                        <p className='font-semibold font-albra text-2xl  leading-8 w-full'>
                            Cumplimos
                        </p>
                        <br />
                        <p>
                            Con los indicadores de Institucionalidad y
                            Transparencia del Centro Mexicano para la
                            Filantropía (CEMEFI).
                        </p>
                        <br />
                        <Image
                            src='/images/nosotros/cemefi.png'
                            alt='carouselimg'
                            className='w-full'
                            width={145}
                            height={91}
                            layout='fixed'
                        />
                    </div>
                </div>
                {/* ITEM THREE */}
                <div className='item border-l-2 border-index-border px-4  max-w-xs shrink-0 snap-center '>
                    <div className='imagecontainer h-[256px]'>
                        <Image
                            src='/images/nosotros/dfkcircle.png'
                            alt='carouselimg'
                            className='w-full'
                            width={232}
                            height={233}
                            layout='fixed'
                        />
                    </div>
                    <div className='downsection px-4 pt-4 pb-8'>
                        <p className='font-semibold font-albra text-2xl leading-8 w-full'>
                            Estados Financieros
                        </p>
                        <br />
                        <p>
                            De forma anual nuestros estados contables son
                            auditados sin demora por un despacho externo
                            especializado (DFK International).{" "}
                        </p>
                        <br />
                        <Image
                            src='/images/nosotros/dfk.png'
                            alt='carouselimg'
                            className='w-full'
                            width={176}
                            height={55}
                            layout='fixed'
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default CarouselTransparencia;
