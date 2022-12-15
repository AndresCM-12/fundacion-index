/* eslint-disable @next/next/no-img-element */
import MainLayout from "@/components/layouts/MainLayout";
import ImageSection from "@/components/sections/ImageSection";
import DonativosLayout from "@/components/sections/donativos/DonativosLayout";
import Numero from "@/components/icons/Numero";
import DonativosBanner from "@/components/banners/DonativosBanner";

const CriteriosNoElegibilidadPage = () => {
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
    <MainLayout title="Criterios de no elegibilidad">
      <DonativosBanner className="bg-index-purple" />
      <DonativosLayout>
        {/* //Children Content here... */}
        <div className="wrapper">
          <h1 className=" mb-20 font-basetica text-[42px] leading-10 lg:text-5xl  font-bold">
            Criterios de no elegibilidad{" "}
          </h1>
          <Numero type="four" color="purple" />
          <p className="font-semibold font-albra text-2xl mt-10  mb-10 leading-8 w-full ">
            Existen pautas dentro de Fundación Index Chihuahua® que permiten
            considerar si el candidato es finalmente apto para el apoyo.
          </p>

          <div className="listcontainer">
            <h2 className="uppercase pl-8 lg:pl-9 mb-4 font-albra  tracking-headline text-xs leading-3  text-black font-bold xl:mb-10 xl:mt-24">
              A detalle
            </h2>
            <ul>
              <li className="border-b-2 py-4 border-index-border flex justify-start items-start">
                <MiniCircle />
                <p className="pl-4  font-normal text-lg leading-6 font-albra">
                  Se solicita recurso para pago a nómina, becas para viajes,
                  eventos deportivos y patrocinios.
                </p>
              </li>
              <li className="border-b-2 py-4 border-index-border flex justify-start items-start">
                <MiniCircle />
                <p className="pl-4  font-normal text-lg leading-6 font-albra">
                  No serán elegibles proyectos que incluyan gasto operativo.{" "}
                </p>
              </li>
              <li className="border-b-2 py-4 border-index-border flex justify-start items-start">
                <MiniCircle />
                <p className="pl-4  font-normal text-lg leading-6 font-albra">
                  La asociación no podrá ser apoyada dos años consecutivos si se
                  le apoyó con más de{" "}
                  <span className="text-white text-sm font-bold p-1.5 rounded-full bg-index-purple">
                    $150,000
                  </span>{" "}
                  pesos excepto las asociaciones que coordinan los Programas
                  Institucionales.
                </p>
              </li>
              <li className="border-b-2 py-4 border-index-border flex justify-start items-start">
                <MiniCircle />
                <p className="pl-4  font-normal text-lg leading-6 font-albra">
                  No entregar la documentación necesaria o no cumplir con algún
                  requisito.
                </p>
              </li>
              <li className="border-b-2 py-4 border-index-border flex justify-start items-start">
                <MiniCircle />
                <p className="pl-4  font-normal text-lg leading-6 font-albra">
                  Los objetivos específicos del proyecto no son claros, medibles
                  o congruentes con el objetivo general del proyecto.{" "}
                </p>
              </li>
              <li className="border-b-2 py-4 border-index-border flex justify-start items-start">
                <MiniCircle />
                <p className="pl-4  font-normal text-lg leading-6 font-albra">
                  El proyecto no tiene claro el impacto que piensa generar en
                  los beneficiarios.{" "}
                </p>
              </li>

              <li className="border-b-2 py-4 border-index-border flex justify-start items-start">
                <MiniCircle />
                <p className="pl-4  font-normal text-lg leading-6 font-albra">
                  El presupuesto del proyecto no se justifica con las metas y
                  actividades.{" "}
                </p>
              </li>
              <li className="border-b-2 py-4 border-index-border flex justify-start items-start">
                <MiniCircle />
                <p className="pl-4  font-normal text-lg leading-6 font-albra">
                  Las actividades planteadas en la propuesta no son adecuadas ni
                  suficientes para el logro de los objetivos.
                </p>
              </li>
              <li className="border-b-2 py-4 border-index-border flex justify-start items-start">
                <MiniCircle />
                <p className="pl-4  font-normal text-lg leading-6 font-albra">
                  La propuesta no muestra la experiencia de la organización en
                  proyectos similares.
                </p>
              </li>
              <li className="border-b-2 py-4 border-index-border flex justify-start items-start">
                <MiniCircle />
                <p className="pl-4  font-normal text-lg leading-6 font-albra">
                  La propuesta no muestra la forma en que la organización piensa
                  evaluar los cambios generados en los beneficiarios con la
                  implementación del proyecto.
                </p>
              </li>
              <li className=" py-4  flex justify-start items-start">
                <MiniCircle />
                <p className="pl-4  font-normal text-lg leading-6 font-albra">
                  Existe una falta de relación entre su diseño, la forma como se
                  implementa, el análisis de los resultados y el impacto
                  esperado.
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

export default CriteriosNoElegibilidadPage;
