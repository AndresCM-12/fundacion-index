/* eslint-disable @next/next/no-img-element */
import MainLayout from "@/components/layouts/MainLayout";
import ImageSection from "@/components/sections/ImageSection";
import DonativosLayout from "@/components/sections/donativos/DonativosLayout";
import Numero from "@/components/icons/Numero";
import DonativosBanner from "@/components/banners/DonativosBanner";
import { useEffect } from "react";
import DynamicListComponent from "./DynamicListComponent";
import DynamicUsbSectionComponent from "./DynamicUsbSectionComponent";
import { getPostsFromCategories } from "@/components/utils/Queries";


const SaludBucalPage = ({ post, navData, postIndex }) => {
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
    <MainLayout title="Requisitos">
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

  const posts = data.data.categories.nodes[0].posts.edges;
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
    },
  };
}

export default SaludBucalPage;
