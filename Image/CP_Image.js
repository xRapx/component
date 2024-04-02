// import images here...

const Image = forwardRef(
  ({src, alt, className, fallback: customFallback = '', ...props}, ref) => {
    const [fallback, setFallback] = useState(customFallback);

    const handleError = () => {
      setFallback(customFallback);
    };

    return <img ref={ref} src={fallback || src} alt={alt} {...props} onError={handleError} />;
  }
);

export default Image;