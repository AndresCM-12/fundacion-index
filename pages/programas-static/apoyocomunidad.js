/* eslint-disable @next/next/no-img-element */
import MainLayout from "@/components/layouts/MainLayout";
import ImageSection from "@/components/sections/ImageSection";
import ProgramasLayout from "@/components/sections/programas/ProgramasLayout";
import Numero from "@/components/icons/Numero";
import ProgramasBanner from "@/components/banners/ProgramasBanner";

const ApoyoComunidadPage = () => {
  return (
    <MainLayout title="Apoyo a la comunidad">
      <ProgramasBanner className="bg-index-aqua" />
      <ProgramasLayout>
        {/* //Children Content here... */}
        <div className="wrapper">
          <h1 className=" mb-20 font-basetica text-[42px] leading-10 lg:text-5xl font-bold">
            Apoyo a la comunidad
          </h1>
          <Numero type="nine" color="aqua" />
          <p className="font-semibold font-albra text-2xl mt-10  mb-10 leading-8 w-full ">
            Fundación Index Chihuahua® está comprometida a mejorar la calidad de
            vida de los colaboradores de la industria de exportación así como la
            de la comunidad en general.
          </p>

          <p className="font-albra font-normal text-xl pr-7 mt-5 mb-10 ">
            Por esto se lanzan convocatorias de apoyo donde se invita a
            organizaciones de la sociedad civil que requieran desarrollar sus
            proyectos de bienestar social a presentar sus solicitudes de apoyo
            económico destinados a atender las áreas de educación, vivienda,
            salud, medio ambiente entre otros.
          </p>
          <p className="font-albra font-normal text-xl pr-7 mt-5 mb-10 ">
            {" "}
            Si estás interesado/a en solicitar financiamiento visita nuestro
            apartado “Donativos”.
          </p>
          <div className="downsection my-16 flex flex-col lg:flex-row lg:justify-center lg:items-start ">
            <img
              src={`/images/programas/apoyocomunidad.jpg`}
              alt="apoyocomunidad"
            />
          </div>
        </div>
      </ProgramasLayout>{" "}
      <div className="dummyspace py-8 bg-index-gray"></div>{" "}
      <ImageSection image="/images/friendspic.jpg" type="programas" />
    </MainLayout>
  );
};

export default ApoyoComunidadPage;
