import { ClockIcon } from "@heroicons/react/solid";

const TopBar = () => {
  return (
    <div className="topbar z-50 hidden h-10 w-full lg:flex justify-center items-center bg-index-blue-dark text-white text-xs sm:text-[15px]font-albra leading-[24px]">
      <div className="container flex max-w-7xl mx-auto w-full justify-end px-4  ">
        <div className="first flex  mr-12">
          <div className="iconcontainer w-5 h-5 mr-1">
            <ClockIcon />
          </div>
          <p>Lun - Vie (08:00 - 17:30)</p>
        </div>
        <a href="tel:+526144428450">+52 (614) 442.8450</a>
      </div>
    </div>
  );
};

export default TopBar;
