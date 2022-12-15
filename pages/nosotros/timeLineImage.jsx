import Image from "next/image";

export default function TimeLineImage() {
  return (
    <div className="lg:flex w-full justify-center items-center bg-index-gray py-16 scrollbar-hide lg:scrollbar-default snap-x  overflow-x-auto">
      <div className="w-full lg:max-w-7xl snap-center">
        <img
          src="/images/nosotros/historiatimeline.svg"
          className="hidden lg:block w-full"
        />
        {/* mobile svg image */}
        <div className="imagecontainer lg:hidden ">
          <Image
            src="/images/nosotros/historiatimeline.svg"
            width={1424}
            height={374}
            layout="fixed"
            className="w-full "
          />
        </div>
      </div>
    </div>
  );
}
