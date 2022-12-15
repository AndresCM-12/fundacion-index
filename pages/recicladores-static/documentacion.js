/* eslint-disable @next/next/no-img-element */
import MainLayout from "@/components/layouts/MainLayout";
import ImageSection from "@/components/sections/ImageSection";
import RecicladoresLayout from "@/components/sections/recicladores/RecicladoresLayout";
import Numero from "@/components/icons/Numero";
import RecicladoresBanner from "@/components/banners/RecicladoresBanner";

const DocumentacionPage = () => {
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
          <circle cx="9" cy="9" r="9" fill="#F3C44C" />
        </svg>
      </div>
    );
  };

  return (
    <MainLayout title="Documentación">
      <RecicladoresBanner className="bg-index-yellow" />
      <RecicladoresLayout>
        {/* //Children Content here... */}
        <div className="wrapper">
          <h1 className=" mb-20 font-basetica text-[42px] leading-10 lg:text-5xl  font-bold">
            Documentación{" "}
          </h1>
          <Numero type="two" color="yellow" />
          <p className="font-semibold font-albra text-2xl mt-10  mb-10 leading-8 w-full ">
            Con el objetivo de facilitar el proceso, a continuación te
            presentamos los documentos requeridos para poder llevar a cabo la
            recolección de materiales reciclables.
          </p>

          <div className="listcontainer">
            <h2 className="uppercase pl-8 lg:pl-9 mb-4 font-albra tracking-headline text-xs leading-3 text-black font-bold">
              A detalle
            </h2>
            <ul>
              <li className="border-b-2 py-4 border-index-border flex justify-start items-start">
                <MiniCircle />
                <p className="pl-4  font-normal text-lg leading-6 font-albra">
                  Autorización de Impacto Ambiental.
                </p>
              </li>
              <li className="border-b-2 py-4 border-index-border flex justify-start items-start">
                <MiniCircle />
                <p className="pl-4  font-normal text-lg leading-6 font-albra">
                  Autorización para el Manejo de Residuos Sólidos No Peligrosos
                  o Especiales.{" "}
                </p>
              </li>
              <li className="border-b-2 py-4 border-index-border flex justify-start items-start">
                <MiniCircle />
                <p className="pl-4  font-normal text-lg leading-6 font-albra">
                  Peligrosos o Especiales.{" "}
                </p>
              </li>
              <li className="border-b-2 py-4 border-index-border flex justify-start items-start">
                <MiniCircle />
                <p className="pl-4  font-normal text-lg leading-6 font-albra">
                  Licencia de Uso de Suelo.
                </p>
              </li>
              <li className="border-b-2 py-4 border-index-border flex justify-start items-start">
                <MiniCircle />
                <p className="pl-4  font-normal text-lg leading-6 font-albra">
                  Registro de Generador de Residuos Sólidos No Peligrosos o
                  Especiales.{" "}
                </p>
              </li>
              <li className="border-b-2 py-4 border-index-border flex justify-start items-start">
                <MiniCircle />
                <p className="pl-4  font-normal text-lg leading-6 font-albra">
                  Licencia de Funcionamiento.
                </p>
              </li>
              <li className="border-b-2 py-4 border-index-border flex justify-start items-start">
                <MiniCircle />
                <p className="pl-4  font-normal text-lg leading-6 font-albra">
                  Uso de Marca.
                </p>
              </li>
              <li className="border-b-2 py-4 border-index-border flex justify-start items-start">
                <MiniCircle />
                <p className="pl-4  font-normal text-lg leading-6 font-albra">
                  Plan de Emergencias autorizado por Protección Civil.{" "}
                </p>
              </li>
              <li className="border-b-2 py-4 border-index-border flex justify-start items-start">
                <MiniCircle />
                <p className="pl-4  font-normal text-lg leading-6 font-albra">
                  Registro de Descarga de Aguas Residuales.
                </p>
              </li>
              <li className="border-b-2 py-4 border-index-border flex justify-start items-start">
                <MiniCircle />
                <p className="pl-4  font-normal text-lg leading-6 font-albra">
                  Contar con un Plan de Manejo Aprobado.
                </p>
              </li>
              <li className=" py-4  flex justify-start items-start">
                <MiniCircle />
                <p className="pl-4  font-normal text-lg leading-6 font-albra">
                  Certificado de Calibración de básculas.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </RecicladoresLayout>{" "}
      <div className="dummyspace py-8 bg-index-gray"></div>{" "}
      <div
        id="f30"
        className="f30bar bg-index-yellow flex justify-center items-center"
      >
        <p className="text-white font-basetica text-center  text-lg px-12 lg:px-0 lg:text-3xl py-10 w-full lg:w-6/12">
          Para obtener la Solicitud de Datos Generales (F-30) envía un correo a
          <a
            className="underline"
            href="mailto:logistica@indexchihuahua.org.mx"
          >
            {" "}
            logistica@indexchihuahua.org.mx
          </a>{" "}
        </p>
      </div>
      <ImageSection image="/images/hands.jpg" type="recicladores" />
    </MainLayout>
  );
};

export default DocumentacionPage;
