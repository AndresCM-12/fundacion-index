/* eslint-disable @next/next/no-img-element */
import MainLayout from "@/components/layouts/MainLayout";
import ImageSection from "@/components/sections/ImageSection";
import ProgramasLayout from "@/components/sections/programas/ProgramasLayout";
import Numero from "@/components/icons/Numero";
import ProgramasBanner from "@/components/banners/ProgramasBanner";
import ChihuahuaMap from "@/components/common/svgs/ChihuahuaMap";
const BecasPage = () => {
  return (
    <MainLayout title="Becas técnicas">
      <ProgramasBanner className="bg-index-aqua" />

      <ProgramasLayout>
        {/* //Children Content here... */}
        <div className="wrapper">
          <h1 className=" mb-20  font-basetica text-[42px] leading-10   lg:text-5xl  font-bold">
            Becas técnicas
          </h1>
          <Numero type="two" color="aqua" className=" mb-10" />
          <p className="font-semibold font-albra text-2xl leading-8 w-10/12 ">
            En alianza con Fundación Chihuahua A.C., otorgamos 220 becas de
            sostenimiento de $1,000.00 pesos mensuales como apoyo a los hijos de
            los colaboradores de la industria de exportación de Chihuahua y
            ciudad Camargo.{" "}
          </p>
          <p className="font-albra font-normal my-16 text-xl leading-7">
            Estas becas van dirigidas a jóvenes interesados en estudiar una
            carrera técnica dentro de las siguientes escuelas: CBTIS 122, CBTIS
            158, CECYT 6, CONALEP I, CONALEP II, UTCH y UTCAM con la oportunidad
            de integrarse a las empresas de la industria manufacturera al
            egresar.{" "}
          </p>
          {/* //DESKTOP MAP */}
          {/* {CHIHUAHUA STATE} */}
          <div className="imagecontainer mb-8 ">
            <ChihuahuaMap className="hidden lg:flex lg:w-full" />
          </div>
          {/* //MOBILE MAP */}
          <div className="imagecontainer mb-8 ">
            <ChihuahuaMap className="w-full lg:hidden" height="380" />
          </div>
        </div>
      </ProgramasLayout>
      <div className="dummyspace py-8 bg-index-gray"></div>

      <ImageSection image="/images/friendspic.jpg" type="programas" />
    </MainLayout>
  );
};

export default BecasPage;
