/* eslint-disable @next/next/no-img-element */
import MainLayout from "@/components/layouts/MainLayout";
import ImageSection from "@/components/sections/ImageSection";
import ProgramasLayout from "@/components/sections/programas/ProgramasLayout";
import Numero from "@/components/icons/Numero";
import ProgramasBanner from "@/components/banners/ProgramasBanner";
const AudicionPage = () => {
  return (
    <MainLayout title="Programa de audición y lenguaje">
      <ProgramasBanner className="bg-index-aqua" />
      <ProgramasLayout>
        {/* //Children Content here... */}
        <div className="wrapper">
          <h1 className=" mb-20 font-basetica text-[42px] leading-10 lg:text-5xl  font-bold">
            Programa de audición y lenguaje
          </h1>
          <Numero type="four" color="aqua" />
          <p className="font-semibold font-albra text-2xl mt-10  mb-10 leading-8 w-full ">
            En convenio con el Instituto José David A.C., quien se dedica a la
            educación de niños con problemas auditivos y de lenguaje, se
            realizan campañas de detección para los hijos de colaboradores de la
            industria de exportación, en las cuales se pueden detectar casos y
            atenderlos mediante terapias.{" "}
          </p>

          <p className="font-albra font-normal text-xl pr-7 mt-5 mb-10 ">
            Fundación Index Chihuahua® e Instituto José David A.C. otorgan el
            financiamiento y el talento humano para poder brindarles a los hijos
            de los colaboradores terapias de calidad para poder tratar sus
            padecimientos durante un periodo de hasta 3 años.
          </p>
          <div className="downsection my-16 flex flex-col lg:flex-row lg:justify-center lg:items-start ">
            <img
              src={`/images/programas/audicion.jpg`}
              alt="Consejo Directivo"
            />
          </div>
          <p className="font-albra font-normal text-xl pr-7 mt-5 mb-10 ">
            Actualmente se brindan terapias en las instalaciones del instituto
            así como dentro del Jardín de Niños Index®.
          </p>
        </div>
      </ProgramasLayout>
      <div className="dummyspace py-8 bg-index-gray"></div>{" "}
      <ImageSection image="/images/friendspic.jpg" type="programas" />
    </MainLayout>
  );
};

export default AudicionPage;
