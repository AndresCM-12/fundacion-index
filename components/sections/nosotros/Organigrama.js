import OrganigramaIcon from "@/components/icons/OrganigramaIcon";
const peopleData = [
  {
    name: "Ing. Lorenzo Casas",
    job: "Presidencia",
    icon: <OrganigramaIcon type="check" />,
  },
  {
    name: "Lic. Luisa Apodaca",
    job: "Directora",
    icon: <OrganigramaIcon type="hall" />,
  },
  {
    name: "Lic. Laura Sandoval",
    job: "Secretaria",
    icon: <OrganigramaIcon type="leaf" />,
  },
  {
    name: "Ing. Lorenzo Casas",
    job: "Tesoreria",
    icon: <OrganigramaIcon type="money" />,
  },
  {
    name: "Arq. Ana de la Rosa",
    job: "Consejería",
    icon: <OrganigramaIcon type="puzzle" />,
  },
  {
    name: "Ing. Cristina Sánchez",
    job: "Consejería",
    icon: <OrganigramaIcon type="puzzle" />,
  },
  {
    name: "Lic. Héctor Alderete",
    job: "Consejería",
    icon: <OrganigramaIcon type="puzzle" />,
  },
  {
    name: "Ing. Omar Baca",
    job: "Consejería",
    icon: <OrganigramaIcon type="puzzle" />,
  },
  {
    name: "Ing. Aldo Plata",
    job: "Consejería",
    icon: <OrganigramaIcon type="puzzle" />,
  },
  {
    name: "Lic. Eleonora González",
    job: "Consejería",
    icon: <OrganigramaIcon type="puzzle" />,
  },
  {
    name: "Ing. Guillermo Moreno",
    job: "Consejería",
    icon: <OrganigramaIcon className="  " type="puzzle" />,
  },
  {
    name: "Ing. Oswaldo Orozco",
    job: "Consejería",
    icon: <OrganigramaIcon type="puzzle" />,
  },
];

const Organigrama = () => {
  return (
    <div className="supercontainer bg-index-gray w-full flex justify-center items-center text-left">
      <div className="wrapper max-w-7xl w-full ">
        <p className="font-bold font-albra uppercase leading-3 tracking-headline  text-xs px-7">
          03 - Consejo Directivo
        </p>
        <h2 className="font-basetica font-bold text-5xl w-full my-12 px-7">
          Organigrama
        </h2>
        <div className="organigramacontent px-7 w-full flex flex-col justify-center items-center mb-12">
          {peopleData.map((person, index) => (
            <div
              className="item group w-full border-b-2 rounded-md hover:rounded-full  p-6 lg:px-14 bg-index-gray hover:bg-white text-[#a9abab] hover:text-black font-albra text-xl "
              key={index}
            >
              <div className="titlecontainer flex justify-between items-center my-1 ">
                <p className="font-bold lg:w-1/4">{person.name}</p>
                <p className="job hidden  lg:w-40 lg:flex  text-left">
                  {person.job}
                </p>

                {person.icon}
              </div>
              <p className="job lg:hidden ">{person.job}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Organigrama;
