/* eslint-disable @next/next/no-img-element */
import MainLayout from "@/components/layouts/MainLayout";
import ImageSection from "@/components/sections/ImageSection";
import DonativosLayout from "@/components/sections/donativos/DonativosLayout";
import Numero from "@/components/icons/Numero";
import DonativosBanner from "@/components/banners/DonativosBanner";

const SaludBucalPage = () => {
  const MiniCircle = ({ className }) => {
    return (
      <div className={`wrapper w-5 h-5 ${className}`}>
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="9" cy="9" r="9" fill="#BF89FF" />
        </svg>
      </div>
    );
  };

  return (
    <MainLayout title="Requisitos">
      <DonativosBanner className="bg-index-purple" />
      <DonativosLayout>
        {/* //Children Content here... */}
        <div className="wrapper">
          <h1 className=" mb-20 font-basetica text-[42px] leading-10 lg:text-5xl  font-bold">
            Requisitos para solicitar donativos a Fundación Index Chihuahua®{" "}
          </h1>
          <Numero type="one" color="purple" />
          <p className="font-semibold font-albra text-2xl mt-10  mb-10 leading-8 w-full ">
            Conoce las requerimientos mínimos necesarios para que tu solicitud
            pueda ser contemplada.
          </p>

          <div className="listcontainer">
            <h2 className="uppercase pl-8 lg:pl-9 mb-4 font-albra  tracking-headline text-xs leading-3  text-black font-bold xl:mb-10 xl:mt-24">
              A detalle
            </h2>
            <ul>
              <li className="border-b-2 py-4 border-index-border flex justify-start items-start">
                <MiniCircle />
                <p className="pl-4  font-normal text-lg leading-6 font-albra">
                  Ser una asociación civil constituida legalmente mayor a 1 año.
                </p>
              </li>
              <li className="border-b-2 py-4 border-index-border flex justify-start items-start">
                <MiniCircle />
                <p className="pl-4  font-normal text-lg leading-6 font-albra">
                  Contar con un Consejo Directivo activo.
                </p>
              </li>
              <li className="border-b-2 py-4 border-index-border flex justify-start items-start">
                <MiniCircle />
                <p className="pl-4  font-normal text-lg leading-6 font-albra">
                  Ser donataria autorizada.
                </p>
              </li>
              <li className="border-b-2 py-4 border-index-border flex justify-start items-start">
                <MiniCircle />
                <p className="pl-4  font-normal text-lg leading-6 font-albra">
                  Ser una OSC analizada por Confío A.C. (Deseable).
                </p>
              </li>
              <li className="border-b-2 py-4 border-index-border flex justify-start items-start">
                <MiniCircle />
                <p className="pl-4  font-normal text-lg leading-6 font-albra">
                  En caso de haber sido apoyados anteriormente por Fundación
                  Index Chihuahua® no deberán tener incumplimientos con el apoyo
                  otorgado según el convenio.{" "}
                </p>
              </li>
              <li className="border-b-2 py-4 border-index-border flex justify-start items-start">
                <MiniCircle />
                <p className="pl-4  font-normal text-lg leading-6 font-albra">
                  Las solicitudes superiores a{" "}
                  <span className="text-white text-sm font-bold p-1.5 rounded-full bg-index-purple">
                    $350,000
                  </span>{" "}
                  pesos serán analizadas como casos especiales de apoyo para su
                  aprobación.
                </p>
              </li>
              <li className=" py-4  flex justify-start items-start">
                <MiniCircle />
                <p className="pl-4  font-normal text-lg leading-6 font-albra">
                  Solo se apoyarán proyectos de coinversión en las ciudades de
                  Chihuahua, Camargo, Delicias, Jiménez y Cuauhtémoc; y en el
                  resto del país únicamente en casos de desastre natural o
                  contingencia, en coordinación con otros organismos.{" "}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </DonativosLayout>{" "}
      <div className="dummyspace py-8 bg-index-gray"></div>{" "}
      <ImageSection image="/images/kid.jpg" type="donativos" />
    </MainLayout>
  );
};

export default SaludBucalPage;
