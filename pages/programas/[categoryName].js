/* eslint-disable @next/next/no-img-element */
import MainLayout from "@/components/layouts/MainLayout";
import ProgramasLayout from "@/components/sections/programas/ProgramasLayout";
import ImageSection from "@/components/sections/ImageSection";
import Numero from "@/components/icons/Numero";
import ProgramasBanner from "@/components/banners/ProgramasBanner";
import { useEffect } from "react";
import { getPostsFromCategories } from "@/components/utils/Queries";

const JardinPage = ({ post, navData, postIndex }) => {
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
      <ProgramasBanner className="bg-index-aqua" />

      <ProgramasLayout navData={navData}>
        {/* //Children Content here... */}
        <div className="wrapper">
          <h1 className=" mb-20  font-basetica text-[42px]  leading-10 lg:text-5xl font-bold">
            {post?.title}
          </h1>
          <Numero type={"" + postIndex} color="aqua" className=" mb-10" />
          <div id="DynamicWrapper"></div>
        </div>
      </ProgramasLayout>
      <div className="dummyspace py-8 bg-index-gray"></div>

      <ImageSection image="/images/friendspic.jpg" type="programas" />
    </MainLayout>
  );
};

export async function getServerSideProps({ params }) {
  const data = await getPostsFromCategories("programas");
  const posts = data.data.categories.nodes[0].posts.edges;
  const navData = posts.map((post) => {
    return {
      text: post.node.title,
      link: "/programas/" + post.node.title,
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

export default JardinPage;
