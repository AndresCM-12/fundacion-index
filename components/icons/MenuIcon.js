const MenuIcon = ({ className, ...rest }) => {
  return (
    <div
      className={`bg-white rounded-full flex justify-center items-center p-2 h-12 w-12 ${className}`}
    >
      <svg
        width="21"
        height="12"
        viewBox="0 0 21 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
      >
        <line
          x1="0.25"
          y1="1"
          x2="20.5"
          y2="0.999998"
          stroke="black"
          strokeWidth="2"
        />
        <line
          x1="-8.74228e-08"
          y1="11"
          x2="20"
          y2="11"
          stroke="black"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};

export default MenuIcon;
