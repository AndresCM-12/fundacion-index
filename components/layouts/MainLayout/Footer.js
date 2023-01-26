import Link from "next/link";
import Image from "next/image";
import UpIcon from "@/components/icons/UpIcon";
import { useEffect, useState } from "react";
import { getPostsFromCategories } from "@/components/utils/Queries";

const navigation = {
  nosotros: [
    { name: "Acerca de Nosotros", href: "/nosotros/acercade" },
    { name: "Historia", href: "/nosotros/historia" },
    { name: "Consejo directivo", href: "/nosotros/consejo" },
    { name: "Transparencia", href: "/nosotros/transparencia" },
  ],
  programas: [
    { name: "Jardin de niños Index", href: "/programas/jardindeninos" },
    { name: "Becas técnicas", href: "/programas/becas" },
    { name: "Amplicación de Vivienda", href: "/programas/ampliacionviviendas" },
    {
      name: "Programa de Audición & Lenguaje",
      href: "/programas/audicionlenguaje",
    },
    { name: "Salud Visual", href: "/programas/saludvisual" },
  ],
  programasdos: [
    { name: "Salud bucal", href: "/programas/saludbucal" },
    {
      name: "Programa de Atención e Hiperactividad",
      href: "/programas/atencionhiperactividad",
    },
    {
      name: "Detección oportuna de Cáncer de próstata",
      href: "/programas/cancerprostata",
    },
    { name: "Apoyo a la comunidad", href: "/programas/apoyocomunidad" },
  ],

  donativos: [
    { name: "Requisitos", href: "/donativos/requisitos" },
    { name: "Procedimiento", href: "/donativos/procedimiento" },
    { name: "Documentación", href: "/donativos/documentación" },
    { name: "Criterios de no elegibilidad", href: "/donativos/criterios" },
  ],
  recicladores: [
    { name: "Empresas recicladoras", href: "/recicladores/empresas" },
    {
      name: "Requisitos para prestar servicio como reciclador",
      href: "/recicladores/empresas#requisitos",
    },
    { name: "Documentación", href: "/recicladores/documentacion" },
    { name: "F-30", href: "/recicladores/documentacion#f30" },
  ],
  donantes: [{ name: "Empresas socias", href: "/donantes/empresas" }],
};

const Footer = ({ navData }) => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [footerInfo, setFooterInfo] = useState({});
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
    getFooterInfo().then((response) => {
      setFooterInfo(response);
    });
  }, []);

  return (
    <footer
      className="bg-index-blue-dark text-white font-albra"
      aria-labelledby="footer-heading"
    >
      <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:pt-16 lg:pb-2 lg:px-8">
        <div className=" xl:grid xl:grid-cols-2 xl:gap-8 md:pb-4 lg:pb-16">
          <Link href="/" passHref>
            <div className="pt-8 xl:pt-0 xl:col-span-1 cursor-pointer">
              <Image
                src="/images/footerlogo2.png"
                alt="footerlogo"
                width={227}
                height={75}
              />
            </div>
          </Link>
          <div className="mt-8 xl:mt-0 xl:col-span-1">
            <div className="xl:grid xl:grid-flow-col">
              <div className="row-span-2 mr-8">
                <p className="text-[18px] leading-[18px] font-semibold">
                  Siguenos en redes
                </p>
                <div
                  className="buttonscontainer flex mt-8 mb-12 flex-wrap gap-y-4"
                  style={{ maxWidth: 220 }}
                >
                  {footerInfo.socialInfo?.map((redes) => {
                    return (
                      <a
                        href={redes?.link}
                        className="socialbutton font-[15px] mr-3"
                      >
                        <div className="socialcontainer hover:text-black hover:bg-index-aqua border border-index-aqua w-[50px] h-[50px] flex justify-center align-center rounded-full">
                          <p className="flex justify-center items-center">
                            {redes?.name}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
              <div className="col-span-2 ">
                <p className="text-[18px] leading-[18px] font-semibold">
                  Contacto
                </p>
                <div className="address text-[15px] leading-[24px] mt-8 ">
                  {footerInfo.directionInfo?.map((item, index) => (
                    <p key={index}>{item}</p>
                  ))}
                  {/* <p>Av. William Shakespeare 157</p>
                  <p>Complejo Industrial Chihuahua 31136</p>
                  <p>Chihuahua, Chih, México.</p> */}
                  <br />
                  {footerInfo.contactInfo ? (
                    <>
                      {" "}
                      <a
                        href={"mailto:" + footerInfo.contactInfo[0]}
                        className="underline"
                      >
                        {footerInfo.contactInfo[0]}
                      </a>
                      <br />
                      <a
                        href={"tel:" + footerInfo.contactInfo[1]}
                        className="underline"
                      >
                        {footerInfo.contactInfo[1]}
                      </a>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <div className="hidden lg:row-span-2 xl:block">
                <a href="#header">
                  <UpIcon />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* MID SECTION */}
        <div className="pb-8 hidden xl:grid xl:grid-cols-5 xl:gap-8 border-t border-gray-700 pt-14">
          <div className="grid grid-cols-2 gap-8 xl:col-span-4 ">
            <div className="md:grid md:grid-cols-2 md:gap-8 ">
              <div>
                <h3 className="text-[18px] leading-[18px]  font-semibold text-white font-albra  tracking-wider capitalize">
                  Nosotros
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {/* TODO: FINISH THIS IN THE FOOTER */}
                  {navData?.nosotrosSection?.dropdown?.map((item, index) => {
                    if (item.link) {
                      return (
                        <>
                          <Link key={index} href={item.link}>
                            <a className="text-base text-white underline font-albra font-normal text-[15px] leading-[18px] hover:text-index-aqua">
                              {item.text}
                            </a>
                          </Link>
                          <li key={item.text}></li>
                        </>
                      );
                    }
                  })}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-[18px] leading-[18px]  font-semibold text-white font-albra  tracking-wider capitalize">
                  Programas
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navData?.programasSection?.dropdown?.map((item, index) => {
                    if (index < 4)
                      return (
                        <li key={item.text}>
                          <Link href={item.link}>
                            <a className="text-base text-white underline font-albra font-normal text-[15px] leading-[18px] hover:text-index-aqua">
                              {item.text}
                            </a>
                          </Link>
                        </li>
                      );
                  })}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  <br />
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navData?.programasSection?.dropdown?.map((item, index) => {
                    if (index >= 4)
                      return (
                        <li key={item.text}>
                          <Link href={item.link}>
                            <a className="text-base text-white underline font-albra font-normal text-[15px] leading-[18px] hover:text-index-aqua">
                              {item.text}
                            </a>
                          </Link>
                        </li>
                      );
                  })}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-[18px] leading-[18px]  font-semibold text-white font-albra  tracking-wider capitalize">
                  Recicladores
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navData?.recicladoresSection?.dropdown?.map((item) => (
                    <li key={item.text}>
                      <Link href={item.link}>
                        <a className="text-base text-white underline font-albra font-normal text-[15px] leading-[18px] hover:text-index-aqua">
                          {item.text}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 md:mt-0">
            <h3 className="text-[18px] leading-[18px]  font-semibold text-white font-albra  tracking-wider capitalize">
              Donantes
            </h3>
            <ul role="list" className="mt-4 space-y-4">
              {navData?.donativosSection?.dropdown?.map((item) => (
                <li key={item.text}>
                  <Link href={item.link}>
                    <a className="text-base text-white underline font-albra font-normal text-[15px] leading-[18px] hover:text-index-aqua">
                      {item.text}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* //DOWN SECTION */}
        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:align-center md:justify-between">
          <div className="flex space-x-6  md:order-2">
            <p className=" text-white text-[15px] font-albra leading-[18px]">
              Hecho con amor por{" "}
              <a
                href="https://reclight.studio/"
                className="underline hover:text-index-aqua"
              >
                Reclight.studio
              </a>
              ,{" "}
              <a
                href="https://molus.co/"
                className="underline hover:text-index-aqua "
              >
                Molus.co
              </a>{" "}
              y{" "}
              <a
                href="https://deadline.mx/es"
                className="underline hover:text-index-aqua "
              >
                Deadline
              </a>
            </p>
          </div>
          <p className="mt-8 text-base text-white md:mt-0 md:order-1 font-albra pb-6">
            Fundación Index &copy; {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
};

// For future use
async function getFooterInfo() {
  const data = await getPostsFromCategories("segments");

  if (!data) {
    return {
      props: {},
    };
  }

  const directionInfoRaw = data.data.categories.nodes[0].posts.edges
    .find((edge) => {
      return edge.node.title === "footer/directionInfo";
    })
    .node.content.split("<separator>");

  const directionInfo = [];

  directionInfoRaw.map((direction) => {
    directionInfo.push(direction.split("<p>")[1].split("</p>")[0]);
  });

  const contactInfoRaw = data.data.categories.nodes[0].posts.edges
    .find((edge) => {
      return edge.node.title === "footer/contactInfo";
    })
    .node.content.split("<separator>");

  const contactInfo = [];

  contactInfoRaw.map((contact) => {
    return contactInfo.push(contact.split("<p>")[1].split("</p>")[0]);
  });

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

  return {
    directionInfo,
    contactInfo,
    socialInfo,
  };
}

export default Footer;
