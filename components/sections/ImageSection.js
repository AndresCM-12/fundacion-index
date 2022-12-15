/* eslint-disable @next/next/no-img-element */
import HalfCircle from "@/components/icons/HalfCircle";
import Button from "@/components/common/Button";
import FormIcon from "@/components/icons/FormIcon";

import { motion } from "framer-motion";

const ImageSection = ({ image, type }) => {
  //Helper to do conditionals for classes
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="dadcontainer font-basetica md:flex md:h-full ">
      <div className="imagecontainer block md:w-6/12 md:min-h-full relative">
        <img
          className="w-full h-full object-cover"
          src={image}
          alt="imagebanner"
          layout="responsive"
        />
        <div className="circlewrapper hidden md:block md:absolute bottom-0 -right-[65px]   ">
          <HalfCircle
            className={classNames(
              type === "programas" && ` text-index-aqua`,
              type === "donativos" && ` text-index-purple`,
              type === "recicladores" && ` text-index-blue-default`
            )}
          />
        </div>
      </div>

      <div className="secondcontainer text-[21px] md:text-[42px] md:pl-14 lg:pl-32 sm:text-md flex flex-col justify-center px-7 py-[41px] mx-auto w-full md:w-6/12">
        {/* rightsection */}
        <>
          <div className="wrapper w-full flex justify-center items-center md:justify-start  ">
            <motion.div
              className="textcontainer font-basetica  md:font-normal md:text-2xl leading-[30px] font-medium "
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
            >
              <p>¿Deseas aportar tu granito ? </p>
              <div className=" flex items-center justify-left">
                <p className=" ">Si gustas, llena nuestro </p>
                {/* TO DO: El background del Form Icon, no funciona en el type donativos */}
                <FormIcon
                  className={classNames(
                    type === "programas" && ` bg-index-aqua`,
                    type === "donativos" && ` bg-index-purple`,
                    type === "recicladores" && ` bg-index-blue-default`,
                    `ml-2`
                  )}
                />
              </div>{" "}
              <p>formulario para conocerte</p>
              <p>mejor y comenzar a ayudar.</p>
            </motion.div>
          </div>
          <motion.div
            className="buttoncontainer pt-[31px] "
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: false }}
          >
            <Button
              href="/contactanos"
              appearance={classNames(
                type === "programas" && `outlineaqua`,
                type === "donativos" && `outlinepurple`,
                type === "recicladores" && `outlineblue`
              )}
              label="Contáctanos"
              localUrl="/contactanos"
              className=" h-[60px] text-[18px]  font-albra font-normal md:w-auto md:px-[60px] md:py-[21px]"
            />
          </motion.div>{" "}
        </>
      </div>
    </div>
  );
};

export default ImageSection;
