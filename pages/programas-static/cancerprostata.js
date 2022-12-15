/* eslint-disable @next/next/no-img-element */
import MainLayout from "@/components/layouts/MainLayout";
import ImageSection from "@/components/sections/ImageSection";
import ProgramasLayout from "@/components/sections/programas/ProgramasLayout";
import Numero from "@/components/icons/Numero";
import ProgramasBanner from "@/components/banners/ProgramasBanner";

const CancerProstataPage = () => {
  return (
    <MainLayout title="Detección oportuna de Cáncer de próstata">
      <ProgramasBanner className="bg-index-aqua" />
      <ProgramasLayout>
        {/* //Children Content here... */}
        <div className="wrapper">
          <h1 className=" mb-20 font-basetica text-[42px] leading-10 lg:text-5xl font-bold">
            Detección oportuna de Cáncer de próstata
          </h1>
          <Numero type="eight" color="aqua" />
          <p className="font-semibold font-albra text-2xl mt-10  mb-10 leading-8 w-full ">
            En alianza con Fundación CIMA A.C., se aplica gratuitamente, año con
            año, la prueba del antígeno prostático a los colaboradores mayores
            de 40 años, para realizar una detección oportuna del cáncer de
            próstata.
          </p>

          <p className="font-albra font-normal text-xl pr-7 mt-5 mb-10 ">
            Así mismo se brinda la capacitación necesaria a las empresas que así
            lo soliciten para aplicar dicha prueba y se realiza el seguimiento a
            los casos que así lo requieran.
          </p>
          <p className="font-albra font-normal text-xl pr-7 mt-5 mb-10 ">
            {" "}
            Una detección oportuna puede salvar vidas.{" "}
          </p>
          <div className="downsection my-16 flex flex-col lg:flex-row lg:justify-center lg:items-start ">
            <img src={`/images/programas/cancer.png`} alt="cancer" />
          </div>
        </div>
      </ProgramasLayout>{" "}
      <div className="dummyspace py-8 bg-index-gray"></div>{" "}
      <ImageSection image="/images/friendspic.jpg" type="programas" />
    </MainLayout>
  );
};

export default CancerProstataPage;
