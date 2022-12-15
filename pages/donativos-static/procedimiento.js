/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import MainLayout from "@/components/layouts/MainLayout";
import ImageSection from "@/components/sections/ImageSection";
import DonativosLayout from "@/components/sections/donativos/DonativosLayout";
import Numero from "@/components/icons/Numero";
import { Disclosure } from "@headlessui/react";
import TriangleDownIcon from "@/components/icons/TriangleDownIcon";
import Link from "next/link";
import DonativosBanner from "@/components/banners/DonativosBanner";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

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
    <MainLayout title="Procedimiento">
      <DonativosBanner className="bg-index-purple" />
      <DonativosLayout>
        {/* //Children Content here... */}
        <div className="wrapper">
          <h1 className=" mb-20 font-basetica text-[42px] leading-10 lg:text-5xl  font-bold">
            Procedimiento{" "}
          </h1>
          <Numero type="two" color="purple" />
          <p className="font-semibold font-albra text-2xl mt-10  mb-10 leading-8 w-full ">
            La solicitud de donativo debe pasar por ciertos requerimientos que
            permitirán evaluar de manera optima si esta se encuentra dentro de
            los lineamientos de Fundación Index®.{" "}
          </p>

          <div className="listcontainer lg:px-7">
            {/* 01 */}
            <div className="listitem my-4">
              <Disclosure>
                {({ open }) => (
                  <div
                    className={classNames(
                      open && " rounded-3xl ",
                      "bg-white rounded-full py-7 px-7 font-albra w-full"
                    )}
                  >
                    <Disclosure.Button className="w-full">
                      <div
                        className={classNames(
                          open && "border-b-2 border-index-gray py-4",
                          "font-albra font-bold text-xl flex items-center justify-between w-full"
                        )}
                      >
                        <p>
                          {" "}
                          <span className="mr-4">01</span>Documentación
                        </p>
                        <div
                          className={classNames(
                            open && "transform rotate-180 bg-[#E1E8EB] ",
                            !open && "bg-index-purple",
                            "iconcontainer  w-10 h-10 rounded-full flex items-center justify-center text-white"
                          )}
                        >
                          <TriangleDownIcon />
                        </div>
                      </div>
                    </Disclosure.Button>

                    <Disclosure.Panel>
                      <div className="contentcontainer font-albra text-lg py-7 lg:px-7">
                        Hacer entrega de la documentación en las instalaciones
                        de Index Chihuahua®. <br />
                        <Link href="/contactanos">
                          <a className="underline text-index-purple font-semibold">
                            Conoce nuestra dirección
                          </a>
                        </Link>
                      </div>
                    </Disclosure.Panel>
                  </div>
                )}
              </Disclosure>
            </div>
            {/* 02 */}
            <div className="listitem my-4">
              <Disclosure>
                {({ open }) => (
                  <div
                    className={classNames(
                      open && " rounded-3xl ",
                      "bg-white rounded-full py-7 px-7 font-albra w-full"
                    )}
                  >
                    <Disclosure.Button className="w-full">
                      <div
                        className={classNames(
                          open && "border-b-2 border-index-gray py-4",
                          "font-albra font-bold text-xl flex items-center justify-between w-full"
                        )}
                      >
                        <p>
                          {" "}
                          <span className="mr-4">02</span>Revisión
                        </p>
                        <div
                          className={classNames(
                            open && "transform rotate-180 bg-[#E1E8EB] ",
                            !open && "bg-index-purple",
                            "iconcontainer  w-10 h-10 rounded-full flex items-center justify-center text-white"
                          )}
                        >
                          <TriangleDownIcon />
                        </div>
                      </div>
                    </Disclosure.Button>

                    <Disclosure.Panel>
                      <div className="contentcontainer font-albra py-7 text-lg lg:px-7">
                        La documentación será revisada para identificar si el
                        donativo solicitado se encuentra dentro de las líneas de
                        apoyo de Fundación Index Chihuahua®. <br />
                      </div>

                      <div className="listcontainer lg:px-7">
                        <h2 className="text-white flex justify-center items-center font-albra font-bold py-2 px-4 bg-index-purple w-40 rounded-full mb-4">
                          Àreas prioritarias
                        </h2>
                        <ul>
                          <li className="border-b-2 py-4 border-index-border flex justify-start items-start">
                            <MiniCircle />
                            <p className="pl-4  font-normal text-lg leading-6 font-albra">
                              Atención y cuidado de niños y niñas.
                            </p>
                          </li>
                          <li className="border-b-2 py-4 border-index-border flex justify-start items-start">
                            <MiniCircle />
                            <p className="pl-4  font-normal text-lg leading-6 font-albra">
                              Educación de niños, niñas y adolescentes.
                            </p>
                          </li>
                          <li className="border-b-2 py-4 border-index-border flex justify-start items-start">
                            <MiniCircle />
                            <p className="pl-4  font-normal text-lg leading-6 font-albra">
                              Prevención de violencia familiar.
                            </p>
                          </li>
                          <li className="border-b-2 py-4 border-index-border flex justify-start items-start">
                            <MiniCircle />
                            <p className="pl-4  font-normal text-lg leading-6 font-albra">
                              Programas de salud.
                            </p>
                          </li>
                          <li className="border-b-2 py-4 border-index-border flex justify-start items-start">
                            <MiniCircle />
                            <p className="pl-4  font-normal text-lg leading-6 font-albra">
                              Programas de capital social comunitario.
                            </p>
                          </li>
                          <li className="border-b-2 py-4 border-index-border flex justify-start items-start">
                            <MiniCircle />
                            <p className="pl-4  font-normal text-lg leading-6 font-albra">
                              Programas enfocados en apoyar a las familias de la
                              industria de exportación en Chihuahua.
                            </p>
                          </li>
                        </ul>
                      </div>
                    </Disclosure.Panel>
                  </div>
                )}
              </Disclosure>
            </div>
            {/* 03 */}
            <div className="listitem my-4">
              <Disclosure>
                {({ open }) => (
                  <div
                    className={classNames(
                      open && " rounded-3xl ",
                      "bg-white rounded-full py-7 px-7 font-albra w-full"
                    )}
                  >
                    <Disclosure.Button className="w-full">
                      <div
                        className={classNames(
                          open && "border-b-2 border-index-gray py-4",
                          "font-albra font-bold text-xl flex items-center justify-between w-full"
                        )}
                      >
                        <p>
                          {" "}
                          <span className="mr-4">03</span>Entrevista
                        </p>
                        <div
                          className={classNames(
                            open && "transform rotate-180 bg-[#E1E8EB] ",
                            !open && "bg-index-purple",
                            "iconcontainer  w-10 h-10 rounded-full flex items-center justify-center text-white"
                          )}
                        >
                          <TriangleDownIcon />
                        </div>
                      </div>
                    </Disclosure.Button>

                    <Disclosure.Panel>
                      <div className="contentcontainer font-albra py-7 text-lg lg:px-7">
                        Si la solicitud se encuentra dentro de las líneas de
                        apoyo de Fundación Index Chihuahua®, se comunicarán con la
                        asociación para informarle que deberán realizar una
                        presentación ante al Comité de Responsabilidad Social,
                        donde se les podrán realizar preguntas sobre el proyecto
                        que posteriormente evaluarán. <br /> El Comité
                        determinará cuáles proyectos pasarán a autorización por
                        el Consejo Directivo. <br /> (El Comité de
                        Responsabilidad Social en la Ciudad de Chihuahua sesiona
                        de manera mensual y está conformado por responsables de
                        las áreas de Responsabilidad Social, Recursos Humanos,
                        Medio Ambiente, Seguridad e Higiene de las empresas
                        donantes de Fundación Index Chihuahua®). Chihuahua
                        Camargo/Jiménez Delicias Cuauhtémoc
                      </div>

                      <div className="listcontainer lg:px-7">
                        <h2 className="text-white flex justify-center items-center font-albra font-bold py-2 px-4 bg-index-purple w-44 rounded-full mb-4">
                          Comité por región
                        </h2>
                        <ul>
                          <li className="border-b-2  py-4 border-index-border flex flex-col lg:flex-row justify-start items-start">
                            <div className="region mb-4 lg:mb-0 w-4/12 font-bold">
                              Chihuahua
                            </div>
                            <p className="lg:pl-4  font-normal text-lg leading-6 font-albra">
                              Comité de Responsabilidad Social Index Chihuahua®.
                            </p>
                          </li>
                          <li className="border-b-2  py-4 border-index-border flex flex-col lg:flex-row justify-start items-start">
                            <div className="region mb-4 lg:mb-0 w-4/12 font-bold">
                              Camargo/Jiménez
                            </div>
                            <p className="lg:pl-4  font-normal text-lg leading-6 font-albra">
                              Grupo Empresarial Camarguense.
                            </p>
                          </li>
                          <li className="border-b-2  py-4 border-index-border flex flex-col lg:flex-row justify-start items-start">
                            <div className="region mb-4 lg:mb-0 w-4/12 font-bold">
                              Delicias
                            </div>
                            <p className="lg:pl-4  font-normal text-lg leading-6 font-albra">
                              Comité de Responsabilidad Social Cirpro.
                            </p>
                          </li>
                          <li className="border-b-2  py-4 border-index-border flex flex-col lg:flex-row justify-start items-start">
                            <div className="region mb-4 lg:mb-0 w-4/12 font-bold">
                              Cuauhtémoc
                            </div>
                            <p className="lg:pl-4  font-normal text-lg leading-6 font-albra">
                              Comité de Responsabilidad Quiroproductos.
                            </p>
                          </li>
                        </ul>
                      </div>
                    </Disclosure.Panel>
                  </div>
                )}
              </Disclosure>
            </div>
            {/* 04 */}
            <div className="listitem my-4">
              <Disclosure>
                {({ open }) => (
                  <div
                    className={classNames(
                      open && " rounded-3xl ",
                      "bg-white rounded-full py-7 px-7 font-albra w-full"
                    )}
                  >
                    <Disclosure.Button className="w-full">
                      <div
                        className={classNames(
                          open && "border-b-2 border-index-gray py-4",
                          "font-albra font-bold text-xl flex items-center justify-between w-full"
                        )}
                      >
                        <p>
                          {" "}
                          <span className="mr-4">04</span>Presentación
                        </p>
                        <div
                          className={classNames(
                            open && "transform rotate-180 bg-[#E1E8EB] ",
                            !open && "bg-index-purple",
                            "iconcontainer  w-10 h-10 rounded-full flex items-center justify-center text-white"
                          )}
                        >
                          <TriangleDownIcon />
                        </div>
                      </div>
                    </Disclosure.Button>

                    <Disclosure.Panel>
                      <div className="contentcontainer font-albra py-7 text-lg lg:px-7">
                        La presentación deberá estar respaldada por material de
                        apoyo en formato PowerPoint con una duración máxima de
                        10 minutos, que deberá ser entregada con tres días
                        hábiles de anticipación a Fundación Index Chihuahua® con respecto
                        a la fecha que se les calendarizó su presentación.
                        Deberán acudir un máximo de 2 personas.
                        <br />
                      </div>

                      <div className="listcontainer  lg:px-7">
                        <h2 className="text-white flex justify-center items-center font-albra font-bold py-2 px-4 bg-index-purple  w-40 rounded-full mb-4">
                          Deberá incluir{" "}
                        </h2>
                        <ul>
                          <li className="border-b-2 py-4 border-index-border flex justify-start items-start">
                            <MiniCircle />
                            <p className="pl-4  font-normal text-lg leading-6 font-albra">
                              Título del proyecto a desarrollar.
                            </p>
                          </li>
                          <li className="border-b-2 py-4 border-index-border flex justify-start items-start">
                            <MiniCircle />
                            <p className="pl-4  font-normal text-lg leading-6 font-albra">
                              Fotografías o video de la organización y proyecto.
                            </p>
                          </li>
                          <li className="border-b-2 py-4 border-index-border flex justify-start items-start">
                            <MiniCircle />
                            <p className="pl-4  font-normal text-lg leading-6 font-albra">
                              Objetivo y trascendencia de la organización.
                            </p>
                          </li>
                          <li className="border-b-2 py-4 border-index-border flex justify-start items-start">
                            <MiniCircle />
                            <p className="pl-4  font-normal text-lg leading-6 font-albra">
                              Presupuesto anual de la organización.
                            </p>
                          </li>
                          <li className="border-b-2 py-4 border-index-border flex justify-start items-start">
                            <MiniCircle />
                            <p className="pl-4  font-normal text-lg leading-6 font-albra">
                              Descripción del proyecto y cantidad de
                              beneficiarios a atender (si incluye a
                              colaboradores de la industria manufacturera
                              identificar cuántos, en qué zona geográfica se
                              encuentran y de ser posible identificar las
                              empresas a las que pertenecen).{" "}
                            </p>
                          </li>
                          <li className="border-b-2 py-4 border-index-border flex justify-start items-start">
                            <MiniCircle />
                            <p className="pl-4  font-normal text-lg leading-6 font-albra">
                              Desglose financiero del proyecto.
                            </p>
                          </li>
                          <li className="border-b-2 py-4 border-index-border flex justify-start items-start">
                            <MiniCircle />
                            <p className="pl-4  font-normal text-lg leading-6 font-albra">
                              Costo total del proyecto.
                            </p>
                          </li>
                          <li className="border-b-2 py-4 border-index-border flex justify-start items-start">
                            <MiniCircle />
                            <p className="pl-4  font-normal text-lg leading-6 font-albra">
                              Co-inversiones.{" "}
                            </p>
                          </li>
                          <li className="border-b-2 py-4 border-index-border flex justify-start items-start">
                            <MiniCircle />
                            <p className="pl-4  font-normal text-lg leading-6 font-albra">
                              Cantidad solicitada a Fundación Index Chihuahua®.
                            </p>
                          </li>
                          <li className="border-b-2 py-4 border-index-border flex justify-start items-start">
                            <MiniCircle />
                            <p className="pl-4  font-normal text-lg leading-6 font-albra">
                              Descripción detallada en lo cual va a ser
                              utilizada la cantidad solicitada.{" "}
                            </p>
                          </li>
                          <li className="border-b-2 py-4 border-index-border flex justify-start items-start">
                            <MiniCircle />
                            <p className="pl-4  font-normal text-lg leading-6 font-albra">
                              Mencionar si es asociación analizada por Confío
                              A.C. y año de su último análisis.{" "}
                            </p>
                          </li>
                        </ul>
                      </div>
                    </Disclosure.Panel>
                  </div>
                )}
              </Disclosure>
            </div>
            {/* 05 */}
            <div className="listitem my-4">
              <Disclosure>
                {({ open }) => (
                  <div
                    className={classNames(
                      open && " rounded-3xl ",
                      "bg-white rounded-full py-7 px-7 font-albra w-full"
                    )}
                  >
                    <Disclosure.Button className="w-full">
                      <div
                        className={classNames(
                          open && "border-b-2 border-index-gray py-4",
                          "font-albra font-bold text-xl flex items-center justify-between w-full"
                        )}
                      >
                        <p>
                          {" "}
                          <span className="mr-4">05</span>Resolución
                        </p>
                        <div
                          className={classNames(
                            open && "transform rotate-180 bg-[#E1E8EB] ",
                            !open && "bg-index-purple",
                            "iconcontainer  w-10 h-10 rounded-full flex items-center justify-center text-white"
                          )}
                        >
                          <TriangleDownIcon />
                        </div>
                      </div>
                    </Disclosure.Button>

                    <Disclosure.Panel>
                      <div className="contentcontainer font-albra text-lg py-7 lg:px-7">
                        <p>
                          Si el Comité de Responsabilidad Social aprueba el
                          proyecto se turnará a Consejo Directivo para su
                          resolución final.
                        </p>{" "}
                        <br />
                        <p>
                          De ser la resolución del Consejo Directivo de
                          Fundación Index Chihuahua® positiva, se le notificará de manera
                          escrita.
                        </p>
                        <br />
                        <p>
                          (En algunos casos el Consejo Directivo realiza
                          observaciones que se incluirán en la carta de
                          resolución, las cuales deberán de ser cumplidas para
                          la total aprobación del proyecto.)
                        </p>{" "}
                        <br />
                        <p>
                          {" "}
                          El Consejo Directivo sesiona de manera mensual al
                          igual que el Comité de Responsabilidad Social.
                        </p>
                      </div>
                    </Disclosure.Panel>
                  </div>
                )}
              </Disclosure>
            </div>
          </div>
        </div>
      </DonativosLayout>{" "}
      <div className="dummyspace py-8 bg-index-gray"></div>
      <ImageSection image="/images/kid.jpg" type="donativos" />
    </MainLayout>
  );
};

export default DocumentacionPage;
