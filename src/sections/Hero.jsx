import HeroText from "/assets/images/MacBookAirText.svg";

const Hero = () => {
  return (
    <section className="min-h-screen w-full screen-max-width flex items-center justify-center">
      <img src={HeroText} alt="MacBook Air" />
    </section>
  );
};

export default Hero;
