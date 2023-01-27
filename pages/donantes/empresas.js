/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import MainLayout from "@/components/layouts/MainLayout";
import ImageSection from "@/components/sections/ImageSection";
import Image from "next/image";
import DonantesBanner from "@/components/banners/DonantesBanner";
import {
  getCategories,
  getPostsFromCategories,
} from "@/components/utils/Queries";

const data = {
  partone: [
    {
      title: "ZF Group",
      image: "/images/donantes/zfgroup.png",
      url: "https://www.zf.com/",
      textUrl: "www.zf.com",
      className: "-rotate-90",
    },
    {
      title: "Sofi Chihuahua",
      image: "/images/donantes/sofi.png",
      url: "https://www.essilor.com.mx/",
      textUrl: "www.essilor.com.mx",
      className: "rotate-0",
    },
    {
      title: "Lutron",
      image: "/images/donantes/olutron.png",
      url: "https://www.lutron.com",
      textUrl: "www.lutron.com",
      className: "-rotate-90",
    },
    {
      title: "Daniel",
      image: "/images/donantes/daniel.png",
      url: "https://www.emerson.com",
      textUrl: "www.emerson.com",
      className: "-rotate-0",
    },
    {
      title: "Xylem",
      image: "/images/donantes/xylem.png",
      url: "https://www.xylem.com",
      textUrl: "www.xylem.com",
      className: "-rotate-90",
    },
    {
      title: "FIH",
      image: "/images/donantes/fih.png",
      url: "https://www.fihmb.com",
      textUrl: "www.fihmb.com",
      className: "-rotate-0",
    },
    {
      title: "DTR",
      image: "/images/donantes/dtr.png",
      url: "https://www.dtrvms.com",
      textUrl: "www.dtrvms.com",
      className: "-rotate-90",
    },
    {
      title: "Yazaki",
      image: "/images/donantes/yazaki.png",
      url: "https://www.yazaki-group.com",
      textUrl: "www.yazaki-group.com",
      className: "-rotate-0",
    },
    {
      title: "SDM-M",
      image: "/images/donantes/sdm.png",
      url: "SDM-M",
      textUrl: "SDM-M",
      className: "-rotate-90",
    },
    {
      title: "Albaugh",
      image: "/images/donantes/albaugh.png",
      url: "https://www.albaughlc.com",
      textUrl: "www.albaughlc.com",
      className: "-rotate-0",
    },
    {
      title: "Bellflight",
      image: "/images/donantes/bellflight.png",
      url: "https://www.bellflight.com",
      textUrl: "www.bellflight.com",
      className: "-rotate-90",
    },
    {
      title: "BWI Group",
      image: "/images/donantes/bwi.png",
      url: "https://www.bwigroup.com",
      textUrl: "www.bwigroup.com",
      className: "-rotate-0",
    },
    {
      title: "Spitfire",
      image: "/images/donantes/spitfire.png",
      url: "https://www.sigmatronintl.com",
      textUrl: "www.sigmatronintl.com",
      className: "-rotate-90",
    },
    {
      title: "Factoria",
      image: "/images/donantes/factoria.png",
      url: "https://www.factoria.com",
      textUrl: "www.factoria.com",
      className: "-rotate-0",
    },
    {
      title: "Kaman",
      image: "/images/donantes/kaman.png",
      url: "https://www.kaman.com",
      textUrl: "www.kaman.com",
      className: "-rotate-90",
    },
    {
      title: "Leviton",
      image: "/images/donantes/leviton.png",
      url: "https://www.leviton.com",
      textUrl: "www.leviton.com",
      className: "-rotate-0",
    },
    {
      title: "Manyser",
      image: "/images/donantes/manyser.png",
      url: "Manyser",
      textUrl: "Manyser",
      className: "-rotate-90",
    },
    {
      title: "MFCO",
      image: "/images/donantes/mfco.png",
      url: "https://www.metalfinishingco.com",
      textUrl: "www.metalfinishingco.com",
      className: "-rotate-0",
    },
    {
      title: "novares",
      image: "/images/donantes/novares.png",
      url: "Aerospace Solutions",
      textUrl: "AeroSpace Solutions",
      className: "-rotate-90",
    },
    {
      title: "Quiro Production",
      image: "/images/donantes/quiro.png",
      url: "https://www.cardinalhealth.com",
      textUrl: "www.cardinalhealth.com",
      className: "-rotate-0",
    },
    {
      title: "Signify",
      image: "/images/donantes/signify.png",
      url: "https://www.signify.com",
      textUrl: "www.signify.com",
      className: "-rotate-90",
    },
    {
      title: "Southco",
      image: "/images/donantes/southco.png",
      url: "https://www.southco.com",
      textUrl: "www.southco.com",
      className: "-rotate-0",
    },
    {
      title: "Termotec",
      image: "/images/donantes/termotec.png",
      url: "https://www.emerson.com",
      textUrl: "www.emerson.com",
      className: "-rotate-90",
    },
    {
      title: "Dana",
      image: "/images/donantes/dana.png",
      url: "https://www.dana.com",
      textUrl: "www.dana.com",
      className: "-rotate-0",
    },
    {
      title: "Wesco Aircraft",
      image: "/images/donantes/wesco.png",
      url: "Wesco Aircraft",
      textUrl: "Wesco Aircraft",
      className: "-rotate-90",
    },
    {
      title: "Zodiac Aerospace",
      image: "/images/donantes/zodiac.png",
      url: "https://www.zodiacaerospace.com",
      textUrl: "www.zodiacaerospace.com",
      className: "-rotate-0",
    },

    {
      title: "Safran",
      image: "/images/donantes/safran.png",
      url: "https://www.safran-group.com",
      textUrl: "www.safran-group.com",
    },
    {
      title: "ConMed Corp",
      image: "/images/donantes/conmed.png",
      url: "https://www.conmed.com.mx/",
      textUrl: "www.conmed.com.mx",
      className: "-rotate-90",
    },
    {
      title: "Resideo",
      image: "/images/donantes/resideo.png",
      url: "https://www.honeywell.com",
      textUrl: "www.honeywell.com",
      className: "-rotate-0",
    },
    {
      title: "Jabil",
      image: "/images/donantes/jabil.png",
      url: "https://www.jabil.com",
      textUrl: "www.jabil.com",
      className: "-rotate-90",
    },
    {
      title: "Emerson",
      image: "/images/donantes/emerson.png",
      url: "https://www.emerson.com",
      textUrl: "www.emerson.com",
      className: "-rotate-0",
    },
    {
      title: "Ez Air",
      image: "/images/donantes/ezair.png",
      url: "https://www.ez-air.com",
      textUrl: "www.ez-air.com",
      className: "-rotate-90",
    },
    {
      title: "Bühler Motors",
      image: "/images/donantes/buhlermotor.png",
      url: "https://www.buhlermotor.com",
      textUrl: "www.buhlermotor.com",
      className: "-rotate-0",
    },
    {
      title: "Iqor",
      image: "/images/donantes/iqor.png",
      url: "https://www.iqor.com",
      textUrl: "www.iqor.com",
      className: "-rotate-90",
    },
    {
      title: "Teleflex",
      image: "/images/donantes/teleflex.png",
      url: "https://www.teleflex.com",
      textUrl: "www.teleflex.com",
      className: "-rotate-0",
    },
    {
      title: "Batesville",
      image: "/images/donantes/batesville.png",
      url: "https://www.batesville.com",
      textUrl: "www.batesville.com",
      className: "-rotate-90",
    },
    {
      title: "Bourns",
      image: "/images/donantes/bourns.png",
      url: "https://www.bourns.com",
      textUrl: "www.bourns.com",
      className: "-rotate-0",
    },
    {
      title: "Cirpro",
      image: "/images/donantes/cirpro.png",
      url: "https://www.cardinalhealth.com",
      textUrl: "www.cardinalhealth.com",
      className: "-rotate-90",
    },
    {
      title: "DSV",
      image: "/images/donantes/dsv.png",
      url: "https://www.mx.dsv.com",
      textUrl: "www.mx.dsv.com",
      className: "-rotate-0",
    },
    {
      title: "GKN Aerospace",
      image: "/images/donantes/gkn.png",
      url: "https://www.gknaerospace.com",
      textUrl: "www.gknaerospace.com",
      className: "-rotate-90",
    },
    {
      title: "KLX",
      image: "/images/donantes/klx.png",
      url: "KLX Aerospace solutions",
      textUrl: "KLX Aerospace solutions",
      className: "-rotate-0",
    },
    {
      title: "Manesa",
      image: "/images/donantes/manesa.png",
      url: "https://www.manesa.com",
      textUrl: "www.manesa.com",
      className: "-rotate-90",
    },
    {
      title: "Maxion",
      image: "/images/donantes/maxion.png",
      url: "https://www.maxionwheels.com",
      textUrl: "www.maxionwheels.com",
      className: "-rotate-0",
    },
    {
      title: "MGS",
      image: "/images/donantes/mgs.png",
      url: "https://www.mgstech.com",
      textUrl: "www.mgstech.com",
      className: "-rotate-90",
    },
    {
      title: "Pace Industries",
      image: "/images/donantes/pace.png",
      url: "https://www.paceind.com",
      textUrl: "www.paceind.com",
      className: "-rotate-0",
    },
    {
      title: "Safe",
      image: "/images/donantes/safe.png",
      url: "https://www.safe-industry.com",
      textUrl: "www.safe-industry.com",
      className: "-rotate-90",
    },
    {
      title: "SMTC",
      image: "/images/donantes/smtc.png",
      url: "https://www.smtc.com",
      textUrl: "www.smtc.com",
      className: "-rotate-0",
    },
    {
      title: "Superior",
      image: "/images/donantes/superior.png",
      url: "https://www.supind.com",
      textUrl: "www.supind.com",
      className: "-rotate-90",
    },
    {
      title: "Textron",
      image: "/images/donantes/textron.png",
      url: "https://www.txtav.com",
      textUrl: "www.txtav.com",
      className: "-rotate-0",
    },
    {
      title: "Tristone",
      image: "/images/donantes/tristone.png",
      url: "https://www.tristone.com",
      textUrl: "www.tristone.com",
      className: "-rotate-90",
    },
    {
      title: "Crane",
      image: "/images/donantes/crane.png",
      url: "https://www.cranecpe.com",
      textUrl: "www.cranecpe.com",
      className: "-rotate-0",
    },
  ],
};

const EmpresasPage = ({ mainLayoutNavData, empresas }) => {
  const CompanyItem = ({ item, key }) => {
    return (
      <div
        key={key}
        id="belowbannersection"
        className="item mb-16  lg:mr-24 flex flex-col items-start"
      >
        <div className="imagescontainer flex justify-center items-center">
          <Image src={item.image} width={150} height={150} layout="fixed" />
          {/** 
          <Image
          src="/images/donantes/basecircle.png"
          width={150}
          height={150}
          layout="fixed"
          className={item.className}
          /> 
        */}
        </div>
        <div className="textcontainerfont-albra my-4 pl-4 w-full">
          <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
          <a
            target="_blank"
            href={item.url}
            className="hover:underline hover:text-index-aquahover"
            rel="noreferrer"
          >
            {item.textUrl}
          </a>
        </div>
      </div>
    );
  };

  return (
    <MainLayout navData={mainLayoutNavData} title="Empresas recicladoras">
      <DonantesBanner className="bg-index-aqua" />
      <div className="sectioncontainer w-full flex justify-center bg-index-gray pb-16">
        <div className="wrapper max-w-7xl flex flex-col lg:flex-row justify-center w-full mt-20">
          <div className="leftsection block max-w-xs pl-4 lg:px-0 ">
            <div className="navbarcontainer pb-16 lg:pb-0">
              <p className="font-basetica font-bold text-5xl leading-10">
                Nuestras empresas recicladoras socias
              </p>
            </div>
          </div>
          <div
            id="requisitos"
            className="rightsection  lg:mx-6 lg:ml-0 pl-8 lg:pl-7 border-l-2 border-index-border w-full lg:w-8/12"
          >
            <div className="wrapper flex flex-col lg:flex-row justify-start items-start">
              <div className="sectionone flex flex-wrap gap-x-10">
                {empresas.map((item, index) => (
                  <CompanyItem key={index} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ImageSection image="/images/friendspic.jpg" type="programas" />
    </MainLayout>
  );
};

export async function getServerSideProps({ params }) {
  const mainLayoutNavData = await getSections();
  if (!mainLayoutNavData) {
    return {
      props: {
        mainLayoutNavData: [
          {
            text: "Server error",
            link: "/",
          },
        ],
        postIndex: 0,
      },
    };
  }
  const data = await getPostsFromCategories("segments");

  const rawEmpresasDonantes = data.data.categories.nodes[0].posts.edges
    .find((edge) => {
      return edge.node.title === "donantes/empresas";
    })
    .node.content.split("<separator>");
  let empresasDonantes = [];
  rawEmpresasDonantes.forEach((item) => {
    const empresa = item.split("<article>")[1].split("</article>")[0];
    const title = empresa.split("<h1>")[1].split("</h1>")[0];
    const image = empresa.split("<h2>")[1].split("</h2>")[0];
    const url = empresa.split("<h3>")[1].split("</h3>")[0];
    const textUrl = empresa.split("<h4>")[1].split("</h4>")[0];
    empresasDonantes.push({
      title,
      image,
      url,
      textUrl,
      className: "",
    });
  });

  return {
    props: {
      mainLayoutNavData: mainLayoutNavData,
      empresas: empresasDonantes,
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
        eventosSection
      };
    })
  );

  props = {
    nosotrosSection,
    programasSection,
    donativosSection,
    recicladoresSection,
    boletinesSection,
    eventosSection
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
