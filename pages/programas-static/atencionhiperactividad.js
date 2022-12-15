/* eslint-disable @next/next/no-img-element */
import MainLayout from "@/components/layouts/MainLayout";
import ImageSection from "@/components/sections/ImageSection";
import ProgramasLayout from "@/components/sections/programas/ProgramasLayout";
import Numero from "@/components/icons/Numero";
import ProgramasBanner from "@/components/banners/ProgramasBanner";

const AtencionHiperactividadPage = () => {
  return (
    <MainLayout title="Programa de atención e Hiperactividad">
      <ProgramasBanner className="bg-index-aqua" />
      <ProgramasLayout>
        {/* //Children Content here... */}
        <div className="wrapper">
          <h1 className=" mb-20 font-basetica text-[42px]  leading-10 lg:text-5xl  font-bold">
            Programa de atención e Hiperactividad
          </h1>
          <Numero type="seven" color="aqua" />
          <p className="font-semibold font-albra text-2xl mt-10  mb-10 leading-8 w-full ">
            En convenio con Atención e Hiperactividad A.C., la cual tiene como
            finalidad apoyar a niños con TDAH (Trastorno por Déficit de Atención
            e Hiperactividad) mediante terapias, se atienden a los hijos de los
            colaboradores de la industria de exportación con dicho padecimiento,
            así como a los padres de familia, para mejorar su calidad de vida
            familiar y desarrollo social y educativo.
          </p>

          <p className="font-albra font-normal text-xl pr-7 mt-5 mb-10 ">
            Gracias a nuestro programa de becas, en alianza con la asociación,
            podemos beneficiar a niños y niñas por un periodo de hasta 3 años.{" "}
          </p>

          <div className="downsection my-16 flex flex-col lg:flex-row lg:justify-center lg:items-start ">
            <img
              src={`/images/programas/atencionhiperactividad.jpg`}
              alt="saludbucal"
            />
          </div>
        </div>
      </ProgramasLayout>{" "}
      <div className="dummyspace py-8 bg-index-gray"></div>{" "}
      <ImageSection image="/images/friendspic.jpg" type="programas" />
    </MainLayout>
  );
};

export default AtencionHiperactividadPage;
