import MainLayout from "@/components/layouts/MainLayout";
import ContactoBanner from "@/components/banners/ContactoBanner";
import ContactInfo from "@/components/sections/contacto/ContactInfo";
import ContactForm from "@/components/sections/contacto/ContactForm";
import {
  getCategories,
  getPostsFromCategories,
} from "@/components/utils/Queries";

const ContactanosPage = ({ mainLayoutNavData, contactInfo, socialInfo }) => {
  return (
    <MainLayout navData={mainLayoutNavData}>
      <ContactoBanner className="bg-index-blue-default" />
      <ContactInfo info={contactInfo} socialInfo={socialInfo} />
      <ContactForm />
    </MainLayout>
  );
};

export async function getServerSideProps({ params }) {
  const data = await getPostsFromCategories("segments");
  if (!data) {
    return {
      props: {
        null: null,
      },
    };
  }

  const mainLayoutNavData = await getSections();

  const rawContent = data.data.categories.nodes[0].posts.edges
    .find((edge) => {
      return edge.node.title === "contacto/info";
    })
    .node.content.split("<article>")[1]
    .split("</article>")[0];

  const rawSocialInfo = data.data.categories.nodes[0].posts.edges
    .find((edge) => {
      return edge.node.title === "social/info";
    })
    .node.content.split("<separator>");

  let socialInfo = [];

  rawSocialInfo.forEach((social) => {
    const socialGroup = social.split("<article>")[1].split("</article>")[0];
    const socialName = socialGroup.split("<h2>")[1].split("</h2>")[0];
    const socialLink = socialGroup.split("<h1>")[1].split("</h1>")[0];
    socialInfo.push({
      name: socialName,
      link: socialLink,
    });
  });
  let contactInfo = {
    text: rawContent.split("<h1>")[1].split("</h1>")[0],
    title: rawContent.split("<h2>")[1].split("</h2>")[0],
    email: rawContent.split("<h3>")[1].split("</h3>")[0],
    phone: rawContent.split("<h4>")[1].split("</h4>")[0],
    address1: rawContent.split("<h5>")[1].split("</h5>")[0],
    address2: rawContent.split("<h6>")[1].split("</h6>")[0],
    linkUrl: rawContent.split('src="')[1].split('">')[0],
    linkText: rawContent.split('">')[1].split("</a>")[0],
    redes: rawContent.split("<p>")[1].split("</p>")[0],
  };

  return {
    props: {
      contactInfo: contactInfo,
      socialInfo: socialInfo,
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

export default ContactanosPage;
