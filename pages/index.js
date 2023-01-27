import MainLayout from "@/components/layouts/MainLayout";
import TimeLine from "@/components/sections/home/TimeLine";
import MapSection from "@/components/sections/home/MapSection";
import ImageSection from "@/components/sections/ImageSection";
import HomeBanner from "@/components/banners/HomeBanner";
import ConoceMas from "@/components/sections/home/ConoceMas";
import {
  getCategories,
  getPostsFromCategories,
} from "@/components/utils/Queries";

export default function Home({ swiperBlocks, numbersBlocks, navData }) {
  return (
    <MainLayout navData={navData}>
      {/* //type options are donativos, recicladores y programas */}
      <HomeBanner swiperBlocks={swiperBlocks} className="bg-index-aqua" />
      <MapSection />
      <TimeLine numbersBlocks={numbersBlocks} />
      <ConoceMas />
      <ImageSection image="/images/friendspic.jpg" type="programas" />
    </MainLayout>
  );
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

export async function getServerSideProps() {
  const data = await getPostsFromCategories("segments");

  if (!data) {
    return {
      props: {
        swiperBlocks: [
          {
            imageLink: "https://cdn.crispedge.com/43464b.png",
            title: "Server error",
            subtitle: "try to reload the page",
            cta: "",
            link: "/",
          },
        ],
        numbersBlocks: [
          {
            number: "500",
            title: "Server error",
          },
        ],
      },
    };
  }

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
  let navData = await getSections();

  return {
    props: {
      swiperBlocks: swiperBlocks,
      numbersBlocks: numbersBlocks,
      navData: navData,
    },
  };
}
