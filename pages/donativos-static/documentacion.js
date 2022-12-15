/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import MainLayout from "@/components/layouts/MainLayout";
import ImageSection from "@/components/sections/ImageSection";
import DonativosLayout from "@/components/sections/donativos/DonativosLayout";
import Numero from "@/components/icons/Numero";
import Image from "next/image";
import DonativosBanner from "@/components/banners/DonativosBanner";
import Button from "@/components/common/Button";

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
          <circle cx="9" cy="9" r="9" fill="#BF89FF" />
        </svg>
      </div>
    );
  };

  return (
    <MainLayout title="Documentación">
      <DonativosBanner className="bg-index-purple" />
      <DonativosLayout>
        {/* //Children Content here... */}
        <div className="wrapper">
          <h1 className=" mb-20 font-basetica text-[42px] leading-10 lg:text-5xl  font-bold">
            Documentación{" "}
          </h1>
          <Numero type="three" color="purple" />
          <p className="mt-8">
            Entregables en las oficinas de Index Chihuahua® en físico:
          </p>

          <div className="listcontainer">
            <ul className="">
              <li className="border-b-2 py-8 border-index-border flex flex-col lg:flex-row justify-between items-start lg:items-center   w-full">
                <div className="textcontainer w-full lg:w-8/12 font-albra">
                  <h2 className="title font-semibold text-2xl mb-4 ">
                    Proyectos iguales o menores a $25k
                  </h2>
                  <p className="">
                    Presentar carta solicitud mencionando la cantidad solicitada
                    (igual o menor a $25,000 pesos) y para que se destinará el
                    recurso.
                  </p>
                </div>
                <div className="imagecontainer w-28 h-28 mt-4 lg:mt-0">
                  <Image
                    src="/images/donativos/donativosone.png"
                    width={113}
                    height={113}
                    layout="fixed"
                    className=""
                  />
                </div>
              </li>
              <li className="border-b-2 py-8 border-index-border flex flex-col lg:flex-row justify-between items-start lg:items-center  w-full">
                <div className="textcontainer w-full lg:w-8/12 font-albra">
                  <h2 className="title font-semibold text-2xl mb-4 ">
                    Proyectos mayores a $25k{" "}
                  </h2>
                  <p className="">
                    Formato F44 (Llenado en computadora y firmado a mano por el
                    representante legal).
                    <br />
                    {/* <a className="underline font-bold" href="#">
                      Descárgalo aquí
                    </a> */}
                  </p>
                </div>
                <div className="imagecontainer w-28 h-28 mt-4 lg:mt-0">
                  <Image
                    src="/images/donativos/donativostwo.png"
                    width={113}
                    height={113}
                    layout="fixed"
                    className=""
                  />
                </div>
              </li>
              <li className="border-b-2 py-8 border-index-border flex flex-col lg:flex-row justify-between items-start lg:items-center w-full">
                <div className="textcontainer w-full lg:w-8/12 font-albra">
                  <h2 className="title font-semibold text-2xl mb-4 ">
                    Carta de solicitud{" "}
                  </h2>
                  <p className="">
                    En este documento se deberá mencionar la cantidad solicitada
                    y como se planea utilizar el recurso.
                    <br />
                    {/* <a className="underline font-bold" href="#">
                      Descárgalo aquí
                    </a> */}
                  </p>
                </div>
                <div className="imagecontainer w-28 h-28 mt-4 lg:mt-0">
                  <Image
                    src="/images/donativos/donativosthree.png"
                    width={113}
                    height={113}
                    layout="fixed"
                    className=""
                  />
                </div>
              </li>
              <li className=" pt-8  flex flex-col lg:flex-row justify-between items-start lg:items-center  w-full">
                <div className="textcontainer w-full lg:w-8/12 font-albra">
                  <h2 className="title font-semibold text-2xl mb-4 ">
                    Adquisición de equipo{" "}
                  </h2>
                  <p className="">
                    En el caso de adquirir equipo, servicios, material e
                    infraestructura se deberán adjuntar tres cotizaciones
                    originales y firmadas.
                  </p>
                </div>
                <div className="imagecontainer w-28 h-28 mt-4 lg:mt-0">
                  <Image
                    src="/images/donativos/donativosfour.png"
                    width={113}
                    height={113}
                    layout="fixed"
                    className=""
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </DonativosLayout>{" "}
      <div className="dummyspace py-8 bg-index-gray"></div>
      <div className="sectioncontainer w-full flex  justify-center bg-white pb-16">
        <div className="wrapper max-w-7xl flex flex-col lg:flex-row justify-center w-full mt-20">
          <div className="leftsection block max-w-xs pl-7 mr-10 ">
            <div className="navbarcontainer pb-16 lg:pb-0">
              <p className="font-basetica font-bold text-5xl leading-10">
                En una memoría USB
              </p>
            </div>
          </div>
          <div className="rightsection mx-6 lg:ml-0 pl-7  w-full lg:w-8/12">
            <div className="listcontainer">
              <h2 className="uppercase pl-8 lg:pl-9 mb-4 font-albra  tracking-headline text-xs leading-3  text-black font-bold xl:mb-10 ">
                A detalle
              </h2>
              <ul className="font-albra">
                <li className="border-b-2 py-4 border-index-border flex justify-start items-start">
                  <MiniCircle />
                  <p className="pl-4  font-normal text-lg leading-6 font-albra">
                    Acta constitutiva de la asociación.
                  </p>
                </li>
                <li className="border-b-2 py-4 border-index-border flex justify-start items-start">
                  <MiniCircle />
                  <p className="pl-4  font-normal text-lg leading-6 font-albra">
                    Acta de asamblea más reciente.
                  </p>
                </li>
                <li className="border-b-2 py-4 border-index-border flex justify-start items-start">
                  <MiniCircle />
                  <p className="pl-4  font-normal text-lg leading-6 font-albra">
                    Poder del representante legal.
                  </p>
                </li>
                <li className="border-b-2 py-4 border-index-border flex justify-start items-start">
                  <MiniCircle />
                  <p className="pl-4  font-normal text-lg leading-6 font-albra">
                    Copia de identificación oficial del representante legal.{" "}
                  </p>
                </li>
                <li className="border-b-2 py-4 border-index-border flex justify-start items-start">
                  <MiniCircle />
                  <p className="pl-4  font-normal text-lg leading-6 font-albra">
                    <span className="text-white text-sm font-bold p-1.5 rounded-full bg-index-purple">
                      RFC
                    </span>{" "}
                    de la asociación (cédula fiscal).
                  </p>
                </li>
                <li className="border-b-2 py-4 border-index-border flex justify-start items-start">
                  <MiniCircle />
                  <p className="pl-4  font-normal text-lg leading-6 font-albra">
                    Comprobante de deducibilidad ante la{" "}
                    <span className="text-white text-sm font-bold p-1.5 rounded-full bg-index-purple">
                      SHCP
                    </span>{" "}
                  </p>
                </li>
                <li className="border-b-2 py-4 border-index-border flex justify-start items-start">
                  <MiniCircle />
                  <p className="pl-4  font-normal text-lg leading-6 font-albra">
                    Estados financieros del año anterior.
                  </p>
                </li>
                <li className="border-b-2 py-4 border-index-border flex justify-start items-start">
                  <MiniCircle />
                  <p className="pl-4  font-normal text-lg leading-6 font-albra">
                    Informe de actividades del año anterior.
                  </p>
                </li>
                <li className="border-b-2 py-4 border-index-border flex justify-start items-start">
                  <MiniCircle />
                  <p className="pl-4  font-normal text-lg leading-6 font-albra">
                    Organigrama de la asociación.
                  </p>
                </li>
                <li className="border-b-2 py-4 border-index-border flex justify-start items-start">
                  <MiniCircle />
                  <p className="pl-4  font-normal text-lg leading-6 font-albra">
                    Listado de los miembros del Consejo Directivo.
                  </p>
                </li>
                <li className="border-b-2 py-4 border-index-border flex justify-start items-start">
                  <MiniCircle />
                  <p className="pl-4  font-normal text-lg leading-6 font-albra">
                    Fotografías representativas de la asociación.
                  </p>
                </li>
                <li className=" py-4 flex justify-start items-start">
                  <MiniCircle />
                  <p className="pl-4  font-normal text-lg leading-6 font-albra">
                    Página del{" "}
                    <span className="text-white text-sm font-bold p-1.5 rounded-full bg-index-purple">
                      DOF
                    </span>{" "}
                    (Diario Oficial de la Federación) donde esté publicada la
                    asociación como donataria autorizada. (Solo la página donde
                    aparece y que sea la publicación más reciente de acuerdo a
                    la fecha de solicitud del donativo) no es necesario todo el
                    documento del DOF.{" "}
                  </p>
                </li>
              </ul>
              <div className="lastparagraphs font-albra my-8">
                <p>
                  En Fundación Index Chihuahua® nos preocupamos por el medio
                  ambiente, por lo que no serán recibidos proyectos que
                  contengan impresa la documentación solicitada.
                </p>
                <br />
                <p>
                  Únicamente se recibirán en físico los 3 documentos de la parte
                  posterior (F-44, carta solicitud y cotizaciones).
                </p>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
      <div
        id="f30"
        className="f30bar bg-index-purple flex flex-col md:flex-row md:justify-center md:items-center md:px-10 lg:px-0 "
      >
        <p className="text-white py-10 font-basetica text-left md:text-center leading-9 text-[30px]  px-12 lg:px-0 lg:text-2xl md:py-16 w-full lg:w-6/12">
          Existen criterios que pueden llegar a excluirte de ser candidato a
          apoyo.
        </p>
        <div className="buttonwrapper px-12 pb-10 md:py-0">
          <Button
            href="/donativos/criteriosnoelegibilidad#belowbannersection"
            appearance="white"
            label="Conócelos"
            localUrl="/donativos/criteriosnoelegibilidad#belowbannersection"
            className=" h-[60px]  w-44 text-[18px] font-albra font-bold md:w-auto md:px-[60px] md:py-[21px] "
          />
        </div>
      </div>
      <ImageSection image="/images/kid.jpg" type="donativos" />
    </MainLayout>
  );
};

export default DocumentacionPage;
