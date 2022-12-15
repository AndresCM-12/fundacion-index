/* eslint-disable @next/next/no-img-element */
import MainLayout from "@/components/layouts/MainLayout";
import ImageSection from "@/components/sections/ImageSection";
import ProgramasLayout from "@/components/sections/programas/ProgramasLayout";
import Numero from "@/components/icons/Numero";
import ProgramasBanner from "@/components/banners/ProgramasBanner";

const SaludBucalPage = () => {
  return (
    <MainLayout title="Salud bucal">
      <ProgramasBanner className="bg-index-aqua" />
      <ProgramasLayout>
        {/* //Children Content here... */}
        <div className="wrapper">
          <h1 className=" mb-20 font-basetica text-[42px] leading-10 lg:text-5xl  font-bold">
            Salud bucal
          </h1>
          <Numero type="six" color="aqua" />
          <p className="font-semibold font-albra text-2xl mt-10  mb-10 leading-8 w-full ">
            En alianza con Magnanimitas, A.C., se desarrolla el Programa de
            Salud Bucal, el cual tiene el objetivo de prevenir, corregir y
            abatir el índice de caries y enfermedad periodontal en forma
            importante y contribuir a establecer una cultura de salud
            preventiva, cotidiana y permanente entre los colaboradores de la
            industria de exportación.
          </p>

          <p className="font-albra font-normal text-xl pr-7 mt-5 mb-10 ">
            Esto mediante campañas, talleres informativos y citas de atención
            bucal de primer nivel en las instalaciones de Magnanimitas.
          </p>
          <p className="font-albra font-normal text-xl pr-7 mt-5 mb-10 ">
            Fundación Index Chihuahua® y Magnanimitas A.C. otorgan el
            financiamiento y el talento humano para brindarles los tratamientos
            necesarios a nuestros beneficiarios, los cuales son niños y niñas de
            preescolar y primaria.
          </p>
          <div className="downsection my-16 flex flex-col lg:flex-row lg:justify-center lg:items-start ">
            <img src={`/images/programas/saludbucal.png`} alt="saludbucal" />
          </div>
        </div>
      </ProgramasLayout>{" "}
      <div className="dummyspace py-8 bg-index-gray"></div>{" "}
      <ImageSection image="/images/friendspic.jpg" type="programas" />
    </MainLayout>
  );
};

export default SaludBucalPage;
