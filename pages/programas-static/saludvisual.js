/* eslint-disable @next/next/no-img-element */
import MainLayout from "@/components/layouts/MainLayout";
import ImageSection from "@/components/sections/ImageSection";
import ProgramasLayout from "@/components/sections/programas/ProgramasLayout";
import Numero from "@/components/icons/Numero";
import ProgramasBanner from "@/components/banners/ProgramasBanner";

const SaludVisualPage = () => {
  return (
    <MainLayout title="Salud visual">
      <ProgramasBanner className="bg-index-aqua" />
      <ProgramasLayout>
        {/* //Children Content here... */}
        <div className="wrapper">
          <h1 className=" mb-20 font-basetica text-[42px] leading-10 lg:text-5xl font-bold">
            Salud visual
          </h1>
          <Numero type="five" color="aqua" />
          <p className="font-semibold font-albra text-2xl mt-10  mb-10 leading-8 w-full ">
            Preocupados por la salud visual de nuestros niños, Fundación Index
            Chihuahua® desarrolla este programa, en alianza con organizaciones
            dedicadas a la salud visual. Se realizan campañas de revisión de la
            vista, para los hijos de los colaboradores de la industria
            de exportación que se encuentren estudiando nivel primaria o
            secundaria en las ciudades de Chihuahua, Delicias, Camargo, Jiménez
            y Cuauhtémoc.
          </p>

          <p className="font-albra font-normal text-xl pr-7 mt-5 mb-10 ">
            Una vez hecha la revisión, brindamos lentes de prescripción médica a
            quien así lo requiera. Fundación Index Chihuahua® cubre el gasto
            total para otorgárselos y mejorar su vida a través de la vista.
          </p>
          <div className="downsection my-16 flex flex-col lg:flex-row lg:justify-center lg:items-start ">
            <img src={`/images/programas/saludvisual.jpg`} alt="saludvisual" />
          </div>
        </div>
      </ProgramasLayout>{" "}
      <div className="dummyspace py-8 bg-index-gray"></div>{" "}
      <ImageSection image="/images/friendspic.jpg" type="programas" />
    </MainLayout>
  );
};

export default SaludVisualPage;
