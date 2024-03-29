/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Link from "next/link";
import TopBar from "@/components/layouts/MainLayout/TopBar";
import Button from "@/components/common/Button";
import MenuIcon from "@/components/icons/MenuIcon";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// MOBILE NAV IS A SEPARTE ROUTE LOCATED ON /nav
const Header = ({ type = "aqua", navData }) => {
  const router = useRouter();
  const [headerType, setHeaderType] = useState("aqua");
  const [globalOpen, setGlobalOpen] = useState(false);

  const setHeaderTypeFromRouter = () => {
    if (globalOpen === true) {
      setHeaderType("white");
    } else {
      if (router.pathname === "/") {
        setHeaderType("transparent");
      } else if (router.pathname.includes("/nosotros")) {
        setHeaderType("aqua");
      } else if (router.pathname.includes("/programas")) {
        setHeaderType("aqua");
      } else if (router.pathname.includes("/donativos")) {
        setHeaderType("purple");
      } else if (router.pathname.includes("/recicladores")) {
        setHeaderType("yellow");
      } else if (router.pathname.includes("/donantes")) {
        setHeaderType("aqua");
      } else if (router.pathname.includes("/contactanos")) {
        setHeaderType("blue");
      }
    }
  };

  const changeGlobalOpen = (value) => {
    setGlobalOpen(value);
  };

  useEffect(() => {
    setHeaderTypeFromRouter();
  }, [router.pathname]);

  useEffect(() => {
    setHeaderTypeFromRouter();
  }, [globalOpen]);

  return (
    <>
      <Popover
        className={classNames("relative  font-albra  ring-0 focus:ring-0")}
      >
        <div
          className="absolute inset-0 border-b border-index-gray z-30 pointer-events-none"
          aria-hidden="true"
        />
        <div
          className={classNames(
            headerType === "aqua" && "bg-index-aqua text-white",
            headerType === "purple" && "bg-index-purple text-white",
            headerType === "yellow" && "bg-index-yellow text-white",
            headerType === "blue" && "bg-index-blue-default text-white",
            headerType === "transparent" && "bg-opacity-0 text-white",
            headerType === "white" && "bg-white text-black",
            "relative z-20"
          )}
        >
          <TopBar />
          <div
            className={classNames(
              headerType === "aqua" && "bg-index-aqua text-white",
              headerType === "purple" && "bg-index-purple text-white",
              headerType === "yellow" && "bg-index-yellow text-white",
              headerType === "blue" && "bg-index-blue-default text-white",
              headerType === "transparent" && "bg-opacity-0 text-white",
              headerType === "white" && "bg-white text-black",
              "max-w-7xl mx-auto flex justify-between items-center px-7 md:px-4  py-5  sm:py-4  md:justify-start md:space-x-10"
            )}
          >
            <div className="">
              <a href="/" className="flex md:hidden lg:flex   ">
                <img
                  id="imageHeader"
                  className="h-10 w-auto max-w-xs sm:h-14"
                  src="/images/headerlogo.png"
                  alt="logo"
                />
              </a>
            </div>
            {/* //MENU FOR MOBILE */}
            <div className="-mr-2 -my-2 md:hidden">
              <Link
                href="/nav"
                className="rounded-md p-2 inline-flex items-center justify-center text-white hover:text-white  focus:outline-none focus:ring-0 focus:ring-inset focus:ring-indigo-500"
              >
                <a>
                  {" "}
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </a>
              </Link>
            </div>
            {/* DESKTOP NAV */}
            <div
              id="header"
              className="hidden md:flex-1 md:flex md:items-center md:justify-center lg:justify-end"
            >
              <Popover.Group
                as="nav"
                className="flex items-center md:space-x-4 lg:space-x-10"
              >
                {/* NOSOTROS */}
                <Popover>
                  {({ open }) => {
                    return (
                      <>
                        <div
                          className="buttonwrapper"
                          onClick={() => {
                            changeGlobalOpen(!open);
                          }}
                        >
                          <Popover.Button
                            className={classNames(
                              globalOpen
                                ? "text-black hover:text-black"
                                : "text-white hover:text.white",
                              "group inline-flex items-center text-base font-medium focus:outline-none focus:ring-0 text-[15px] leading-6"
                            )}
                          >
                            <span>Nosotros</span>
                            <ChevronDownIcon
                              className={classNames(
                                open
                                  ? "text-index-aqua hover:text-index-aqua hover:underline rotate-180"
                                  : "text-white hover:text-white",
                                globalOpen && !open && "text-index-aqua",
                                "ml-2 h-5 w-5"
                              )}
                              aria-hidden="true"
                            />
                          </Popover.Button>
                        </div>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 -translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 -translate-y-1"
                        >
                          <Popover.Panel className="hidden  text-black  md:block absolute z-10 top-full inset-x-0 transform shadow-lg bg-white">
                            <div className="max-w-7xl  mx-auto  px-4 py-6  sm:px-6 sm:py-8  lg:px-8 lg:py-12">
                              <div className="content  flex w-full">
                                <div className="wrapper flex flex-col w-4/12">
                                  <h2 className="md:text-[36px] md:leading-[36px] text-left font-basetica font-bold ">
                                    Acerca de <br /> nosotros
                                  </h2>
                                  <p className=" mt-7 text-[18px] leading-6 w-3/4 font-albra font-normal">
                                    Conoce la fundación y las personas detrás de
                                    ella.
                                  </p>
                                </div>
                                <div className="wrappertwo w-4/12 border-l-2  pl-8">
                                  <h2 className="uppercase font-albra tracking-headline text-xs leading-3 text-black font-bold">
                                    A detalle
                                  </h2>
                                  <ul className="text-[21px] leading-6 font-normal font-albra">
                                    {navData?.nosotrosSection?.dropdown.map(
                                      (item, index) => {
                                        if (index < 4)
                                          return (
                                            <li
                                              key={index}
                                              className="text-black hover:text-index-aqua hover:underline pt-4"
                                            >
                                              <Link href={item.link}>
                                                <a>{item.text}</a>
                                              </Link>
                                            </li>
                                          );
                                      }
                                    )}
                                  </ul>
                                </div>
                                {navData?.nosotrosSection?.dropdown.length >=
                                4 ? (
                                  <>
                                    {" "}
                                    <div className="wrappertwo border-l-2 pr-8 pl-8">
                                      <h2 className="uppercase font-albra text-[12px] leading-3 text-black font-bold"></h2>
                                      <ul className="text-[21px] leading-6 font-normal font-albra">
                                        {navData?.nosotrosSection?.dropdown.map(
                                          (item, index) => {
                                            if (index > 4)
                                              return (
                                                <li
                                                  key={index}
                                                  className="text-black hover:text-index-aqua hover:underline pt-4"
                                                >
                                                  <Link href={item.link}>
                                                    <a>{item.text}</a>
                                                  </Link>
                                                </li>
                                              );
                                          }
                                        )}
                                      </ul>
                                    </div>
                                  </>
                                ) : (
                                  <></>
                                )}
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    );
                  }}
                </Popover>
                {/* PROGRAMAS */}
                <Popover>
                  {({ open }) => {
                    return (
                      <>
                        <div
                          className="buttonwrapper"
                          onClick={() => {
                            changeGlobalOpen(!open);
                          }}
                        >
                          <Popover.Button
                            className={classNames(
                              globalOpen
                                ? "text-black hover:text-black"
                                : "text-white hover:text.white",
                              "group inline-flex items-center text-base font-medium focus:outline-none focus:ring-0 text-[15px] leading-6"
                            )}
                          >
                            <span>Programas</span>
                            <ChevronDownIcon
                              className={classNames(
                                open
                                  ? "text-index-aqua hover:text-index-aqua hover:underline rotate-180"
                                  : "text-white hover:text-white",
                                globalOpen && !open && "text-index-aqua",

                                "ml-2 h-5 w-5"
                              )}
                              aria-hidden="true"
                            />
                          </Popover.Button>
                        </div>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 -translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 -translate-y-1"
                        >
                          <Popover.Panel className="hidden  text-black  md:block absolute z-10 top-full inset-x-0 transform shadow-lg bg-white">
                            <div className="max-w-7xl  mx-auto  px-4 py-6  sm:px-6 sm:py-8  lg:px-8 lg:py-12">
                              <div className="content flex w-full">
                                <div className="wrapper flex flex-col w-4/12 ">
                                  <h2 className="md:text-[36px] md:leading-[36px] text-left font-basetica font-bold ">
                                    Nuestros <br /> programas
                                  </h2>
                                  <p className=" mt-7 text-[18px] leading-6 w-3/4 font-albra font-normal">
                                    Conoce las actividades que realizamos y a
                                    sus beneficiarios.
                                  </p>
                                </div>
                                <div className="wrappertwo w-4/12 border-l-2  pl-8">
                                  <h2 className="uppercase font-albra tracking-headline text-xs leading-3 text-black font-bold">
                                    A detalle
                                  </h2>
                                  <ul className="text-[21px] leading-6 font-normal font-albra">
                                    {navData?.programasSection?.dropdown.map(
                                      (item, index) => {
                                        if (index < 4)
                                          return (
                                            <li
                                              key={index}
                                              className="text-black hover:text-index-aqua hover:underline pt-4"
                                            >
                                              <Link href={item.link}>
                                                <a>{item.text}</a>
                                              </Link>
                                            </li>
                                          );
                                      }
                                    )}
                                  </ul>
                                </div>
                                {navData?.programasSection?.dropdown.length >=
                                4 ? (
                                  <div className="wrappertwo border-l-2 pr-8 pl-8">
                                    <h2 className="uppercase font-albra text-[12px] leading-3 text-black font-bold"></h2>
                                    <ul className="text-[21px] leading-6 font-normal font-albra">
                                      {navData?.programasSection?.dropdown.map(
                                        (item, index) => {
                                          if (index >= 4)
                                            return (
                                              <li
                                                key={index}
                                                className="text-black hover:text-index-aqua hover:underline pt-4"
                                              >
                                                <Link href={item.link}>
                                                  <a>{item.text}</a>
                                                </Link>
                                              </li>
                                            );
                                        }
                                      )}
                                    </ul>
                                  </div>
                                ) : (
                                  <></>
                                )}
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    );
                  }}
                </Popover>
                {/* //DONATIVOS */}
                <Popover>
                  {({ open }) => {
                    return (
                      <>
                        <div
                          className="wrapperbutton"
                          onClick={() => {
                            changeGlobalOpen(!open);
                          }}
                        >
                          <Popover.Button
                            className={classNames(
                              globalOpen
                                ? "text-black hover:text-black"
                                : "text-white hover:text.white",

                              "group inline-flex items-center text-base font-medium focus:outline-none focus:ring-0 text-[15px] leading-6"
                            )}
                          >
                            <span>Donativos</span>
                            <ChevronDownIcon
                              className={classNames(
                                open
                                  ? "text-index-aqua hover:text-index-aqua hover:underline rotate-180"
                                  : "text-white hover:text-white",
                                globalOpen && !open && "text-index-aqua",

                                "ml-2 h-5 w-5"
                              )}
                              aria-hidden="true"
                            />
                          </Popover.Button>
                        </div>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 -translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 -translate-y-1"
                        >
                          <Popover.Panel className="hidden  text-black  md:block absolute z-10 top-full inset-x-0 transform shadow-lg bg-white">
                            <div className="max-w-7xl  mx-auto  px-4 py-6  sm:px-6 sm:py-8  lg:px-8 lg:py-12">
                              <div className="content  flex w-full">
                                <div className="wrapper flex flex-col w-4/12">
                                  <h2 className="md:text-[36px] md:leading-[36px] text-left font-basetica font-bold ">
                                    Donativos
                                  </h2>
                                  <p className=" mt-7 text-[18px] leading-6 w-3/4 font-albra font-normal">
                                    Entérate como Fundación Index puede apoyar
                                    tu proyecto.
                                  </p>
                                </div>

                                <div className="wrappertwo w-4/12 border-l-2  pl-8">
                                  <h2 className="uppercase font-albra tracking-headline text-xs leading-3 text-black font-bold">
                                    A detalle
                                  </h2>
                                  <ul className="text-[21px] leading-6 font-normal font-albra">
                                    {navData?.donativosSection?.dropdown.map(
                                      (item, index) => {
                                        if (index < 4)
                                          return (
                                            <li
                                              key={index}
                                              className="text-black hover:text-index-aqua hover:underline pt-4"
                                            >
                                              <Link href={item.link}>
                                                <a>{item.text}</a>
                                              </Link>
                                            </li>
                                          );
                                      }
                                    )}
                                  </ul>
                                </div>
                                {navData?.donativosSection?.dropdown.length >=
                                4 ? (
                                  <>
                                    {" "}
                                    <div className="wrappertwo border-l-2 pr-8 pl-8">
                                      <h2 className="uppercase font-albra text-[12px] leading-3 text-black font-bold"></h2>
                                      <ul className="text-[21px] leading-6 font-normal font-albra">
                                        {navData?.donativosSection?.dropdown.map(
                                          (item, index) => {
                                            if (index > 4)
                                              return (
                                                <li
                                                  key={index}
                                                  className="text-black hover:text-index-aqua hover:underline pt-4"
                                                >
                                                  <Link href={item.link}>
                                                    <a>{item.text}</a>
                                                  </Link>
                                                </li>
                                              );
                                          }
                                        )}
                                      </ul>
                                    </div>
                                  </>
                                ) : (
                                  <></>
                                )}
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    );
                  }}
                </Popover>
                {/* RECICLADORES */}
                <Popover>
                  {({ open }) => {
                    return (
                      <>
                        <div
                          className="buttonwrapper"
                          onClick={() => {
                            changeGlobalOpen(!open);
                          }}
                        >
                          <Popover.Button
                            className={classNames(
                              globalOpen
                                ? "text-black hover:text-black"
                                : "text-white hover:text.white",

                              "group inline-flex items-center text-base font-medium focus:outline-none focus:ring-0 text-[15px] leading-6"
                            )}
                          >
                            <span>Recicladores</span>
                            <ChevronDownIcon
                              className={classNames(
                                open
                                  ? "text-index-aqua hover:text-index-aqua hover:underline rotate-180"
                                  : "text-white hover:text-white",
                                globalOpen && !open && "text-index-aqua",

                                "ml-2 h-5 w-5"
                              )}
                              aria-hidden="true"
                            />
                          </Popover.Button>
                        </div>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 -translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 -translate-y-1"
                        >
                          <Popover.Panel className="hidden  text-black  md:block absolute z-10 top-full inset-x-0 transform shadow-lg bg-white">
                            <div className="max-w-7xl  mx-auto  px-4 py-6  sm:px-6 sm:py-8  lg:px-8 lg:py-12">
                              <div className="content  flex w-full">
                                <div className="wrapper flex flex-col w-4/12">
                                  <h2 className="md:text-[36px] md:leading-[36px] text-left font-basetica font-bold ">
                                    Recicladores
                                  </h2>
                                  <p className=" mt-7 text-[18px] leading-6 w-3/4 font-albra font-normal">
                                    Sé parte de nuestra cuadrilla de
                                    recicladores.
                                  </p>
                                </div>
                                <div className="wrappertwo w-4/12 border-l-2  pl-8">
                                  <h2 className="uppercase font-albra tracking-headline text-xs leading-3 text-black font-bold">
                                    A detalle
                                  </h2>
                                  <ul className="text-[21px] leading-6 font-normal font-albra">
                                    {navData?.recicladoresSection?.dropdown.map(
                                      (item, index) => {
                                        if (index < 4)
                                          return (
                                            <li
                                              key={index}
                                              className="text-black hover:text-index-aqua hover:underline pt-4"
                                            >
                                              <Link href={item.link}>
                                                <a>{item.text}</a>
                                              </Link>
                                            </li>
                                          );
                                      }
                                    )}
                                  </ul>
                                </div>
                                {navData?.recicladoresSection?.dropdown
                                  .length >= 4 ? (
                                  <>
                                    {" "}
                                    <div className="wrappertwo border-l-2 pr-8 pl-8">
                                      <h2 className="uppercase font-albra text-[12px] leading-3 text-black font-bold"></h2>
                                      <ul className="text-[21px] leading-6 font-normal font-albra">
                                        {navData?.recicladoresSection?.dropdown.map(
                                          (item, index) => {
                                            if (index > 4)
                                              return (
                                                <li
                                                  key={index}
                                                  className="text-black hover:text-index-aqua hover:underline pt-4"
                                                >
                                                  <Link href={item.link}>
                                                    <a>{item.text}</a>
                                                  </Link>
                                                </li>
                                              );
                                          }
                                        )}
                                      </ul>
                                    </div>
                                  </>
                                ) : (
                                  <></>
                                )}
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    );
                  }}
                </Popover>
                {/* BOLETINES */}
                <Popover>
                  {({ open }) => {
                    return (
                      <>
                        <div
                          className="buttonwrapper"
                          onClick={() => {
                            changeGlobalOpen(!open);
                          }}
                        >
                          <Popover.Button
                            className={classNames(
                              globalOpen
                                ? "text-black hover:text-black"
                                : "text-white hover:text.white",

                              "group inline-flex items-center text-base font-medium focus:outline-none focus:ring-0 text-[15px] leading-6"
                            )}
                          >
                            <span>Prensa</span>
                            <ChevronDownIcon
                              className={classNames(
                                open
                                  ? "text-index-aqua hover:text-index-aqua hover:underline rotate-180"
                                  : "text-white hover:text-white",
                                globalOpen && !open && "text-index-aqua",

                                "ml-2 h-5 w-5"
                              )}
                              aria-hidden="true"
                            />
                          </Popover.Button>
                        </div>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 -translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 -translate-y-1"
                        >
                          <Popover.Panel className="hidden  text-black  md:block absolute z-10 top-full inset-x-0 transform shadow-lg bg-white">
                            <div className="max-w-7xl  mx-auto  px-4 py-6  sm:px-6 sm:py-8  lg:px-8 lg:py-12">
                              <div className="content  flex w-full">
                                <div className="wrapper flex flex-col w-4/12">
                                  <h2 className="md:text-[36px] md:leading-[36px] text-left font-basetica font-bold ">
                                    Prensa
                                  </h2>
                                  <p className=" mt-7 text-[18px] leading-6 w-3/4 font-albra font-normal">
                                    Consulta nuestra información más reciente.
                                  </p>
                                </div>
                                <div className="wrappertwo w-4/12 border-l-2  pl-8">
                                  <h2 className="uppercase font-albra tracking-headline text-xs leading-3 text-black font-bold">
                                    A detalle
                                  </h2>
                                  <ul className="text-[21px] leading-6 font-normal font-albra">
                                    {navData?.boletinesSection?.dropdown.map(
                                      (item, index) => {
                                        if (index < 4)
                                          return (
                                            <li
                                              key={index}
                                              className="text-black hover:text-index-aqua hover:underline pt-4"
                                            >
                                              <Link href={item.link}>
                                                <a>{item.text}</a>
                                              </Link>
                                            </li>
                                          );
                                      }
                                    )}
                                  </ul>
                                </div>
                                {navData?.boletinesSection?.dropdown.length >=
                                4 ? (
                                  <>
                                    {" "}
                                    <div className="wrappertwo border-l-2 pr-8 pl-8">
                                      <h2 className="uppercase font-albra text-[12px] leading-3 text-black font-bold"></h2>
                                      <ul className="text-[21px] leading-6 font-normal font-albra">
                                        {navData?.boletinesSection?.dropdown.map(
                                          (item, index) => {
                                            if (index > 4)
                                              return (
                                                <li
                                                  key={index}
                                                  className="text-black hover:text-index-aqua hover:underline pt-4"
                                                >
                                                  <Link href={item.link}>
                                                    <a>{item.text}</a>
                                                  </Link>
                                                </li>
                                              );
                                          }
                                        )}
                                      </ul>
                                    </div>
                                  </>
                                ) : (
                                  <></>
                                )}
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    );
                  }}
                </Popover>
                {/* Eventos */}
                <Popover>
                  {({ open }) => {
                    return (
                      <>
                        <div
                          className="buttonwrapper"
                          onClick={() => {
                            changeGlobalOpen(!open);
                          }}
                        >
                          <Popover.Button
                            className={classNames(
                              globalOpen
                                ? "text-black hover:text-black"
                                : "text-white hover:text.white",

                              "group inline-flex items-center text-base font-medium focus:outline-none focus:ring-0 text-[15px] leading-6"
                            )}
                          >
                            <span>Eventos</span>
                            <ChevronDownIcon
                              className={classNames(
                                open
                                  ? "text-index-aqua hover:text-index-aqua hover:underline rotate-180"
                                  : "text-white hover:text-white",
                                globalOpen && !open && "text-index-aqua",

                                "ml-2 h-5 w-5"
                              )}
                              aria-hidden="true"
                            />
                          </Popover.Button>
                        </div>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 -translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 -translate-y-1"
                        >
                          <Popover.Panel className="hidden  text-black  md:block absolute z-10 top-full inset-x-0 transform shadow-lg bg-white">
                            <div className="max-w-7xl  mx-auto  px-4 py-6  sm:px-6 sm:py-8  lg:px-8 lg:py-12">
                              <div className="content  flex w-full">
                                <div className="wrapper flex flex-col w-4/12">
                                  <h2 className="md:text-[36px] md:leading-[36px] text-left font-basetica font-bold ">
                                    Eventos
                                  </h2>
                                  <p className=" mt-7 text-[18px] leading-6 w-3/4 font-albra font-normal">
                                    Conoce nuestros próximos eventos
                                  </p>
                                </div>
                                <div className="wrappertwo w-4/12 border-l-2  pl-8">
                                  <h2 className="uppercase font-albra tracking-headline text-xs leading-3 text-black font-bold">
                                    A detalle
                                  </h2>
                                  <ul className="text-[21px] leading-6 font-normal font-albra">
                                    {navData?.eventosSection?.dropdown.map(
                                      (item, index) => {
                                        if (index < 4)
                                          return (
                                            <li
                                              key={index}
                                              className="text-black hover:text-index-aqua hover:underline pt-4"
                                            >
                                              <Link href={item.link}>
                                                <a>{item.text}</a>
                                              </Link>
                                            </li>
                                          );
                                      }
                                    )}
                                  </ul>
                                </div>
                                {navData?.eventosSection?.dropdown.length >=
                                4 ? (
                                  <>
                                    {" "}
                                    <div className="wrappertwo border-l-2 pr-8 pl-8">
                                      <h2 className="uppercase font-albra text-[12px] leading-3 text-black font-bold"></h2>
                                      <ul className="text-[21px] leading-6 font-normal font-albra">
                                        {navData?.eventosSection?.dropdown.map(
                                          (item, index) => {
                                            if (index > 4)
                                              return (
                                                <li
                                                  key={index}
                                                  className="text-black hover:text-index-aqua hover:underline pt-4"
                                                >
                                                  <Link href={item.link}>
                                                    <a>{item.text}</a>
                                                  </Link>
                                                </li>
                                              );
                                          }
                                        )}
                                      </ul>
                                    </div>
                                  </>
                                ) : (
                                  <></>
                                )}
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    );
                  }}
                </Popover>
                {/* DONANTES */}
                <Link
                  href="/donantes/empresas"
                  className={classNames(
                    "text-white hover:text.white group inline-flex items-center text-base font-medium focus:outline-none focus:ring-0 text-[15px] leading-6"
                  )}
                >
                  <a id="headerLink">Donantes</a>
                </Link>
                {/* CONTACTO BUTTON */}
                <div id="headerCta" className="buttoncontainer hidden md:flex ">
                  <Button
                    appearance={
                      globalOpen
                        ? "outlineaqua"
                        : headerType === "transparent"
                        ? "aqua"
                        : "white"
                    }
                    label="Contacto"
                    localUrl="/contactanos"
                    className={classNames(
                      headerType !== "transparent" && "bg-index-aqua",
                      "py-2 px-14 text-[15px] leading-6 font-albra font-normal "
                    )}
                  />
                </div>{" "}
              </Popover.Group>
            </div>
          </div>
        </div>
      </Popover>
    </>
  );
};

export default Header;
