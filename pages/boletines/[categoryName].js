/* eslint-disable @next/next/no-img-element */
import MainLayout from "@/components/layouts/MainLayout";
import ImageSection from "@/components/sections/ImageSection";
import { useEffect } from "react";
import BoletinesBanner from "@/components/banners/BoletinesBanner";
import NosotrosLayout from "@/components/sections/nosotros/NosotrosLayout";
import Numero from "@/components/icons/Numero";
import { getPostsFromCategories } from "@/components/utils/Queries";

const DinamicPage = ({ post, navData, postIndex }) => {
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
    <MainLayout title="Jardín de niños Index">
      <BoletinesBanner className="bg-index-aqua" />
      <NosotrosLayout navData={navData}>
        {/* //Children Content here... */}
        <div className="wrapper">
          <h1 className=" mb-20  font-basetica text-[42px]  leading-10 lg:text-5xl font-bold">
            {post?.title}
          </h1>
          <Numero type={"" + postIndex} color="aqua" className=" mb-10" />

          <div id="DynamicWrapper"></div>
        </div>
      </NosotrosLayout>{" "}
      <div className="dummyspace py-8 bg-index-gray"></div>
      <ImageSection image="/images/friendspic.jpg" type="programas" />
    </MainLayout>
  );
};

export async function getServerSideProps({ params }) {
  const data = await getPostsFromCategories("boletines");
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
      link: "/boletines/" + post.node.title,
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
    },
  };
}

export default DinamicPage;
