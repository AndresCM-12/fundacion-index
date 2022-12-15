import { NextSeo } from "next-seo";

const Seo = ({ title }) => (
  <NextSeo
    title={title ? `Fundación Index | ${title}` : `Fundación Index`}
    description="Fundación Index Chihuahua organiza actividades a través de la activa participación de los integrantes de las empresas, nuestros comités y departamentos identifican oportunidades, desarrollan propuestas, comparten información, estructuran programas de capacitación e inciden en la resolución de problemas que afectan a la industria. "
    openGraph={{
      url: "https://fundacionindex.org",
      title: "Fundación Index Chihuahua",
      description:
        "Fundación Index Chihuahua organiza actividades a través de la activa participación de los integrantes de las empresas.",
      images: [
        {
          url: "/images/opengraph.jpg",
          width: 800,
          height: 600,
          alt: "Fundación Index Chihuahua",
          type: "image/jpg",
        },
      ],
      site_name: "Fundación Index Chihuahua",
    }}
    twitter={{
      handle: "@fundacion_index",
      site: "@fundacion_index",
      cardType: "summary_large_image",
    }}
  />
);

export default Seo;
