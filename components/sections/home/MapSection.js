import Button from "@/components/common/Button";
import MapSvg from "@/components/common/svgs/MapSvg";
import FormIcon from "@/components/icons/FormIcon";

import { motion } from "framer-motion";

const MapSection = () => {
  const ContactSection = () => {
    return (
      <div className="wrapper lg:px-20 lg:rounded-full lg:flex lg:items-center lg:w-10/12 rounded-[42px] bg-white  py-8 absolute -bottom-[150px] lg:-bottom-[60px] px-9 mx-6">
        <div className="text-container flex  lg:flex lg:justify-between lg:items-center lg:w-full  text-[21px] pt-4 lg:pt-0 leading-8 text-left ">
          <div className="font-basetica flex flex-wrap px-0 lg:px-8">
            ¿Deseas aportar tu granito? Únete
            <FormIcon className="bg-index-aqua mx-2 hidden lg:flex" /> y
            comienza a ayudar.
          </div>
        </div>
        <div className="buttoncontainer lg:my-0 my-8 lg:ml-4">
          <Button
            appearance="aqua"
            label="Contáctanos"
            localUrl="/contactanos"
            className={`py-6 lg:py-5 lg:px-20 font-albra font-normal text-[18px]`}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="supercontainer flex justify-center items-center w-full bg-index-aqua relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        className="dadcontainer bg-index-aqua text-white lg:pt-0 md:pb-10 md:px-4 w-full md:mb-0 lg:mx-0 md:flex md:justify-center md:items-center "
        id="HomeMapSection"
      >
        <div className="wrapper pl-0 lg:pl-16 w-full lg:w-6/12">
          <div>
            <>
              <h3 className="font-bold px-8 font-albra uppercase leading-3 tracking-headline text-xs">
                Fundación Index ®
              </h3>
              <p className=" text-[30px] px-8 leading-9 font-bold mt-10 lg:w-8/12">
                Una organización dedicada a apoyar a personas en situación de
                vulneravilidad
              </p>
            </>
          </div>
          <div className="buttoncontainer px-8 my-11">
            <Button
              appearance="white"
              label="Conócenos"
              className={`py-5 lg:w-[225px] font-semibold md:mb-16 lg:mb-0`}
              localUrl="/nosotros/acercade"
            />
          </div>
        </div>
        {/* //desktop map */}
        <div className="mapcontainer hidden lg:flex w-6/12">
          <MapSvg className="lg:block overflow-hidden max-w-7xl" />
        </div>
        {/* mobile map */}
        <div className="mapcontainer flex md:hidden">
          <MapSvg
            className="lg:block w-full px-0 mx-0"
            width="100%"
            height="850px"
          />
        </div>
      </motion.div>
      <ContactSection />
    </div>
  );
};

export default MapSection;
