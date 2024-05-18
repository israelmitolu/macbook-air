import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import Portability1 from "/assets/images/design_portability_1_large.jpg";
import Portability2 from "/assets/images/design_portability_2_large.jpg";
import Portability3 from "/assets/images/design_portability_3_large.jpg";
import Portability4 from "/assets/images/design_portability_4_large.jpg";

const Slider = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div className="screen-max-width min-h-screen w-full">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 15500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Portability1} alt="Portability 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Portability2} alt="Portability 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Portability3} alt="Portability 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Portability4} alt="Portability 4" />
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent} className="text-xs"></span>
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;
