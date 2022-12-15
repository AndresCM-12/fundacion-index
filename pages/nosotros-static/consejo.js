/* eslint-disable @next/next/no-img-element */
import MainLayout from "@/components/layouts/MainLayout";
import ImageSection from "@/components/sections/ImageSection";
import NosotrosLayout from "@/components/sections/nosotros/NosotrosLayout";
import Numero from "@/components/icons/Numero";
import Organigrama from "@/components/sections/nosotros/Organigrama";
import NosotrosBanner from "@/components/banners/NosotrosBanner";

const ConsejoPage = () => {
  return (
    <MainLayout title="Consejo Directivo">
      <NosotrosBanner className="bg-index-aqua" />

      <NosotrosLayout>
        <div className="wrapper">
          <h1 className=" mb-20 font-basetica text-[42px] leading-[48px] lg:text-5xl lg:leading-[90px] font-bold">
            Consejo directivo
          </h1>
          <Numero type="three" color="aqua" className=" mb-10" />
          <p className="font-semibold font-albra text-2xl mb-10 leading-8 w-full ">
            Nuestros líderes son empresarios y directivos de la industria
            de exportación, lo cual asegura un vínculo permanente con el sector y
            una comprensión de las necesidades de los colaboradores.{" "}
          </p>

          <p className="font-albra font-normal text-xl pr-7 mt-5 mb-10 ">
            Así mismo nuestra estructura está fortalecida por miembros que son
            parte fundamental de organizaciones de la sociedad civil
            chihuahuense.{" "}
          </p>
          <div className="downsection flex  flex-col lg:flex-row lg:justify-center lg:items-start ">
            <img src={`/images/nosotros/consejo.jpg`} alt="Consejo Directivo" />
          </div>
        </div>
      </NosotrosLayout>
      <div className="dummyspace py-8 bg-index-gray"></div>
      <Organigrama />
      <ImageSection image="/images/friendspic.jpg" type="programas" />
    </MainLayout>
  );
};

export default ConsejoPage;
