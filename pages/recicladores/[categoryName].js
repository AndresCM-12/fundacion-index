/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import MainLayout from "@/components/layouts/MainLayout";
import ImageSection from "@/components/sections/ImageSection";
import RecicladoresLayout from "@/components/sections/recicladores/RecicladoresLayout";
import Numero from "@/components/icons/Numero";
import Image from "next/image";
import RecicladoresBanner from "@/components/banners/RecicladoresBanner";
import Button from "@/components/common/Button";
import { useEffect } from "react";
import {
  getCategories,
  getPostsFromCategories,
} from "@/components/utils/Queries";

const EmpresasPage = ({ post, navData, mainLayoutNavData, postIndex }) => {
  const MiniCircle = ({ className }) => {
    return (
      <div className={`wrapper w-5 h-5 ${className}`}>
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="9" cy="9" r="9" fill="#F3C44C" />
        </svg>
      </div>
    );
  };

  let divWithFetchedContent;

  useEffect(() => {
    divWithFetchedContent = document.createElement("div");
    divWithFetchedContent.innerHTML = post.content;
    document.querySelector("#DynamicWrapper").innerHTML = "";
    document
      .querySelector("#DynamicWrapper")
      .appendChild(divWithFetchedContent);
  }, [post]);

  return (
    <MainLayout navData={mainLayoutNavData} title="Empresas recicladoras">
      <RecicladoresBanner className="bg-index-yellow" />
      <RecicladoresLayout navData={navData}>
        {/* //Children Content here... */}
        <div className="wrapper">
          <h1 className=" mb-20 font-basetica text-[42px] leading-10 lg:text-5xl  font-bold">
            {post?.title}
          </h1>
          <Numero type={"" + postIndex} color="yellow" />
          <div id="DynamicWrapper"></div>
        </div>
      </RecicladoresLayout>{" "}
      <div className="dummyspace py-8 bg-index-gray"></div>{" "}
      {/* static layout */}
      {post?.title == "Empresas recicladoras" ? (
        <>
          <div className="sectioncontainer w-full  flex  justify-center bg-white pb-16">
            <div className="wrapper max-w-7xl flex flex-col lg:flex-row justify-center w-full mt-20">
              <div className="leftsection block max-w-xs pl-7 mr-10 ">
                <div className="navbarcontainer pb-16 lg:pb-0">
                  <p className="font-basetica font-bold text-5xl leading-10">
                    Requisitos para prestar servicio como reciclador
                  </p>
                </div>
              </div>
              <div
                id="requisitos"
                className="rightsection lg:mx-6 lg:ml-0 pl-7 border-l-2 border-index-border w-full lg:w-8/12"
              >
                <div className="wrapper flex flex-col lg:flex-row justify-start items-start">
                  <div className="sectionone pr-4 lg:pr-0">
                    <div className="item mb-16 mr-24 flex flex-col lg:flex-row justify-start items-start  lg:items-start font-albra text-lg max-w-xs w-full">
                      <div className="imagecontainer w-28 h-28 mr-8 mb-4 lg:mb-0">
                        <Image
                          src="/images/recicladores/requisitoone.png"
                          width={113}
                          height={113}
                          layout="fixed"
                          className=""
                        />
                      </div>
                      <p className="font-albra text-lg">
                        Ser una empresa legalmente constituida (Razón Física o
                        Moral)
                      </p>
                    </div>
                    <div className="item mb-16 mr-24 flex flex-col lg:flex-row  justify-start items-start lg:items-start font-albra text-lg max-w-xs w-full">
                      <div className="imagecontainer w-28 h-28 mr-8 mb-4 lg:mb-0">
                        <Image
                          src="/images/recicladores/requisitotwo.png"
                          width={113}
                          height={113}
                          layout="fixed"
                          className=""
                        />
                      </div>
                      <p className="font-albra text-lg">
                        Ser una empresa establecida y estar operando en la
                        industria del reciclado.
                      </p>
                    </div>
                    <div className="item mb-16 lg:mb-0 mr-24 flex flex-col lg:flex-row  justify-start items-start lg:items-start font-albra text-lg max-w-sm w-full">
                      <div className="imagecontainer w-28 h-28 mr-8 mb-4 lg:mb-0">
                        <Image
                          src="/images/recicladores/requisitothree.png"
                          width={113}
                          height={113}
                          layout="fixed"
                          className=""
                        />
                      </div>
                      <p className="font-albra text-lg">
                        Contar con las Regulaciones Ambientales competentes que
                        garanticen la correcta operación de la empresa
                        recicladora y el manejo de los residuos.
                      </p>
                    </div>
                  </div>
                  <div className="sectiontwo pr-4 lg:pr-0">
                    <div className="item mb-16 mr-24 flex flex-col lg:flex-row  justify-start items-start lg:items-start font-albra text-lg max-w-sm w-full">
                      <div className="imagecontainer w-28 h-28 mr-8 mb-4 lg:mb-0">
                        <Image
                          src="/images/recicladores/requisitofour.png"
                          width={113}
                          height={113}
                          layout="fixed"
                          className=""
                        />
                      </div>
                      <p className="font-albra text-lg">
                        Contar con infraestructura para recolectar, transportar,
                        almacenar y procesar los residuos sólidos de manejo
                        especial.
                      </p>
                    </div>
                    <div className="item mb-16 mr-24 flex flex-col lg:flex-row  justify-start items-start lg:items-start font-albra text-lg max-w-sm w-full">
                      <div className="imagecontainer w-28 h-28 mr-8 mb-4 lg:mb-0">
                        <Image
                          src="/images/recicladores/requisitofive.png"
                          width={113}
                          height={113}
                          layout="fixed"
                          className=""
                        />
                      </div>
                      <p className="font-albra text-lg">
                        Comprar los residuos que sean puestos a disposición por
                        Fundación Index Chihuahua®.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="f30"
            className="f30bar bg-index-yellow flex flex-col md:flex-row md:justify-center md:items-center md:px-10 lg:px-0 "
          >
            <p className="text-white py-10 font-basetica text-left md:text-center leading-9 text-[30px]  px-12 lg:px-0 lg:text-2xl md:py-16 w-full lg:w-6/12">
              ¿Sabes qué documentos necesitas para llevar a cabo el tramite?
            </p>
            <div className="buttonwrapper px-12 pb-10 md:py-0">
              <Button
                href="/recicladores/documentacion#belowbannersection"
                appearance="white"
                label="Descúbrelo"
                localUrl="/recicladores/documentacion#belowbannersection"
                className=" h-[60px]  w-44 text-[18px] font-albra font-bold md:w-auto md:px-[60px] md:py-[21px] "
              />
            </div>
          </div>
        </>
      ) : (
        <div
          id="f30"
          className="f30bar bg-index-yellow flex justify-center items-center"
        >
          <p className="text-white font-basetica text-center  text-lg px-12 lg:px-0 lg:text-3xl py-10 w-full lg:w-6/12">
            Para obtener la Solicitud de Datos Generales (F-30) envía un correo
            a
            <a
              className="underline"
              href="mailto:logistica@indexchihuahua.org.mx"
            >
              {" "}
              logistica@indexchihuahua.org.mx
            </a>{" "}
          </p>
        </div>
      )}
      <ImageSection image="/images/hands.jpg" type="recicladores" />
    </MainLayout>
  );
};

export async function getServerSideProps({ params }) {
  const data = await getPostsFromCategories("recicladores");
  if (!data) {
    return {
      props: {
        post: { title: "Server error", content: "try to reload the page" },
        navData: [
          {
            text: "Server error",
            link: "/",
          },
        ],
        postIndex: 0,
      },
    };
  }

  const posts = data.data.categories.nodes[0].posts.edges;
  const mainLayoutNavData = await getSections();
  const navData = posts.map((post) => {
    if (post.node.title === "Requisitos") {
      return {
        text: post.node.title,
        link: "/recicladores/Empresas%20recicladoras#requisitos",
      };
    }
    if (post.node.title === "F-30") {
      return {
        text: post.node.title,
        link: "/recicladores/Documentación#f30",
      };
    }
    return {
      text: post.node.title,
      link: "/recicladores/" + post.node.title,
    };
  });

  let post, postIndex, title, content;
  post = data.data.categories.nodes[0].posts.edges.find((post) => {
    return post.node.title === params.categoryName;
  });

  postIndex = data.data.categories.nodes[0].posts.edges.indexOf(post) + 1;
  title = post.node.title;
  content = post.node.content;

  return {
    props: {
      post: { title: title, content: content },
      navData,
      postIndex,
      mainLayoutNavData: mainLayoutNavData,
    },
  };
}

async function getSections() {
  const response = await getCategories();
  if (!response) {
    return {
      nosotrosSection: { dropdown: [] },
      programasSection: { dropdown: [] },
      donativosSection: { dropdown: [] },
      recicladoresSection: { dropdown: [] },
    };
  }
  let navData = [];
  let nosotrosSection;
  let programasSection;
  let donativosSection;
  let recicladoresSection;
  let boletinesSection;
  let eventosSection;
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
      boletinesSection = navData.find((item) => {
        return item.title === "boletines";
      });
      eventosSection = navData.find((item) => {
        return item.title === "eventos";
      });
      return await {
        nosotrosSection,
        programasSection,
        donativosSection,
        recicladoresSection,
        boletinesSection,
        eventosSection,
      };
    })
  );

  props = {
    nosotrosSection,
    programasSection,
    donativosSection,
    recicladoresSection,
    boletinesSection,
    eventosSection,
  };
  return await props;
}

const fetchTitles = async (category) => {
  const data = await getPostsFromCategories(category);
  if (!data) return [{ text: "Error, recarga la página", link: "/" }];
  const posts = data.data.categories.nodes[0].posts.edges;
  const categoryTitle = data.data.categories.edges[0].node.name;

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

export default EmpresasPage;
