import MainLayout from "@/components/layouts/MainLayout";
import TimeLine from "@/components/sections/home/TimeLine";
import MapSection from "@/components/sections/home/MapSection";
import ImageSection from "@/components/sections/ImageSection";
import HomeBanner from "@/components/banners/HomeBanner";
import ConoceMas from "@/components/sections/home/ConoceMas";
import { getPostsFromCategories } from "@/components/utils/Queries";

export default function Home({ swiperBlocks, numbersBlocks }) {
  return (
    <MainLayout>
      {/* //type options are donativos, recicladores y programas */}
      <HomeBanner swiperBlocks={swiperBlocks} className="bg-index-aqua" />
      <MapSection />
      <TimeLine numbersBlocks={numbersBlocks} />
      <ConoceMas />
      <ImageSection image="/images/friendspic.jpg" type="programas" />
    </MainLayout>
  );
}

export async function getServerSideProps() {
  const data = await getPostsFromCategories("segments");

  const numbers = data.data.categories.nodes[0].posts.edges.find((edge) => {
    return edge.node.title === "homebanner/numbers";
  });

  const carrousel = data.data.categories.nodes[0].posts.edges.find((edge) => {
    return edge.node.title === "homebanner/carrousel";
  });

  const carrouselSegment = carrousel.node.content.split("<separator>");
  const numberSegment = numbers.node.content.split("<separator>");

  let swiperBlocks = [],
    numbersBlocks = [];
  carrouselSegment.map((segment) => {
    const imageLink = segment.split('src="')[1].split('" alt')[0];
    const title = segment.split("<strong>")[1].split("</strong></h1>")[0];
    const subtitle = segment.split("<h4>")[1].split("</h4>")[0];
    const cta = segment.split("<h6>")[1].split("</h6>")[0];
    const link = segment.split("<p>")[1].split("</p>")[0];

    swiperBlocks.push({
      imageLink,
      title,
      subtitle,
      cta,
      link,
    });
  });

  numberSegment.map((segment) => {
    const number = segment.split("<h1>")[1].split("</h1>")[0];
    const title = segment.split("<h2>")[1].split("</h2>")[0];
    numbersBlocks.push({
      number,
      title,
    });
  });

  return {
    props: {
      swiperBlocks: swiperBlocks,
      numbersBlocks: numbersBlocks,
    },
  };
}
