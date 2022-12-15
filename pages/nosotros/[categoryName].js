/* eslint-disable @next/next/no-img-element */
import MainLayout from "@/components/layouts/MainLayout";
import ImageSection from "@/components/sections/ImageSection";
import { useEffect } from "react";
import NosotrosBanner from "@/components/banners/NosotrosBanner";
import NosotrosLayout from "@/components/sections/nosotros/NosotrosLayout";
import Numero from "@/components/icons/Numero";
import CarouselTransparencia from "@/components/sections/nosotros/CarouselTransparencia";
import { getPostsFromCategories } from "@/components/utils/Queries";
import Organigrama from "@/components/sections/nosotros/Organigrama";
import TimeLineImage from "./timeLineImage";

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
        {postIndex === 1 ? (
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
      {post?.title === "Historia" ? (<TimeLineImage />) : (<></>)}
      <div className="dummyspace py-8 bg-index-gray"></div>
      <ImageSection image="/images/friendspic.jpg" type="programas" />
    </MainLayout>
  );
};

export async function getServerSideProps({ params }) {
  const data = await getPostsFromCategories("nosotros");
  const posts = data.data.categories.nodes[0].posts.edges;
  const navData = posts.map((post) => {
    return {
      text: post.node.title,
      link: "/nosotros/" + post.node.title,
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
