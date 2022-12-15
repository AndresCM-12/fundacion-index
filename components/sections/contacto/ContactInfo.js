/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import Button from "@/components/common/Button";
const ContactInfo = () => {
  return (
    <div className="superdupercontainer">
      <div className="supercontainer w-full bg-index-gray px-8">
        {/* DESKTOP */}
        <motion.div
          id="belowbannersection"
          className="desktopcontainer hidden lg:flex justify-center items-center w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
        >
          <div className="w-full flex justify-between items-start mt-24 max-w-7xl border-b">
            <div className="leftsection ">
              <div className="text-container mx-8">
                <p className="uppercase font-albra text-[12px] leading-3 text-black  py-12   mb-4   tracking-headline text-xs    font-bold xl:mb-10">
                  Contáctanos
                </p>
                <h2 className="hidden lg:flex text-basetica mb-8 font-bold text-5xl text-black">
                  Esperamos con <br />
                  mucho gusto <br />
                  poder atenderte
                </h2>
                <h2 className="lg:hidden text-basetica mb-8 font-bold text-5xl text-black">
                  Esperamos con mucho gusto poder atenderte
                </h2>
              </div>
              <div className="contacto px-8">
                <a href="mailto:fundacion@indexchihuahua.org.mx">
                  <p className="font-albra font-semibold text-2xl">
                    fundacion@indexchihuahua.org.mx
                  </p>
                </a>
                <a
                  className="font-albra font-semibold text-2xl"
                  href="tel:+526144428450"
                >
                  <p className="">+52 (614) 4428450</p>
                </a>
              </div>
            </div>
            <div className="rightsection ">
              <motion.img
                src="/images/contacto/ninadesktop.png"
                alt="ninadesktop"
                transition={{
                  y: {
                    duration: 3,
                    yoyo: Infinity,
                    ease: "easeOut",
                    delay: 1,
                  },
                }}
                animate={{
                  y: ["0.9%", "-0.9%"],
                }}
              />
            </div>
          </div>
        </motion.div>
        <div className="w-full justify-center hidden lg:flex pb-12">
          <div className="w-full max-w-7xl flex  ">
            <div className="downsection my-8 flex justify-between items-center w-full mx-8">
              <p className=" w-96">
                Av. William Shakespeare 157 Complejo Industrial Chihuahua 31136.
                Chihuahua, Chih. MX.
              </p>
              <div className="buttoncontainer">
                <Button
                  apperance="white"
                  label="Ver en mapa"
                  localUrl="https://goo.gl/maps/n3RXe3VdrfetxMZb7"
                  className={`pt-4 pb-4 text-lg`}
                />
              </div>
              <p>Visitanos en redes</p>
              <div className="buttonscontainer flex">
                <a
                  href="https://www.facebook.com/FundacionIndexChihuahua"
                  className="socialbutton font-[15px] mr-3"
                >
                  <div className="socialcontainer bg-white hover:bg-index-aqua   w-[50px] h-[50px] flex justify-center align-center rounded-full">
                    <p className="flex justify-center items-center">FB</p>
                  </div>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCKVfTXZ_zCi-aqfMc6rCB9Q"
                  className="socialbutton font-[15px] mr-3"
                >
                  <div className="socialcontainer bg-white hover:bg-index-aqua   w-[50px] h-[50px] flex justify-center align-center rounded-full">
                    <p className="flex justify-center items-center">YT</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* MOBILE */}
        <motion.div
          className="mobilecontainer lg:hidden w-full flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
        >
          <div className="wrapper  max-w-sm md:max-w-xl px-8">
            <p className="uppercase font-albra text-[12px] leading-3 text-black font-bold py-12">
              Contáctanos
            </p>
            <h2 className="text-basetica mb-8 font-bold text-5xl text-black">
              Esperamos con mucho gusto poder atenderte
            </h2>
            <div className="imagecontainer py-4">
              <motion.img
                src="/images/contacto/ninamobile.png"
                className="w-full h-wull object-cover"
                alt="ninafundacion"
                transition={{
                  y: {
                    duration: 3,
                    yoyo: Infinity,
                    ease: "easeOut",
                    delay: 1,
                  },
                }}
                animate={{
                  y: ["0.9%", "-0.9%"],
                }}
              />
            </div>
            <a href="mailto:fundacion@indexchihuahua.org.mx">
              <p className="font-albra font-semibold text-3xl">fundacion@</p>
              <p className="font-albra font-semibold text-3xl">
                indexchihuahua.org.mx
              </p>
            </a>
            <br />
            <a
              className="font-albra font-semibold text-3xl"
              href="tel:+526144428450"
            >
              <p className="">+52 (614) 442.8450</p>
            </a>
            <div className="socialcontainer mt-8 font-albra text-lg">
              <p>Visitanos en redes</p>
              <div className="buttonscontainer flex mt-2">
                <a
                  href="https://www.facebook.com/FundacionIndexChihuahua"
                  className="socialbutton font-[15px] mr-3"
                >
                  <div className="socialcontainer bg-white hover:bg-index-aqua   w-[50px] h-[50px] flex justify-center align-center rounded-full">
                    <p className="flex justify-center items-center">FB</p>
                  </div>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCKVfTXZ_zCi-aqfMc6rCB9Q"
                  className="socialbutton font-[15px] mr-3"
                >
                  <div className="socialcontainer bg-white hover:bg-index-aqua   w-[50px] h-[50px] flex justify-center align-center rounded-full">
                    <p className="flex justify-center items-center">YT</p>
                  </div>
                </a>
              </div>
              <p className="mt-12">
                Av. William Shakespeare 157 Complejo Industrial Chihuahua 31136.
                Chihuahua, Chih. MX.
              </p>
              <div className="buttoncontainer my-16">
                <Button
                  apperance="white"
                  label="Ver en mapa"
                  localUrl="https://goo.gl/maps/n3RXe3VdrfetxMZb7"
                  className={`pt-6 pb-6 text-lg`}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactInfo;
