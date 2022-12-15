// TIMELINE COMPONENT
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const TimeLineSection = ({ numbersBlocks }) => {
  let circleClasses = [
    "bg-index-blue-default",
    "bg-index-blue-dark",
    "bg-index-aqua mb-14",
  ];

  //CIRCLE COMPONENT
  const Circle = ({
    startNumber = 0,
    endNumber,
    extraText = "",
    duration = 1.5,
    description,
    className,
  }) => {
    const { ref } = useInView({
      threshold: 0.2,
    });

    return (
      <div
        ref={ref}
        className={`circle text-white flex flex-col items-center justify-center rounded-full w-[315px] md:h-[250px] md:w-[250px] lg:h-[315px] lg:w-[315px] h-[315px] mt-14 md:my-0 ${className}`}
      >
        <div className=" font-bold text-7xl md:text-5xl lg:text-7xl">
          <CountUp
            start={startNumber}
            end={endNumber}
            duration={duration}
            redraw={true}
          />
          {extraText}
        </div>
        <div className="textcontainer text-xl md:text-base lg:text-xl text-center leading-7 mt-5 px-12 md:px-6 lg:px-12">
          <p>{description}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="dadcontainer bg-index-gray px-8 pt-52 lg:px-4 w-full  md:mb-0 lg:mx-0 md:flex md:justify-center md:items-center ">
      <div className="wrapper max-w-7xl lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
        >
          <>
            {" "}
            <h3 className="font-bold font-albra uppercase leading-3 tracking-headline  text-xs">
              La fundación de la industria IMMEX
            </h3>
            <p className=" text-[30px] leading-9 font-bold mt-10 lg:w-7/12">
              Somos una organización con 20 años apoyando a la comunidad en el
              ámbito social y ecológico.
            </p>
          </>
        </motion.div>

        <motion.div
          className="circlescontainer flex flex-col md:flex-row items-center md:justify-center md:mt-20 md:mb-32 md:space-x-8 lg:space-x-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: false }}
        >
          {/* circle1 */}
          {numbersBlocks?.map((numberBlock, index) => {
            return index === 2 ? (
              <Circle
                key={index}
                endNumber={numberBlock.number}
                description={numberBlock.title}
                extraText="k"
                className={circleClasses[index]}
              />
            ) : (
              <Circle
                key={index}
                endNumber={numberBlock.number}
                description={numberBlock.title}
                className={circleClasses[index]}
              />
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default TimeLineSection;
