/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import Link from "next/link";
import UpIcon from "../icons/UpIcon";
const HalfCircle = ({ ...rest }) => {
  return (
    <svg
      width="65"
      height="130"
      viewBox="0 0 65 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M65 0C29.1017 0.000210485 0.000405549 29.1016 0.000402411 65C0.000399273 100.898 29.1017 130 65 130L65 0Z"
        fill="#6aded7"
      />
    </svg>
  );
};

const ProgramasBanner = ({ ...rest }) => {
  return (
    <div
      className={`supercontainer min-h-screen h-screen w-screen  ${rest.className}`}
      {...rest}
    >
      {/* MOBILE text */}
      <div className="textcontainermobile lg:hidden text-white pt-16 pb-10  px-8">
        <motion.h1
          className="text-basetica mb-8 font-bold text-5xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          Nuestros programas
        </motion.h1>
        <motion.p
          className="font-albra text-[21px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.7 }}
        >
          ¿Estás interesado en solicitar financiamiento? Conoce más sobre
          nuestros procedimientos y los requerimientos necesarios.{" "}
        </motion.p>
      </div>

      {/* //MOBILE SVG */}
      <div className="imagecontainermobile  lg:hidden w-screen">
        <img
          src="/images/programas/bannermobile.svg"
          alt="backgroundsvg"
          className="w-full h-full"
        />
      </div>

      {/* DESKTOP TEXT */}
      <div className="wrapper relative h-[450px] w-full hidden lg:flex justify-center items-center">
        {/* ABSOLUTE DESKTOP CIRCLES */}
        <div className="circlecontainer absolute bottom-0 left-0 ml-6 -mb-16">
          <HalfCircle />
        </div>
        <div className="circlecontainer absolute bottom-1/2 -left-8 -rotate-90">
          <HalfCircle />
        </div>
        <div className="arrowdowncontainer absolute -bottom-7 -rotate-180 z-50">
          <Link href="#belowbannersection">
            <a>
              <UpIcon />
            </a>
          </Link>
        </div>
        <div className="max-w-7xl flex items-center justify-around w-full ">
          <div className="textcontainerdesktop  w-1/2 px-8 text-white  pb-10">
            <motion.h1
              className="text-basetica mb-8 font-bold text-5xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
              Nuestros programas
            </motion.h1>
            <motion.p
              className="font-basetica mt-24 text-[21px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.7 }}
            >
              ¿Estás interesado en solicitar financiamiento? <br /> Conoce más
              sobre nuestros procedimientos y los requerimientos necesarios.{" "}
            </motion.p>
          </div>
          {/* DEKSTOP SVG */}
          <div className="imagecontainer mt-[135px] h-full w-1/2 z-10 ">
            <img
              src="/images/programas/bannerdesktop.svg"
              alt="backgroundsvg"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramasBanner;
