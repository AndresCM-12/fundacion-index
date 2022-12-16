/* eslint-disable @next/next/no-img-element */
// NAV PAGE USED FOR MOBILE ONLY
import MenuXIcon from "@/components/icons/MenuXIcon";
import Link from "next/link";
import { useRouter } from "next/router";
import { Disclosure } from "@headlessui/react";
import TriangleDownIcon from "@/components/icons/TriangleDownIcon";
import Seo from "@/components/common/Seo";
import {
  getPostsFromCategories,
  getCategories,
} from "@/components/utils/Queries";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// nav data for the nav component mobile
const navData = [
  {
    label: "Inicio",
    localUrl: "/",
    type: "link",
  },
  {
    label: "Nosotros",
    type: "dropdown",
    options: [
      {
        label: "Acerca de nosotros",
        localUrl: "/nosotros/acercade",
      },
      {
        label: "Historia",
        localUrl: "/nosotros/historia",
      },
      {
        label: "Consejo Directivo",
        localUrl: "/nosotros/consejo",
      },
      {
        label: "Transparencia",
        localUrl: "/nosotros/transparencia",
      },
    ],
  },
  {
    label: "Programas",
    type: "dropdown",
    options: [
      {
        label: "Jardin de Niños Index",
        localUrl: "/programas/jardindeninos",
      },
      {
        label: "Becas Técnicas",
        localUrl: "/programas/becas",
      },
      {
        label: "Ampliación de vivienda",
        localUrl: "/programas/ampliacionviviendas",
      },
      {
        label: "Audición y Lenguaje",
        localUrl: "/programas/audicionlenguaje",
      },
      {
        label: "Salud Bucal",
        localUrl: "/programas/saludbucal",
      },
      {
        label: "Atención e Hiperactividad",
        localUrl: "/programas/atencionhiperactividad",
      },
      {
        label: "Cáncer de Próstata",
        localUrl: "/programas/cancerprostata",
      },
      {
        label: "Salud Visual",
        localUrl: "/programas/saludvisual",
      },
      {
        label: "Apoyo a la comunidad",
        localUrl: "/programas/apoyocomunidad",
      },
    ],
  },
  {
    label: "Donativos",
    type: "dropdown",
    options: [
      {
        label: "Requisitos",
        localUrl: "/donativos/requisitos",
      },
      {
        label: "Procedimiento",
        localUrl: "/donativos/procedimiento",
      },
      {
        label: "Documentación",
        localUrl: "/donativos/documentacion",
      },
      {
        label: "Criterios de no elegibilidad",
        localUrl: "/donativos/criteriosnoelegibilidad",
      },
    ],
  },
  {
    label: "Recicladores",
    type: "dropdown",
    options: [
      {
        label: "Empresas recicladoras",
        localUrl: "/recicladores/empresas",
      },
      {
        label: "Requisitos",
        localUrl: "/recicladores/requisitos",
      },
      {
        label: "Documentación",
        localUrl: "/recicladores/documentacion",
      },
      {
        label: "F-30",
        localUrl: "/recicladores/documentacion#f30",
      },
    ],
  },
  {
    label: "Donantes",
    type: "link",
    localUrl: "/donantes/empresas",
  },
];

const Nav = ({ navData }) => {
  const router = useRouter();
  return (
    <>
      <Seo title="Navegación" />
      <div className="ultracontainer bg-index-blue-dark  flex justify-center max-w-screen w-screen h-screen min-h-screen">
        <div className="container max-w-7xl w-full">
          <div className="headercontainer fixed  w-full bg-index-blue-dark overflow-hidden z-50">
            <header className=" border-b py-4 flex justify-between items-center px-7  w-full">
              <div className="logocontainer">
                <Link href="/">
                  <a className="flex">
                    <img
                      className="h-8 w-auto max-w-xs sm:h-10"
                      src="/images/footerlogo.png"
                      alt="logo"
                    />
                  </a>
                </Link>
              </div>
              <MenuXIcon
                className="h-11 w-11 hover:cursor-pointer"
                onClick={() => {
                  router.back();
                }}
              />
            </header>
          </div>
          <div className="content bg-index-blue-dark mt-32 overflow-scroll">
            <ul className="links font-albra text-[30px] text-white  px-7 leading-9">
              {navData.map((item, index) => {
                if (item.link) {
                  return (
                    <li key={index} className="mt-4">
                      <Link href={item.link}>
                        <a className="flex items-center">
                          <span className="text-white">{item.title}</span>
                        </a>
                      </Link>
                    </li>
                  );
                }
                if (item.dropdown) {
                  return (
                    <li className="flex items-center w-full mt-4" key={index}>
                      <Disclosure>
                        {({ open }) => (
                          <div
                            className={classNames(
                              open ? "text-index-aqua" : "text-white"
                            )}
                          >
                            <Disclosure.Button>
                              <div className="flex items-center w-full">
                                <span className="mr-2">{item.title}</span>
                                <TriangleDownIcon
                                  className={`${
                                    open ? "transform rotate-180" : ""
                                  }`}
                                />
                              </div>
                            </Disclosure.Button>

                            <Disclosure.Panel>
                              <ul className="text-white text-[21px] font-albra leading-7 mt-4 mb-10">
                                {item.dropdown.map((option, index) => {
                                  return (
                                    <li key={index} className="mt-3">
                                      <Link href={option.link} key={index}>
                                        <a className="focus:text-index-aqua focus:underline">
                                          {option.text}
                                        </a>
                                      </Link>
                                    </li>
                                  );
                                })}
                              </ul>
                            </Disclosure.Panel>
                          </div>
                        )}
                      </Disclosure>
                    </li>
                  );
                } else {
                  return null;
                }
              })}
            </ul>
          </div>
          <footer className=" fixed w-screen bottom-0  bg-index-blue-dark">
            <p className=" px-7 mt-8 text-base text-white md:mt-0 md:order-1 font-albra pb-6">
              Fundación Index &copy; 2022
            </p>
          </footer>
        </div>
      </div>
    </>
  );
};

const fetchTitles = async (category) => {
  let data = await getPostsFromCategories(category);
  const posts = data.data.categories.nodes[0].posts.edges;
  let categoryTitle = data.data.categories.edges[0].node.name;
  const navData = posts.map((post) => {
    if (post.node.title === "Requisitos" && categoryTitle === "recicladores") {
      return {
        text: post.node.title,
        link: `/${categoryTitle}/Empresas%20recicladoras#requisitos`,
      };
    }
    if (post.node.title === "F-30" && categoryTitle === "recicladores") {
      return {
        text: post.node.title,
        link: `/${categoryTitle}/Documentación#f30`,
      };
    }
    return {
      text: post.node.title,
      link: `/${categoryTitle}/${post.node.title}`,
    };
  });
  return navData;
};

async function getSections() {
  let response = await getCategories();

  let navData = [];
  let nosotrosSection;
  let programasSection;
  let donativosSection;
  let recicladoresSection;
  let props;

  await Promise.all(
    response.data.categories.edges.map(async (category) => {
      let nav = await fetchTitles(category.node.name);
      navData.push({ title: category.node.name, dropdown: nav });

      nosotrosSection = navData.find((item) => {
        return item.title === "nosotros";
      });
      programasSection = navData.find((item) => {
        return item.title === "programas";
      });
      donativosSection = navData.find((item) => {
        return item.title === "donativos";
      });
      recicladoresSection = navData.find((item) => {
        return item.title === "recicladores";
      });
      return await {
        nosotrosSection,
        programasSection,
        donativosSection,
        recicladoresSection,
      };
    })
  );

  props = [
    {
      title: "Inicio",
      link: "/",
    },
    nosotrosSection,
    programasSection,
    donativosSection,
    recicladoresSection,
    {
      title: "Donantes",
      link: "/donantes/empresas",
    },
  ];

  return await props;
}

export async function getServerSideProps() {
  let sections = await getSections();
  if (!sections) {
    return {
      props: {
        navData: [],
      },
    };
  }
  sections.map((item) => {
    return (item.title =
      item.title.charAt(0).toUpperCase() + item.title.slice(1));
  });
  return {
    props: {
      navData: sections,
    },
  };
}

export default Nav;
