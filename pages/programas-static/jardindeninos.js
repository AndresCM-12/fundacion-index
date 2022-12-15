/* eslint-disable @next/next/no-img-element */
import MainLayout from "@/components/layouts/MainLayout";
import ProgramasLayout from "@/components/sections/programas/ProgramasLayout";
import ImageSection from "@/components/sections/ImageSection";
import Numero from "@/components/icons/Numero";
import Image from "next/link";
import ProgramasBanner from "@/components/banners/ProgramasBanner";
import { motion } from "framer-motion";
const JardinPage = () => {
  return (
    <MainLayout title="Jardín de niños Index">
      <ProgramasBanner className="bg-index-aqua" />

      <ProgramasLayout>
        {/* //Children Content here... */}
        <div className="wrapper">
          <h1 className=" mb-20  font-basetica text-[42px]  leading-10 lg:text-5xl font-bold">
            Jardín de niños
          </h1>
          <Numero type="one" color="aqua" className=" mb-10" />
          <p className="font-semibold font-albra text-2xl leading-8 w-10/12 ">
            Es fundado en 1996 gracias a la unión de Index Chihuahua®, Gobierno
            del Estado y Secretaría de Educación del Estado de Chihuahua, y
            financiado por medio de las utilidades de las donaciones de material
            susceptible a ser reciclado de las empresas donantes de Fundación
            Index Chihuahua® así como de actividades de procuración de fondos.
          </p>
          <p className="font-albra font-normal my-16 text-xl leading-7">
            El Jardín de Niños Index® tiene como objetivo el ofrecer una
            educación integral y de calidad a 200 niños y niñas de edad
            preescolar, hijos de colaboradores de la industria de exportación,
            que se encuentran en condiciones de vulnerabilidad, ofreciendo sus
            servicios en un horario extendido de 5:30am a 5:00pm.
          </p>
          {/* {MOBILE BALANZA} */}
          <div className="imagecontainer lg:hidden ">
            <img
              src="/images/programas/balanzamobile.svg"
              alt="balanza"
              width={1424}
              height={374}
              layout="fixed"
              className="w-full "
            />
          </div>
          {/* {desktop BALANZA} */}
          <div className="imagecontainer hidden lg:block ">
            <img
              src="/images/programas/balanzadesktop.svg"
              alt="balanza"
              layout="fixed"
              className="w-full "
            />
          </div>

          <p className="font-albra font-normal my-16 text-xl leading-7">
            Cuenta con un programa escolarizado de 9:00am a 12:00pm y un
            servicio complementario de estancia para niños y niñas, siendo un
            modelo único en el país, donde se ofrece alimentación, actividades
            formativas, cuidados brindados por personal especializado, programas
            de prevención de violencia y terapias de lenguaje; todo esto
            mediante la promoción de valores, actividades culturales y educación
            ambiental.
          </p>
          <p className="font-albra font-bold my-16 text-xl leading-7">
            Programa escolarizado de 9:00am a 12:00pm
          </p>
          <div className="clockscontainer lg:flex lg:justify-between lg:items-center lg:space-y-0  space-y-16">
            <motion.div
              className="imagecontainer "
              transition={{
                y: {
                  duration: 1,
                  yoyo: Infinity,
                  ease: "easeOut",
                  delay: 0.5,
                },
              }}
              animate={{
                y: ["0.9%", "-0.9%"],
              }}
            >
              <img
                src="/images/programas/clockone.svg"
                alt="balanza"
                layout="fixed"
                className="w-full"
              />
            </motion.div>
            <motion.div
              className="imagecontainer"
              transition={{
                y: {
                  duration: 1,
                  yoyo: Infinity,
                  ease: "easeOut",
                  delay: 1,
                },
              }}
              animate={{
                y: ["0.9%", "-0.9%"],
              }}
            >
              <img
                src="/images/programas/clocktwo.svg"
                alt="balanza"
                layout="fixed"
                className="w-full "
              />
            </motion.div>
          </div>
        </div>
      </ProgramasLayout>
      <div className="dummyspace py-8 bg-index-gray"></div>

      <ImageSection image="/images/friendspic.jpg" type="programas" />
    </MainLayout>
  );
};

export default JardinPage;
