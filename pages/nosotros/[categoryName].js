/* eslint-disable @next/next/no-img-element */
import MainLayout from "@/components/layouts/MainLayout";
import ImageSection from "@/components/sections/ImageSection";
import { useEffect } from "react";
import NosotrosBanner from "@/components/banners/NosotrosBanner";
import NosotrosLayout from "@/components/sections/nosotros/NosotrosLayout";
import Numero from "@/components/icons/Numero";
import CarouselTransparencia from "@/components/sections/nosotros/CarouselTransparencia";
import {
  getCategories,
  getPostsFromCategories,
} from "@/components/utils/Queries";
import Organigrama from "@/components/sections/nosotros/Organigrama";
import TimeLineImage from "./timeLineImage";

const DinamicPage = ({ post, navData, postIndex, mainLayoutNavData }) => {
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
    <MainLayout navData={mainLayoutNavData} title="Jardín de niños Index">
      <NosotrosBanner className="bg-index-aqua" />
      <NosotrosLayout navData={navData}>
        {/* //Children Content here... */}
        <div className="wrapper">
          <h1 className=" mb-20  font-basetica text-[42px]  leading-10 lg:text-5xl font-bold">
            {post?.title}
          </h1>
          <Numero type={"" + postIndex} color="aqua" className=" mb-10" />

          <div id="DynamicWrapper"></div>
        </div>
        {post.title === "Transpariencia" ? (
          <>
            <CarouselTransparencia />
            <p className="mt-16 lg:mt-0 mb-8 font-albra">
              Si deseas conocer nuestros estados contables por favor envíanos un
              correo solicitándolos a{" "}
              <a
                className="underline text-index-aqua"
                href="mailto:fundacion@indexchihuahua.org.mx"
              >
                fundacion@indexchihuahua.org.mx
              </a>{" "}
              y con gusto te los haremos llegar a la brevedad posible.
            </p>
            <div className="wrapper mb-16 font-albra">
              <a
                href="/api/informe2020"
                target="_blank"
                className="underline text-black font-bold "
              >
                Descarga nuestro Informe Anual 2020
              </a>
              <br />
              <a
                href="/api/informe2021"
                target="_blank"
                className="underline text-black font-bold "
              >
                Descarga nuestro Informe Anual 2021
              </a>
            </div>
          </>
        ) : (
          <></>
        )}
      </NosotrosLayout>{" "}
      {post?.title === "Consejo directivo" ? (
        <>
          <div className="dummyspace py-8 bg-index-gray"></div>
          <Organigrama />
        </>
      ) : (
        <></>
      )}
      {post?.title === "Historia" ? <TimeLineImage /> : <></>}
      <div className="dummyspace py-8 bg-index-gray"></div>
      <ImageSection image="/images/friendspic.jpg" type="programas" />
    </MainLayout>
  );
};

export async function getServerSideProps({ params }) {
  const data = await getPostsFromCategories("nosotros");
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
  const navData = posts.map((post) => {
    return {
      text: post.node.title,
      link: "/nosotros/" + post.node.title,
    };
  });
  const mainLayoutNavData = await getSections();
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
      return await {
        nosotrosSection,
        programasSection,
        donativosSection,
        recicladoresSection,
        boletinesSection,
      };
    })
  );

  props = {
    nosotrosSection,
    programasSection,
    donativosSection,
    recicladoresSection,
    boletinesSection,
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

export default DinamicPage;
