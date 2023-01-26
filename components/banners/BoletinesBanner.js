/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import UpIcon from "@/components/icons/UpIcon";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getPostsFromCategories } from "../utils/Queries";

const NosotrosBanner = ({ ...rest }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetchTitleAndDescription().then((items) => {
      const section = items[4];
      setTitle(section.title);
      setDescription(section.description);
    });
  }, []);
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
          {title}
        </motion.h1>
        <motion.p
          className="font-albra text-[21px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6 }}
        >
          {description}
        </motion.p>
      </div>

      {/* //MOBILE SVG */}
      <div className="imagecontainermobile lg:hidden w-screen">
        <img
          src="/images/nosotros/bannermobile.svg"
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
              {title}
            </motion.h1>
            <motion.p
              className="font-basetica mt-24 text-[21px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.7 }}
            >
              {description}
            </motion.p>
          </div>
          {/* DEKSTOP SVG */}
          <div className="imagecontainer mt-[125px] h-full w-1/2 z-10 ">
            <img
              src="/images/nosotros/bannerdesktop.svg"
              alt="backgroundsvg"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

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

const fetchTitleAndDescription = async () => {
  const data = await getPostsFromCategories("segments");

  if (!data) {
    return {
      props: {},
    };
  }

  const segmentsRawInfo = data.data.categories.nodes[0].posts.edges
    .find((edge) => {
      return edge.node.title === "customBanners/pages";
    })
    .node.content.split("<separator>");

  const homeBanners = [];

  segmentsRawInfo.map((direction) => {
    homeBanners.push({
      title: direction.split("<h1>")[1].split("</h1>")[0],
      description: direction.split("<p>")[1].split("</p>")[0],
    });
  });
  return homeBanners;
};

export default NosotrosBanner;
