import MainLayout from "@/components/layouts/MainLayout";
import ImageSection from "@/components/sections/ImageSection";
import NosotrosLayout from "@/components/sections/nosotros/NosotrosLayout";
import Numero from "@/components/icons/Numero";
import EyeIcon from "@/components/icons/EyeIcon";
import DianaIcon from "@/components/icons/DianaIcon";
import NosotrosBanner from "@/components/banners/NosotrosBanner";

const AcercaDePage = () => {
  return (
    <MainLayout title="Acerca de Nosotros">
      <NosotrosBanner className="bg-index-aqua" />
      <NosotrosLayout>
        {/* //Children Content here... */}
        <div className="wrapper">
          <h1 className=" mb-20  font-basetica text-[42px] leading-[48px]  lg:text-5xl lg:leading-[90px] font-bold">
            Fundación Index®
          </h1>
          <Numero type="one" color="aqua" className=" mb-10" />
          <p className="font-semibold font-albra text-2xl leading-8 w-10/12 ">
            Es una organización chihuahuense sin fines de lucro, apartidista y
            sin ninguna afiliación política ni religiosa, constituida legalmente
            como asociación civil.
          </p>
          <p className="font-albra font-normal my-16 text-xl leading-7">
            Dedicada a apoyar a colaboradores de la industria manufacturera de
            nivel operativo y a otras personas en situación de vulnerabilidad en
            las ciudades de Chihuahua, Cuauhtémoc, Delicias, Camargo y Jiménez a
            través del financiamiento y operación de programas sociales, gracias
            a los recursos obtenidos del reciclaje de residuos sólidos no
            peligrosos donados por nuestras comprometidas empresas, en las áreas
            de educación, salud, vivienda, medio ambiente y desarrollo
            comunitario.
          </p>
          <div className="downsection flex flex-col lg:flex-row lg:justify-center lg:items-start ">
            <div className="leftsection w-full lg:w-1/2">
              <DianaIcon />
              <h2 className="font-albra font-semibold text-2xl my-5">
                Nuestra misión
              </h2>
              <p className="font-albra font-normal text-xl pr-7 ">
                Contribuir en el bienestar de las familias de la industria
                manufacturera y la sociedad chihuahuense a través de la
                participación responsable de las instituciones, empresas y sus
                empleados siendo una organización confiable, honesta y
                transparente.
              </p>
            </div>
            <div className="rightsection mt-7 lg:mt-0 lg:pl-7 lg:border-l-2  lg:border-index-border w-full lg:w-1/2">
              <EyeIcon />

              <h2 className="font-albra font-semibold text-2xl my-5">
                Nuestra visión
              </h2>
              <p className="font-albra font-normal text-xl pr-7 ">
                Ser la organización que represente la industria de exportación
                en cuanto a responsabilidad social, reconocida
                por las empresas, los colaboradores, los corporativos y la comunidad
                en general por el desarrollo de proyectos concretos, efectivos y
                de alto impacto social.
              </p>
            </div>
          </div>
        </div>
      </NosotrosLayout>
      <div className="dummyspace py-8 bg-index-gray"></div>
      <ImageSection image="/images/friendspic.jpg" type="programas" />
    </MainLayout>
  );
};

export default AcercaDePage;
