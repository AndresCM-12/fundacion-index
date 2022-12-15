import Link from "next/link";
import { motion } from "framer-motion";

const ConoceMas = () => {
  return (
    <div className="supercontainer bg-index-gray  flex justify-center items-center w-screen  relative  pb-32 py-16 lg:pb-32">
      <motion.p className=" h-1/2 mt-12 overflow-x-hidden text-[180px] font-basetica font-bold text-white  leading-[90px] absolute z-0 w-screen py-4 whitespace-nowrap text-center -pl-20">
        os manufacturando historias
      </motion.p>

      <Link href="/programas/Jard%C3%ADn%20de%20Ni%C3%B1os%20Index" passHref>
        <motion.div
          className="circle cursor-pointer hover:bg-index-aquahover font-albra z-10 text-white font-semibold bg-index-aqua w-[213px] h-[213px] rounded-full flex justify-center items-center "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0 }}
          viewport={{ once: false }}
        >
          <p>Conoce más</p>
        </motion.div>
      </Link>
    </div>
  );
};

export default ConoceMas;
