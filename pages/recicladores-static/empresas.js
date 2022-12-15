/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import MainLayout from "@/components/layouts/MainLayout";
import ImageSection from "@/components/sections/ImageSection";
import RecicladoresLayout from "@/components/sections/recicladores/RecicladoresLayout";
import Numero from "@/components/icons/Numero";
import Image from "next/image";
import RecicladoresBanner from "@/components/banners/RecicladoresBanner";
import Button from "@/components/common/Button";

const EmpresasPage = () => {
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
    <MainLayout title="Empresas recicladoras">
      <RecicladoresBanner className="bg-index-yellow" />
      <RecicladoresLayout>
        {/* //Children Content here... */}
        <div className="wrapper">
          <h1 className=" mb-20 font-basetica text-[42px] leading-10 lg:text-5xl  font-bold">
            Empresas recicladoras{" "}
          </h1>
          <Numero type="one" color="yellow" />
          <p className="font-semibold font-albra text-2xl mt-10  mb-10 leading-8 w-full ">
            Fundación Index Chihuahua®, en sinergia con empresas recicladoras,
            brinda el servicio de recolección, manejo y disposición de los
            materiales reciclables donados por empresas de la industria
            manufacturera.
          </p>
          <p className="my-10">
            Contamos con una cuadrilla de proveedores en los cuales nos apoyamos
            para recolectar cualquier tipo de residuo sólido de manejo especial
            susceptible a ser reciclado, entre los cuales se encuentran:
          </p>

          <div className="listcontainer w-full">
            <ul>
              <li className="border-b-2 py-4 border-index-border flex justify-start items-start">
                <MiniCircle />
                <p className="pl-4 font-normal text-lg leading-6 font-albra">
                  Papel
                </p>
              </li>
              <li className="border-b-2 py-4 border-index-border flex justify-start items-start">
                <MiniCircle />
                <p className="pl-4 font-normal text-lg leading-6 font-albra">
                  Cartón
                </p>
              </li>
              <li className="border-b-2 py-4 border-index-border flex justify-start items-start">
                <MiniCircle />
                <p className="pl-4  font-normal text-lg leading-6 font-albra">
                  Plástico
                </p>
              </li>
              <li className="border-b-2 py-4 border-index-border flex justify-start items-start">
                <MiniCircle />
                <p className="pl-4  font-normal text-lg leading-6 font-albra">
                  Chatarra
                </p>
              </li>
              <li className="border-b-2 py-4 border-index-border flex justify-start items-start">
                <MiniCircle />
                <p className="pl-4  font-normal text-lg leading-6 font-albra">
                  Materiales no ferrosos
                </p>
              </li>
              <li className=" py-4 flex justify-start items-start">
                <MiniCircle />
                <p className="pl-4  font-normal text-lg leading-6 font-albra">
                  Tarimas de madera
                </p>
              </li>
            </ul>
          </div>
        </div>
      </RecicladoresLayout>{" "}
      <div className="dummyspace py-8 bg-index-gray"></div>{" "}
      <div className="sectioncontainer w-full  flex  justify-center bg-white pb-16">
        <div className="wrapper max-w-7xl flex flex-col lg:flex-row justify-center w-full mt-20">
          <div className="leftsection block max-w-xs pl-7 mr-10 ">
            <div className="navbarcontainer pb-16 lg:pb-0">
              <p className="font-basetica font-bold text-5xl leading-10">
                Requisitos para prestar servicio como reciclador
              </p>
            </div>
          </div>
          <div
            id="requisitos"
            className="rightsection lg:mx-6 lg:ml-0 pl-7 border-l-2 border-index-border w-full lg:w-8/12"
          >
            <div className="wrapper flex flex-col lg:flex-row justify-start items-start">
              <div className="sectionone pr-4 lg:pr-0">
                <div className="item mb-16 mr-24 flex flex-col lg:flex-row justify-start items-start  lg:items-start font-albra text-lg max-w-xs w-full">
                  <div className="imagecontainer w-28 h-28 mr-8 mb-4 lg:mb-0">
                    <Image
                      src="/images/recicladores/requisitoone.png"
                      width={113}
                      height={113}
                      layout="fixed"
                      className=""
                    />
                  </div>
                  <p className="font-albra text-lg">
                    Ser una empresa legalmente constituida (Razón Física o
                    Moral)
                  </p>
                </div>
                <div className="item mb-16 mr-24 flex flex-col lg:flex-row  justify-start items-start lg:items-start font-albra text-lg max-w-xs w-full">
                  <div className="imagecontainer w-28 h-28 mr-8 mb-4 lg:mb-0">
                    <Image
                      src="/images/recicladores/requisitotwo.png"
                      width={113}
                      height={113}
                      layout="fixed"
                      className=""
                    />
                  </div>
                  <p className="font-albra text-lg">
                    Ser una empresa establecida y estar operando en la industria
                    del reciclado.
                  </p>
                </div>
                <div className="item mb-16 lg:mb-0 mr-24 flex flex-col lg:flex-row  justify-start items-start lg:items-start font-albra text-lg max-w-sm w-full">
                  <div className="imagecontainer w-28 h-28 mr-8 mb-4 lg:mb-0">
                    <Image
                      src="/images/recicladores/requisitothree.png"
                      width={113}
                      height={113}
                      layout="fixed"
                      className=""
                    />
                  </div>
                  <p className="font-albra text-lg">
                    Contar con las Regulaciones Ambientales competentes que
                    garanticen la correcta operación de la empresa recicladora y
                    el manejo de los residuos.
                  </p>
                </div>
              </div>
              <div className="sectiontwo pr-4 lg:pr-0">
                <div className="item mb-16 mr-24 flex flex-col lg:flex-row  justify-start items-start lg:items-start font-albra text-lg max-w-sm w-full">
                  <div className="imagecontainer w-28 h-28 mr-8 mb-4 lg:mb-0">
                    <Image
                      src="/images/recicladores/requisitofour.png"
                      width={113}
                      height={113}
                      layout="fixed"
                      className=""
                    />
                  </div>
                  <p className="font-albra text-lg">
                    Contar con infraestructura para recolectar, transportar,
                    almacenar y procesar los residuos sólidos de manejo
                    especial.
                  </p>
                </div>
                <div className="item mb-16 mr-24 flex flex-col lg:flex-row  justify-start items-start lg:items-start font-albra text-lg max-w-sm w-full">
                  <div className="imagecontainer w-28 h-28 mr-8 mb-4 lg:mb-0">
                    <Image
                      src="/images/recicladores/requisitofive.png"
                      width={113}
                      height={113}
                      layout="fixed"
                      className=""
                    />
                  </div>
                  <p className="font-albra text-lg">
                    Comprar los residuos que sean puestos a disposición por
                    Fundación Index Chihuahua®.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="f30"
        className="f30bar bg-index-yellow flex flex-col md:flex-row md:justify-center md:items-center md:px-10 lg:px-0 "
      >
        <p className="text-white py-10 font-basetica text-left md:text-center leading-9 text-[30px]  px-12 lg:px-0 lg:text-2xl md:py-16 w-full lg:w-6/12">
          ¿Sabes qué documentos necesitas para llevar a cabo el tramite?
        </p>
        <div className="buttonwrapper px-12 pb-10 md:py-0">
          <Button
            href="/recicladores/documentacion#belowbannersection"
            appearance="white"
            label="Descúbrelo"
            localUrl="/recicladores/documentacion#belowbannersection"
            className=" h-[60px]  w-44 text-[18px] font-albra font-bold md:w-auto md:px-[60px] md:py-[21px] "
          />
        </div>
      </div>
      <ImageSection image="/images/hands.jpg" type="recicladores" />
    </MainLayout>
  );
};

export default EmpresasPage;
