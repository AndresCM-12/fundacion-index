const MenuXIcon = ({ className, ...rest }) => {
  return (
    <div
      className={`bg-white rounded-full flex justify-center items-center p-2 h-12 w-12 ${className}`}
    >
      <svg
        width="19"
        height="18"
        viewBox="0 0 19 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
      >
        <line
          x1="1.60344"
          y1="17.2028"
          x2="17.5133"
          y2="1.2929"
          stroke="black"
          strokeWidth="2"
        />
        <line
          x1="1.95711"
          y1="1.29314"
          x2="17.867"
          y2="17.203"
          stroke="black"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};

export default MenuXIcon;
