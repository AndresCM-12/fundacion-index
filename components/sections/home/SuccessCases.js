/* eslint-disable @next/next/no-img-element */
import Button from "@/components/common/Button";
import Image from "next/image";
const data = [
  {
    text: " Industria IMMEX comparte desde le corazón $200k a nuestros niños del CRIT...",
    image: "/images/carousel/image1.png",
  },
  {
    text: " Industria IMMEX comparte desde le corazón $200k a nuestros niños del CRIT...",
    image: "/images/carousel/image2.png",
  },
];

const SuccessCases = () => {
  return (
    <div className="supercontainer w-full">
      <div className="topsection mt-28 max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between ">
        <h2 className="font-basetica px-12 text-[21px] font-semibold leading-8 lg:ml-8">
          Últimos casos de éxito
        </h2>
      </div>
      {/* carousel items  */}
      <div className="carouselsection mt-16 flex w-full scrollbar-hide lg:scrollbar-default snap-x overflow-x-auto px-0 lg:px-8 lg:mb-32">
        {data.map((item, index) => (
          <div
            key={index}
            className="item w-10/12 md:flex lg:w-7/12 shrink-0 snap-center last:mr-12 first:ml-12  lg:flex lg:justify-start lg:items-center lg:mr-24"
          >
            <div className="imagecontainer md:px-12 last:mr-12  lg:flex lg:justify-end lg:px-0 lg:mx-0 lg:w-[438px] ">
              <Image
                src={item.image}
                alt="carouselimg"
                className="w-full"
                width={239}
                height={256}
                layout="fixed"
              />
            </div>
            <div className="secondsectioncontainer lg:px-8">
              <p className="font-basetica font-bold text-[30px] lg:text-4xl lg:w-[500px] w-full leading-9 mt-16 lg:mt-0  ">
                {item.text}
              </p>
              <div className="buttoncontainer my-0 hidden lg:flex">
                <Button
                  label="Conócenos"
                  localUrl="/nosotros/acercade"
                  appearance="outlineaqua"
                  className="font-albra my-8 font-semibold py-5 w-[230px] text-[18px]  "
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="buttoncontainer px-12 lg:hidden">
        <Button
          label="Conócenos"
          localUrl="/nosotros/acercade"
          appearance="outlineaqua"
          className="font-albra my-16 font-semibold py-5  "
        />
      </div>
    </div>
  );
};

export default SuccessCases;
