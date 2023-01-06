/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HomeBanner = ({ swiperBlocks, ...rest }) => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <div
      className={`supercontainer relative min-h-screen h-screen w-screen `}
      {...rest}
      id="homeBanner"
    >
      <Swiper
        speed={1000}
        navigation={true}
        pagination={{
          type: "fraction",
        }}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
      >
        {swiperBlocks.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              {" "}
              <div className="wrapper h-screen w-full hidden lg:flex justify-center items-center">
                {/* DEKSTOP SVG */}
                <div className="imagecontainermobile inset-0 absolute h-screen min-h-screen w-screen">
                  <img
                    src={item?.imageLink}
                    alt="backgroundsvg"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="max-w-7xl flex items-center justify-around w-full ">
                  <div className="wrapper text-white absolute bottom-1/4 -mb-24">
                    <div className="topcontainer flex justify-between">
                      <div className="wrapperleft w-1/2">
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 1.2 }}
                        >
                          <>
                            <h1 className="text-basetica font-bold text-5xl ">
                              {item?.title}
                            </h1>
                            <p className="font-albra hidden lg:block text-[21px]  mt-8">
                              {item?.subtitle}
                            </p>
                          </>
                        </motion.div>
                      </div>
                      <div className="wrapperright">
                        {/* <div className="socialcontainer">
                          <div className="buttonscontainer flex flex-col space-y-2 mt-24">
                            <a
                              href="https://www.youtube.com/channel/UCKVfTXZ_zCi-aqfMc6rCB9Q"
                              className="socialbutton font-[15px] mr-3"
                            >
                              <div className="socialcontainer hover:bg-index-aqua border border-white w-[50px] h-[50px] flex justify-center align-center rounded-full">
                                <p className="flex justify-center items-center">
                                  YT
                                </p>
                              </div>
                            </a>
                            <a
                              href="https://twitter.com/fundacion_index"
                              className="socialbutton font-[15px] mr-3"
                            >
                              <div className="socialcontainer hover:bg-index-aqua border border-white w-[50px] h-[50px] flex justify-center align-center rounded-full">
                                <p className="flex justify-center items-center">
                                  TW
                                </p>
                              </div>
                            </a>
                            <a
                              href="https://www.facebook.com/FundacionIndexChihuahua"
                              className="socialbutton font-[15px] mr-3"
                            >
                              <div className="socialcontainer hover:bg-index-aqua border border-white w-[50px] h-[50px] flex justify-center align-center rounded-full">
                                <p className="flex justify-center items-center">
                                  FB
                                </p>
                              </div>
                            </a>
                          </div>
                        </div> */}
                      </div>
                    </div>
                    <motion.div
                      className="circlecontainer mt-12 border-b border-white mr-8"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.7 }}
                    >
                      <Link href={item?.link}>
                        <a>
                          <CircleClicked />
                        </a>
                      </Link>
                    </motion.div>
                    <p className="font-albra text-right mr-8 mt-4">
                      Fundación Index © {currentYear}
                    </p>
                  </div>
                </div>
              </div>
              {/* IMAGE MOBILE */}
              <div className="imagecontainermobile inset-0 absolute h-screen min-h-screen lg:hidden w-screen">
                <img
                  src={item?.imageLink}
                  alt="backgroundsvg"
                  className="h-full w-full object-cover"
                />
              </div>
              {/* MOBILE text */}
              <div className="textcontainermobile relative h-screen lg:hidden text-white px-8">
                {/* //MOBILE SVG */}

                <div className="wrapper absolute bottom-1/4 -mb-6">
                  <motion.h1
                    className="text-basetica font-bold text-5xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2 }}
                  >
                    {item?.title}
                  </motion.h1>

                  <motion.div
                    className="circlecontainer mt-8 border-b border-white mr-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Link href={item?.link}>
                      <a>
                        <CircleClicked />
                      </a>
                    </Link>
                  </motion.div>
                  <p className="font-albra mt-4 ">
                    Fundación Index © {currentYear}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

const CircleClicked = ({ ...rest }) => {
  return (
    <svg
      width="172"
      height="87"
      viewBox="0 0 172 87"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M171.915 86.5049C171.915 39.2779 133.629 0.993166 86.4021 0.993165C39.1749 0.993165 0.889588 39.2779 0.888672 86.5049L171.915 86.5049Z"
        fill="white"
      />
      <path
        d="M49.8557 58.0436V45.1736H54.1757C56.2397 45.1736 57.7877 45.7676 58.8197 46.9556C59.8637 48.1316 60.3857 49.6676 60.3857 51.5636C60.3857 53.5316 59.8457 55.1036 58.7657 56.2796C57.6857 57.4556 56.1557 58.0436 54.1757 58.0436H49.8557ZM52.1597 55.9556H54.4277C55.6277 55.9556 56.5277 55.5716 57.1277 54.8036C57.7277 54.0356 58.0277 52.9736 58.0277 51.6176C58.0277 50.2496 57.7157 49.1816 57.0917 48.4136C56.4797 47.6456 55.5857 47.2616 54.4097 47.2616H52.1597V55.9556ZM65.8525 58.3316C64.6285 58.3316 63.5965 57.9416 62.7565 57.1616C61.9165 56.3816 61.4965 55.2416 61.4965 53.7416C61.4965 52.3016 61.9045 51.1676 62.7205 50.3396C63.5365 49.4996 64.5565 49.0796 65.7805 49.0796C67.1245 49.0796 68.1385 49.4576 68.8225 50.2136C69.5185 50.9576 69.8665 52.0316 69.8665 53.4356V54.2816H63.7465C63.7825 54.9176 63.9985 55.4516 64.3945 55.8836C64.8025 56.3036 65.3185 56.5136 65.9425 56.5136C66.9385 56.5136 67.6105 56.0336 67.9585 55.0736L69.7045 55.9376C69.4045 56.6576 68.9245 57.2396 68.2645 57.6836C67.6045 58.1156 66.8005 58.3316 65.8525 58.3316ZM63.8185 52.7876H67.5985C67.5265 51.4076 66.9145 50.7176 65.7625 50.7176C65.1865 50.7176 64.7305 50.9036 64.3945 51.2756C64.0705 51.6476 63.8785 52.1516 63.8185 52.7876ZM74.803 58.3316C73.735 58.3316 72.859 58.1096 72.175 57.6656C71.491 57.2096 71.065 56.5796 70.897 55.7756L72.949 55.1816C73.189 56.1896 73.837 56.6936 74.893 56.6936C75.817 56.6936 76.279 56.3636 76.279 55.7036C76.279 55.3796 76.129 55.1276 75.829 54.9476C75.541 54.7556 74.989 54.5756 74.173 54.4076C72.181 53.9996 71.185 53.1176 71.185 51.7616C71.185 50.9336 71.491 50.2796 72.103 49.7996C72.727 49.3196 73.573 49.0796 74.641 49.0796C75.577 49.0796 76.375 49.2776 77.035 49.6736C77.707 50.0576 78.181 50.6036 78.457 51.3116L76.477 52.0136C76.333 51.6296 76.093 51.3176 75.757 51.0776C75.433 50.8256 75.043 50.6996 74.587 50.6996C74.203 50.6996 73.897 50.7836 73.669 50.9516C73.453 51.1076 73.345 51.3236 73.345 51.5996C73.345 51.8876 73.489 52.1276 73.777 52.3196C74.065 52.4996 74.623 52.6736 75.451 52.8416C76.495 53.0576 77.257 53.3816 77.737 53.8136C78.217 54.2336 78.457 54.7976 78.457 55.5056C78.457 56.3816 78.127 57.0716 77.467 57.5756C76.819 58.0796 75.931 58.3316 74.803 58.3316ZM83.9935 58.3316C82.7215 58.3316 81.6655 57.9356 80.8255 57.1436C79.9975 56.3396 79.5835 55.1996 79.5835 53.7236C79.5835 52.2236 80.0155 51.0776 80.8795 50.2856C81.7435 49.4816 82.8055 49.0796 84.0655 49.0796C85.0495 49.0796 85.8715 49.3256 86.5315 49.8176C87.2035 50.3096 87.6655 50.9996 87.9175 51.8876L85.8655 52.5536C85.6015 51.4616 84.9895 50.9156 84.0295 50.9156C83.4175 50.9156 82.9015 51.1496 82.4815 51.6176C82.0615 52.0736 81.8515 52.7756 81.8515 53.7236C81.8515 54.6836 82.0675 55.3856 82.4995 55.8296C82.9315 56.2616 83.4535 56.4776 84.0655 56.4776C84.5215 56.4776 84.9175 56.3396 85.2535 56.0636C85.5895 55.7876 85.8055 55.3736 85.9015 54.8216L88.0615 55.0016C87.8935 56.0336 87.4555 56.8496 86.7475 57.4496C86.0515 58.0376 85.1335 58.3316 83.9935 58.3316ZM92.5292 58.2956C91.6892 58.2956 90.9812 58.0556 90.4052 57.5756C89.8292 57.0956 89.5412 56.3696 89.5412 55.3976V49.3856H91.7372V54.9296C91.7372 55.3976 91.8572 55.7696 92.0972 56.0456C92.3492 56.3216 92.7032 56.4596 93.1592 56.4596C93.7232 56.4596 94.1852 56.2556 94.5452 55.8476C94.9172 55.4276 95.1032 54.8156 95.1032 54.0116V49.3856H97.3172V58.0436H95.1032V56.8556H95.0852C94.5572 57.8156 93.7052 58.2956 92.5292 58.2956ZM104.07 58.2956C103.47 58.2956 102.948 58.1576 102.504 57.8816C102.06 57.6056 101.718 57.2576 101.478 56.8376H101.46V58.0436H99.264V45.1736H101.478V50.5736H101.496C101.76 50.1536 102.126 49.8056 102.594 49.5296C103.062 49.2536 103.584 49.1156 104.16 49.1156C105.132 49.1156 105.99 49.4996 106.734 50.2676C107.478 51.0356 107.85 52.1816 107.85 53.7056C107.85 54.5096 107.73 55.2236 107.49 55.8476C107.25 56.4716 106.932 56.9516 106.536 57.2876C106.152 57.6236 105.75 57.8756 105.33 58.0436C104.91 58.2116 104.49 58.2956 104.07 58.2956ZM103.548 56.4776C104.148 56.4776 104.64 56.2376 105.024 55.7576C105.42 55.2656 105.618 54.5876 105.618 53.7236C105.618 52.7756 105.426 52.0736 105.042 51.6176C104.67 51.1616 104.166 50.9336 103.53 50.9336C102.882 50.9336 102.366 51.1676 101.982 51.6356C101.61 52.1036 101.424 52.7876 101.424 53.6876C101.424 54.5396 101.622 55.2176 102.018 55.7216C102.414 56.2256 102.924 56.4776 103.548 56.4776ZM109.336 58.0436V49.3856H111.55V50.6456C112.066 49.6256 112.732 49.1156 113.548 49.1156C114.052 49.1156 114.466 49.2116 114.79 49.4036L114.412 51.4376C114.088 51.2816 113.722 51.2036 113.314 51.2036C112.138 51.2036 111.55 52.1456 111.55 54.0296V58.0436H109.336ZM119.518 58.3316C118.294 58.3316 117.262 57.9416 116.422 57.1616C115.582 56.3816 115.162 55.2416 115.162 53.7416C115.162 52.3016 115.57 51.1676 116.386 50.3396C117.202 49.4996 118.222 49.0796 119.446 49.0796C120.79 49.0796 121.804 49.4576 122.488 50.2136C123.184 50.9576 123.532 52.0316 123.532 53.4356V54.2816H117.412C117.448 54.9176 117.664 55.4516 118.06 55.8836C118.468 56.3036 118.984 56.5136 119.608 56.5136C120.604 56.5136 121.276 56.0336 121.624 55.0736L123.37 55.9376C123.07 56.6576 122.59 57.2396 121.93 57.6836C121.27 58.1156 120.466 58.3316 119.518 58.3316ZM117.484 52.7876H121.264C121.192 51.4076 120.58 50.7176 119.428 50.7176C118.852 50.7176 118.396 50.9036 118.06 51.2756C117.736 51.6476 117.544 52.1516 117.484 52.7876Z"
        fill="black"
      />
    </svg>
  );
};

export default HomeBanner;
