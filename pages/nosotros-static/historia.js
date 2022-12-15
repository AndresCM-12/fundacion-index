/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import MainLayout from "@/components/layouts/MainLayout";
import ImageSection from "@/components/sections/ImageSection";
import NosotrosLayout from "@/components/sections/nosotros/NosotrosLayout";
import Numero from "@/components/icons/Numero";
import Image from "next/image";
import NosotrosBanner from "@/components/banners/NosotrosBanner";

const HistoriaPage = () => {
  return (
    <MainLayout title="Historia">
      <NosotrosBanner className="bg-index-aqua" />

      <NosotrosLayout>
        {/* //Children Content here... */}
        <div className="wrapper">
          <h1 className=" mb-20  font-basetica text-[42px] leading-[48px]  lg:text-5xl lg:leading-[90px] font-bold">
            Nuestra historia
          </h1>
          <Numero type="two" color="aqua" className=" mb-10" />
          <p className="font-semibold font-albra text-2xl mb-10 leading-8 w-full ">
            A mitad de los años 90’s el Comité de Ingeniería Ambiental de la
            Asociación de Maquiladoras y Exportadoras de Chihuahua, A.C. (Index
            Chihuahua®) preocupado por el destino de los materiales reciclables
            no peligrosos que generaba la industria de exportación en la ciudad
            de Chihuahua, decide crear un organismo el cual se encargaría del
            correcto reciclado de dichos materiales.
          </p>

          <div className="downsection flex  flex-col lg:flex-row lg:justify-center lg:items-start ">
            <div className="leftsection w-full lg:w-1/2">
              <p className="font-albra font-normal text-xl pr-7 ">
                Al mismo tiempo, el Comité de Responsabilidad Social (conformado
                por expertos en Recursos Humanos y Responsabilidad Social de las
                empresas) buscaba alternativas para apoyar económicamente a
                instituciones sin fines de lucro y beneficiar a la comunidad
                chihuahuense.
              </p>
              <p className="font-albra font-normal text-xl pr-7 mt-5 ">
                Estas dos grandes oportunidades y visión compartida, fueron el
                detonante para crear un nuevo organismo de apoyo a causas
                sociales y la generación de bienestar social entre los empleados
                de la industria y la comunidad en general.
              </p>
            </div>
            <div className="rightsection mt-7 lg:mt-0 lg:pl-7 lg:border-l-2  lg:border-index-border w-full lg:w-1/2">
              <h2 className="font-albra font-semibold text-2xl mb-5">
                En 1997
              </h2>
              <p className="font-albra font-normal text-xl pr-7 ">
                Se aprueba la creación de un fideicomiso y el 12 de junio del
                2002 se constituye legalmente con la finalidad de mejorar la
                calidad de vida y desarrollo humano de los colaboradores de la
                industria de exportación y de la población en situación de
                vulnerabilidad en varias comunidades del estado de Chihuahua.
              </p>
            </div>
          </div>
        </div>
      </NosotrosLayout>
      <div className="lg:flex w-full justify-center items-center bg-index-gray py-16 scrollbar-hide lg:scrollbar-default snap-x  overflow-x-auto">
        <div className="w-full lg:max-w-7xl snap-center">
          <img
            src="/images/nosotros/historiatimeline.svg"
            className="hidden lg:block w-full"
          />
          {/* mobile svg image */}
          <div className="imagecontainer lg:hidden ">
            <Image
              src="/images/nosotros/historiatimeline.svg"
              width={1424}
              height={374}
              layout="fixed"
              className="w-full "
            />
          </div>
        </div>
      </div>

      <ImageSection image="/images/friendspic.jpg" type="programas" />
    </MainLayout>
  );
};

export default HistoriaPage;
