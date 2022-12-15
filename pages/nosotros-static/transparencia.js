import MainLayout from "@/components/layouts/MainLayout";
import ImageSection from "@/components/sections/ImageSection";
import NosotrosLayout from "@/components/sections/nosotros/NosotrosLayout";
import Numero from "@/components/icons/Numero";
import NosotrosBanner from "@/components/banners/NosotrosBanner";
import CarouselTransparencia from "@/components/sections/nosotros/CarouselTransparencia";
import { useState, useEffect } from "react"

const TransparenciaPage = () => {

  return (
    <MainLayout title="Transparencia">
      <NosotrosBanner className="bg-index-aqua" />

      <NosotrosLayout>
        {/* //Children Content here... */}
        <div className="wrapper">
          <h1 className=" mb-20 font-basetica text-[42px] leading-[48px]  lg:text-5xl lg:leading-[90px] font-bold">
            Transparencia
          </h1>
          <Numero type="four" color="aqua" className=" mb-10" />
          <p className="font-semibold mt-8 font-albra text-2xl mb-10 leading-8 w-full ">
            Fundación Index® Chihuahua es una organización con valores,
            impulsada por la transparencia, confianza, responsabilidad,
            honestidad y solidaridad.{" "}
          </p>
        </div>
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
          <a href="/api/informe2020" target="_blank" className="underline text-black font-bold ">
          Descarga nuestro Informe Anual 2020
          </a>
          <br />
          <a href="/api/informe2021" target="_blank" className="underline text-black font-bold ">
          Descarga nuestro Informe Anual 2021
          </a>
        </div>
      </NosotrosLayout>
      <ImageSection image="/images/friendspic.jpg" type="programas" />
    </MainLayout>
  );
};

export default TransparenciaPage;
