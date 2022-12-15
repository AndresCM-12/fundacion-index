import Button from "@/components/common/Button";
import TriangleDownIcon from "@/components/icons/TriangleDownIcon";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const navData = [
  {
    text: "Acerca de Nosotros",
    link: "/nosotros/acercade",
  },
  {
    text: "Historia",
    link: "/nosotros/historia",
  },
  {
    text: "Consejo directivo",
    link: "/nosotros/consejo",
  },
  {
    text: "Transparencia",
    link: "/nosotros/transparencia",
  },
];

const NosotrosLayout = ({ children, navData }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* //MOBILE NAVBAR */}
      <div className="mobilenavbar lg:hidden bg-white flex items-center justify-between px-7 py-6">
        <p className="uppercase font-bold font-albra text-sm">Nosotros</p>
        <div
          className="flex items-center space-x-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <p className={`text-base font-albra font-normal `}>Ver más</p>
          <TriangleDownIcon className={mobileOpen && "rotate-180 "} />
        </div>
      </div>
      {/* MOBILE NAVBAR CONTAINER */}
      <div className="wrapper lg:hidden">
        {mobileOpen && (
          <div className="lg:flex flex-col items-start space-y-2 px-7 lg:h-full min-h-screen max-h-screen">
            <h2 className="font-albra font-semibold text-2xl my-5">Nosotros</h2>
            <div className="optionscontainer flex flex-col items-start   border-l-2 border-index-border">
              {navData.map((item, index) => (
                <Link href={item.link} key={index}>
                  <a className="py-2 font-albra pl-5 text-2xl">{item.text}</a>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
      <div
        id="belowbannersection"
        className="sectioncontainer w-full flex justify-center bg-index-gray"
      >
        <motion.div
          className="wrapper max-w-7xl flex justify-center w-full mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
        >
          <div className="leftsection hidden lg:block border-l-2 border-index-border pl-7 mr-32 ">
            <div className="navbarcontainer">
              {navData.map((item, index) => (
                <div className="navbaritem my-3" key={index}>
                  <Button
                    label={item.text}
                    localUrl={item.link}
                    appearance="white"
                    className="text-black text-[15px] font-semibold hover:text-index-aqua "
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="rightsection mx-6 lg:ml-0 pl-7 border-l-2 border-index-border w-full lg:w-8/12">
            {children}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default NosotrosLayout;
