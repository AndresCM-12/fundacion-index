/* eslint-disable @next/next/no-img-element */
import MainLayout from "@/components/layouts/MainLayout";
import ImageSection from "@/components/sections/ImageSection";
import DonativosLayout from "@/components/sections/donativos/DonativosLayout";
import Numero from "@/components/icons/Numero";
import DonativosBanner from "@/components/banners/DonativosBanner";
import { useEffect } from "react";
import DynamicListComponent from "./DynamicListComponent";
import DynamicUsbSectionComponent from "./DynamicUsbSectionComponent";
import {
  getCategories,
  getPostsFromCategories,
} from "@/components/utils/Queries";

const SaludBucalPage = ({ post, navData, mainLayoutNavData, postIndex }) => {
  let divWithFetchedContent;
  useEffect(() => {
    divWithFetchedContent = document.createElement("div");
    divWithFetchedContent.innerHTML = post.content;
    document.querySelector("#DynamicWrapper").innerHTML = "";
    document
      .querySelector("#DynamicWrapper")
      .appendChild(divWithFetchedContent);
  }, [post]);
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
          <circle cx="9" cy="9" r="9" fill="#BF89FF" />
        </svg>
      </div>
    );
  };

  return (
    <MainLayout navData={mainLayoutNavData} title="Requisitos">
      <DonativosBanner className="bg-index-purple" />
      <DonativosLayout navData={navData}>
        {/* //Children Content here... */}
        <div className="wrapper">
          <h1 className=" mb-20 font-basetica text-[42px] leading-10 lg:text-5xl  font-bold">
            {post?.title}
          </h1>
          <Numero type={"" + postIndex} color="purple" />
          <div id="DynamicWrapper"></div>
        </div>
        {post?.title === "Procedimiento" ? <DynamicListComponent /> : <></>}
      </DonativosLayout>{" "}
      <div className="dummyspace py-8 bg-index-gray"></div>{" "}
      {post?.title === "Documentación" ? <DynamicUsbSectionComponent /> : <></>}
      <ImageSection image="/images/kid.jpg" type="donativos" />
    </MainLayout>
  );
};

export async function getServerSideProps({ params }) {
  let data = await getPostsFromCategories("donativos");
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
    return {
      text: post.node.title,
      link: "/donativos/" + post.node.title,
    };
  });
  let post, postIndex, title, content;
  if (!post) {
    post = data.data.categories.nodes[0].posts.edges.find((post) => {
      return post.node.title === params.categoryName;
    });
  }
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
export default SaludBucalPage;
