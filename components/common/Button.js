import LoadingCircle from "./LoadingCircle";
import Link from "next/link";

//Helper to do conditionals for classes
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Button = (
  {
    appearance = "white", //aqua, outline
    localUrl = "",
    externalUrl = "",
    label, //button text
    isDisabled = false,
    isLoading = false,
    className,
    type = "button",
    onClick,
  },
  { ...rest }
) => {
  //Styling for button using classNames Helper
  const defaultClassNames = classNames(
    appearance === "white" &&
      ` bg-white text-black hover:text-index-aqua
        ${isDisabled && "cursor-not-allowed"}`,

    appearance === "aqua" &&
      ` bg-index-aqua rounded-full text-white hover:bg-[#4aaca2]
        ${isDisabled && "cursor-not-allowed "}`,

    appearance === "outlineaqua" &&
      ` bg-white rounded-full text-index-aqua border border-index-aqua
        ${isDisabled && "cursor-not-allowed "}`,

    appearance === "outlinepurple" &&
      ` bg-white rounded-full text-index-purple border border-index-purple
        ${isDisabled && "cursor-not-allowed "}`,

    appearance === "outlineblue" &&
      ` bg-white rounded-full text-index-blue-default border border-index-blue-default
        ${isDisabled && "cursor-not-allowed "}`,
    ` rounded-full inline-flex w-full items-center justify-center px-5 py-2 text-center font-inter text-base font-semibold ${className}`
  );

  if (localUrl) {
    return (
      <Link href={localUrl}>
        <a className={`${defaultClassNames} ${className}`}>{label}</a>
      </Link>
    );
  } else if (externalUrl) {
    return (
      <a
        href={externalUrl}
        className={`${defaultClassNames} ${className} cursor-pointer`}
        target="_blank"
      >
        {label}
      </a>
    );
  } else {
    return (
      <button
        type={type}
        disabled={isDisabled || isLoading}
        className={`${defaultClassNames} ${className}`}
        onClick={onClick}
        {...rest}
      >
        {isLoading ? (
          <LoadingCircle
            className={appearance === "white" ? "text-black" : "text-white"}
          />
        ) : (
          // this scenario is only when it doesnt have a url
          <>{label}</>
        )}
      </button>
    );
  }
};

export default Button;
