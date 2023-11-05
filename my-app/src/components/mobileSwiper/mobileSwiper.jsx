import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./style.scss";

const mobileSwiper = () => {
  return (
      <Swiper spaceBetween={12} slidesPerView={'auto'} >
        <SwiperSlide>
          <h3 className="swiper-slide-title">Web Platform</h3>
          <ol
            className="swiper-slide-list"
            style={{ color: "black", listStylePosition: "inside" }}
          >
            <li className="swiper-slide-list-item">Node.JS/Angular.JS</li>
            <li className="swiper-slide-list-item">React.JS/Vue.JS</li>
            <li className="swiper-slide-list-item">Spring MVC/ASP.NET</li>
            <li className="swiper-slide-list-item">Nest.JS/ASP.NET Core</li>
          </ol>
        </SwiperSlide>
        <SwiperSlide>
          <h3 className="swiper-slide-title">Mobile Development</h3>
          <ol
            className="swiper-slide-list"
            style={{ color: "black", listStylePosition: "inside" }}
          >
            <li className="swiper-slide-list-item">iOS</li>
            <li className="swiper-slide-list-item">Android</li>
            <li className="swiper-slide-list-item">ReactNative</li>
            <li className="swiper-slide-list-item">Flutter</li>
          </ol>
        </SwiperSlide>
        <SwiperSlide>
          <h3 className="swiper-slide-title">Programming Languages</h3>
          <ol
            className="swiper-slide-list"
            style={{ color: "black", listStylePosition: "inside" }}
          >
            <li className="swiper-slide-list-item">Swift/C#</li>
            <li className="swiper-slide-list-item">Java/PHP</li>
            <li className="swiper-slide-list-item">KOtlin/Objective-C</li>
            <li className="swiper-slide-list-item">Typescript</li>
          </ol>
        </SwiperSlide>
        <SwiperSlide>
          <h3 className="swiper-slide-title">Additional Technologies</h3>
          <ol
            className="swiper-slide-list"
            style={{ color: "black", listStylePosition: "inside" }}
          >
            <li className="swiper-slide-list-item">Rest/JavaEE</li>
            <li className="swiper-slide-list-item">AR/VR</li>
            <li className="swiper-slide-list-item">Spring/GraphQL</li>
            <li className="swiper-slide-list-item">JPA/Hibernate</li>
          </ol>
        </SwiperSlide>
      </Swiper>
  );
};

export default mobileSwiper;
