/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import Button from "@/components/common/Button";
const ContactInfo = ({ info, socialInfo }) => {
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
                  {info?.text}
                </p>
                <h2 className="hidden lg:flex text-basetica mb-8 font-bold text-5xl text-black">
                  {info?.title}
                </h2>
                <h2 className="lg:hidden text-basetica mb-8 font-bold text-5xl text-black">
                  {info?.title}
                </h2>
              </div>
              <div className="contacto px-8">
                <a href={"mailto:" + info?.email}>
                  <p className="font-albra font-semibold text-2xl">
                    {info?.email}
                  </p>
                </a>
                <a
                  className="font-albra font-semibold text-2xl"
                  href={"tel:" + info?.phone}
                >
                  <p className="">{info?.phone}</p>
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
                {info?.address1}
                {info?.address2}
              </p>
              <div className="buttoncontainer">
                <Button
                  apperance="white"
                  label={info?.linkText}
                  localUrl={info?.linkUrl}
                  className={`pt-4 pb-4 text-lg`}
                />
              </div>
              <p>{info?.redes}</p>
              <div className="buttonscontainer flex">
                {socialInfo?.map((redes) => {
                  return (
                    <a
                      href={redes?.link}
                      className="socialbutton font-[15px] mr-3"
                    >
                      <div className="socialcontainer bg-white hover:bg-index-aqua   w-[50px] h-[50px] flex justify-center align-center rounded-full">
                        <p className="flex justify-center items-center">
                          {redes?.name}
                        </p>
                      </div>
                    </a>
                  );
                })}
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
              {info?.text}
            </p>
            <h2 className="text-basetica mb-8 font-bold text-5xl text-black">
              {info?.title}
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
            <a href={"mailto:" + info?.email}>
              <p className="font-albra font-semibold text-base">
                {info?.email}
              </p>
            </a>
            <br />
            <a
              className="font-albra font-semibold text-3xl"
              href={"tel:" + info?.phone}
            >
              <p className="">{info?.phone}</p>
            </a>
            <div className="socialcontainer mt-8 font-albra text-lg">
              <p>{info?.redes}</p>
              <div className="buttonscontainer flex mt-2">
                {socialInfo?.map((social) => {
                  return (
                    <a
                      href={social?.link}
                      className="socialbutton font-[15px] mr-3"
                    >
                      <div className="socialcontainer bg-white hover:bg-index-aqua   w-[50px] h-[50px] flex justify-center align-center rounded-full">
                        <p className="flex justify-center items-center">
                          {social?.name}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
              <p className="mt-12">
                {info?.address1}
                {info?.address2}
              </p>
              <div className="buttoncontainer my-16">
                <Button
                  apperance="white"
                  label={info?.linkText}
                  localUrl={info?.linkUrl}
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
