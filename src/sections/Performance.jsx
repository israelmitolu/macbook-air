import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import PerformanceVideo from "/assets/videos/Chipload of power_large.mp4";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Performance = () => {
  const videoRef = useRef(null);

  useGSAP(() => {
    gsap.to(videoRef.current, {
      scale: 1.4,
      ease: "power2.inOut",
      y: 120,
      scrollTrigger: {
        trigger: videoRef.current,
        toggleActions: "play pause reverse restart",
        start: "-10% bottom",
        scrub: true,
      },
      onComplete: () => {
        videoRef.current.play();
      },
    });
  }, []);

  return (
    <section className="min-h-screen screen-max-width mt-56">
      <h2 className="text-sm lg:text-base font-semibold text-[#1d1d1f] uppercase">
        Perfomance and Battery Life
      </h2>
      <p className="text-lg lg:text-7xl lg:tracking-tight font-semibold mt-2 mb-12">
        A chipload of power.
      </p>

      <div className="relative h-auto w-full flex items-center overflow-hidden">
        <video
          playsInline
          id="exploreVideo"
          className="w-full h-full object-cover object-center"
          preload="none"
          muted
          autoPlay
          ref={videoRef}
        >
          <source src={PerformanceVideo} type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default Performance;
