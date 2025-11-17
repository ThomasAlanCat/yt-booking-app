import { useEffect, useState } from "react";
import "./carousel.styles.scss";

const Carousel = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevState) => {
        if (prevState === data.length - 1) {
          return 0;
        } else {
          return prevState + 1;
        }
      });
    }, 8000);

    return () => {
      clearInterval(interval);
    };
  }, [data.length]);

  // console.log(currentIndex);
  return (
    <div className="carousel-wrapper">
      <img src={data[currentIndex]} alt="" />
      {/* <h1 className="heading">Carousel</h1> */}
    </div>
  );
};
export default Carousel;
