/* eslint-disable @next/next/no-img-element */
import MainLayout from "@/components/layouts/MainLayout";
import ImageSection from "@/components/sections/ImageSection";
import Numero from "@/components/icons/Numero";
import ProgramasLayout from "@/components/sections/programas/ProgramasLayout";
import ProgramasBanner from "@/components/banners/ProgramasBanner";
import Casa from "@/components/common/svgs/Casa";

const AmpliacionViviendasPage = () => {
  return (
    <MainLayout title="Ampliación de Vivienda">
      <ProgramasBanner className="bg-index-aqua" />
      <ProgramasLayout>
        {/* //Children Content here... */}
        <div className="wrapper">
          <h1 className=" mb-20  font-basetica text-[42px]  leading-10 lg:text-5xl font-bold">
            Ampliación de vivienda{" "}
          </h1>
          <Numero type="three" color="aqua" className=" mb-10" />
          <p className="font-semibold font-albra text-2xl leading-8 w-10/12 ">
            Con el objetivo de disminuir el hacinamiento familiar en la vivienda
            y mejorar la calidad de vida de las familias de la industria
            de exportación se desarrolló el Programa de Ampliación de Vivienda.
          </p>
          <p className="font-albra font-normal my-16 text-xl leading-7">
            Consiste en realizar una construcción de una habitación de 3.5 x 3.5
            mts{" "}
            <span className="text-white bg-index-aqua py-2 px-2 rounded-full">
              (12.25m2)
            </span>{" "}
            lista para habitar.
          </p>

          <div className="downsection flex flex-col lg:flex-row lg:items-center lg:justify-around">
            <div className="containerone w-full lg:w-5/12">
              {" "}
              <p className="font-semibold font-albra text-2xl leading-8 w-10/12 ">
                Fundación Index Chihuahua® dona el 85% del valor y el
                colaborador contribuye con el 15% compuesto por un anticipo y el
                resto a 12 meses sin intereses.
              </p>
            </div>
            <div className="containertwo">
              <div className="imagecontainer hidden lg:flex my-2">
                <Casa className={`w-full`} />
              </div>
              <div className="imagecontainer lg:hidden my-2">
                <Casa className={`w-full`} height="500" />
              </div>
            </div>
          </div>
        </div>
      </ProgramasLayout>
      <div className="dummyspace py-8 bg-index-gray"></div>{" "}
      <ImageSection image="/images/friendspic.jpg" type="programas" />
    </MainLayout>
  );
};

export default AmpliacionViviendasPage;
