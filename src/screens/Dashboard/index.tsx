// import CustomCarousel from "../../components/CustomCarousel";
// import { images } from "../About";
// import { Box } from "@mui/material";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import "../../components/CustomCarousel/customSlider.css";
import slider_img1 from "../../assets/A.jpg";
import slider_img2 from "../../assets/B.jpg";
import slider_img3 from "../../assets/C.jpg";
import slider_img4 from "../../assets/D.jpg";
import slider_img5 from "../../assets/Banner Flex Printing Works.jpg";
import slider_img6 from "../../assets/FRONT Page.jpg";
import slider_img7 from "../../assets/Offset.jpg";

const slidesData = [
  {
    img: slider_img1
  },
  {
    img: slider_img2
  },
  {
    img: slider_img3
  },
  {
    img: slider_img4
  },
  {
    img: slider_img5
  },
  {
    img: slider_img6
  },
  {
    img: slider_img7
  },
];

function Dashboard() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesData.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + slidesData.length) % slidesData.length
    );
  };

  const goToSlide = (index: any) => {
    setCurrentSlide(index);
  };

  // Optional: Auto Slide
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="slider-wrapper">
        {/* Floating shapes */}
        <div className="floating-shape shape1"></div>
        <div className="floating-shape shape2"></div>
        <div className="floating-shape shape3"></div>
        <div className="floating-shape shape4"></div>

        {/* Slider */}
        <div className="slider-container" >
          <div className="slider">
            {slidesData.map((slide, index) => (
              <div
                key={index}
                className={`slide ${
                  index === currentSlide ? "active transition-fade" : ""
                }`}
              >
                <img src={slide.img} alt={`Slider Image ${index + 1}`} />
                <div className="slide-content">
                  {/* <h2 className="slide-title">{slide.title}</h2>
                  <p className="slide-description">{slide.description}</p> */}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="navigation">
            <button className="nav-btn prev" onClick={prevSlide}>
              &lt;
            </button>
            <button className="nav-btn next" onClick={nextSlide}>
              &gt;
            </button>
          </div>

          {/* Dots */}
          <div className="dots-container">
            {slidesData.map((_, index) => (
              <div
                key={index}
                className={`dot ${index === currentSlide ? "active" : ""}`}
                onClick={() => goToSlide(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>
      {/* <Box>
        <CustomCarousel>
          {images.map((image, index) => {
            return (
              <img
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                  display: "block",
                  margin: "0 auto",
                }}
                key={index}
                src={image.imgURL}
                alt={image.imgAlt}
              />
            );
          })}
        </CustomCarousel>
      </Box> */}

      <Footer />
      {/* <Profile />
      <Gallery />
      <Solutions />
      <SolutionsTogether />
      <Services />
      <BusinessSupport />
      <TestimonialSlider /> */}
    </>
  );
}

export default Dashboard;
