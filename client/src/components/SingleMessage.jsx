import { useState, useEffect, useRef } from "react";

const SingleMessage = ({ message }) => {
  const [width, setWidth] = useState(0);
  const elementRef = useRef(null);

  const style = {
    width: { width },
  };

  useEffect(() => {
    setWidth(elementRef.current.offsetWidth);
  }, [width]);
  return (
    <div className="single-message">
      <span ref={elementRef} style={style}>
        {message}
      </span>
    </div>
  );
};

export default SingleMessage;
