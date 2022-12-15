const HalfCircle = ({ ...rest }) => {
  return (
    <svg
      width="130"
      height="65"
      viewBox="0 0 130 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M130 65C130 29.1017 100.898 0.000392318 65 0.000393887C29.1016 0.000395456 0.000212838 29.1017 0 65L130 65Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default HalfCircle;
