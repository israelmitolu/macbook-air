import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import portableDesignVideo from "/assets/videos/Designed to go places_large.mp4";
import displayVideo from "/assets/videos/Displays_large.mp4";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const PortableDesign = () => {
  const videoRef = useRef();
  const headingRef = useRef();
  const subheadingRef = useRef();

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
      // onComplete: () => {
      //   videoRef.current.play();
      // },
    });

    gsap.to(headingRef.current, {
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none none none",
      },
      opacity: 1,
      duration: 0.5,
    });

    gsap.to(subheadingRef.current, {
      scrollTrigger: {
        trigger: subheadingRef.current,
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none none none",
      },
      opacity: 1,
      ease: "power1.inOut",
      y: 0,
    });
  }, []);

  return (
    <section className="min-h-screen screen-max-width">
      <h2
        className="text-sm lg:text-base font-semibold text-[#1d1d1f] uppercase opacity-0"
        ref={headingRef}
      >
        Portable Design
      </h2>
      <p
        className="text-lg lg:text-7xl lg:tracking-tight font-semibold mt-2 mb-12 opacity-0 translate-y-10"
        ref={subheadingRef}
      >
        Designed to go places.
      </p>
      <div className="overflow-">
        <div
          className="relative h-auto w-full flex items-center overflow-hidden scale-100"
          ref={videoRef}
        >
          <video
            playsInline
            id="exploreVideo"
            className="w-full h-full object-cover object-center"
            preload="none"
            muted
            autoPlay
          >
            <source src={portableDesignVideo} type="video/mp4" />
          </video>
        </div>
      </div>

      <p className="text-[#86868b] text-2xl mt-72 font-semibold tracking-tight">
        <span className="text-[#1d1d1f]">
          Superlight and under half an inch thin,{" "}
        </span>
        MacBook Air fits easily into your life and is built with the planet in
        mind. MacBook Air with M3 is made with 50 percent recycled materials —
        an Apple first. And all MacBook Air laptops have a durable recycled
        aluminum enclosure.
      </p>

      <div className="relative w-full h-auto mt-14 text-[#1d1d1f] font-semibold">
        <video
          playsInline
          id="displays"
          className="w-full h-full object-cover object-center"
          preload="none"
          muted
          autoPlay
        >
          <source src={displayVideo} type="video/mp4" />
        </video>
        <p className="absolute top-[45%] left-[30%] flex flex-col text-7xl tracking-tight">
          13” <span className="text-3xl">display</span>
        </p>
        <p className="absolute top-[45%] left-[60%] flex flex-col text-7xl tracking-tight">
          15” <span className="text-3xl">display</span>
        </p>
      </div>

      <p className="text-[#86868b] text-2xl mt-10 font-semibold tracking-tight">
        <span className="text-[#1d1d1f]">Two perfectly portable sizes. </span>
        The 13‑inch model is the ultimate on‑the‑go laptop, and the 15‑inch
        model gives you more space onscreen for multitasking.
      </p>
    </section>
  );
};
export default PortableDesign;
