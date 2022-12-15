const UpIcon = ({ className, ...rest }) => (
  <div
    className={`bg-white text-black w-12 h-12 flex justify-center items-center rounded-full p-2 ${className}`}
  >
    <svg
      width="22"
      height="13"
      viewBox="0 0 22 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.9248 3.41441L1.70718 12.632L0.292969 11.2178L10.9248 0.585985L21.5565 11.2178L20.1423 12.632L10.9248 3.41441Z"
        fill="currentColor"
      />
    </svg>
  </div>
);

export default UpIcon;
