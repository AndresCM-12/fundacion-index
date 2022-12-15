const FormIcon = ({ className }) => (
  <div
    className={` text-white w-8 h-8 flex justify-center items-center rounded-full p-2 ${className}`}
  >
    <svg
      width="19"
      height="21"
      viewBox="0 0 19 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.9222 0C0.864988 0 0 0.859091 0 1.90909V15.2727H1.9222V1.90909H13.4554V0H1.9222ZM5.76659 3.81818C4.70938 3.81818 3.84439 4.67727 3.84439 5.72727V19.0909C3.84439 20.1409 4.70938 21 5.76659 21H16.3387C17.3959 21 18.2609 20.1409 18.2609 19.0909V8.59091L13.4554 3.81818H5.76659ZM7.68879 11.4545H14.4165V13.3636H7.68879V11.4545ZM7.68879 15.2727H14.4165V17.1818H7.68879V15.2727Z"
        fill="white"
      />
    </svg>
  </div>
);

export default FormIcon;
