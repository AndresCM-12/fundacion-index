export default function RightArrowCircle({ className, ...rest }) {
  const defaultClassName = `rounded-full hover:text-index-aqua active:text-index-aqua ${className}`;
  return (
      <svg 
        width="60" 
        height="60" 
        viewBox="0 0 60 60" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={defaultClassName}
        {...rest}
      >
      <circle 
        r="30" 
        transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 30 30)" 
        fill="white"
      />
      <path 
        fill-rule="evenodd" 
        clip-rule="evenodd" 
        d="M34.5846 29.9248L25.367 20.7072L26.7812 19.293L37.413 29.9248L26.7812 40.5565L25.367 39.1423L34.5846 29.9248Z" 
        fill="currentColor"/>
      </svg>
  )
}
