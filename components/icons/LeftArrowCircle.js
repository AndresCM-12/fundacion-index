export default function LeftArrowCircle({ className, ...rest }) {
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
        d="M25.4154 29.9248L34.633 20.7072L33.2188 19.293L22.587 29.9248L33.2188 40.5565L34.633 39.1423L25.4154 29.9248Z" 
        fill="currentColor"/>
      </svg>
  )
}
