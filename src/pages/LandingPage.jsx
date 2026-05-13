import { LandingBanner } from "../assets";
import LandingDesc from "../components/LandingDesc";

const LandingPage = () => {
  return (
    <>
      <section className="container mx-auto h-screen flex items-center justify-center">
        <LandingDesc />
        <div>
          <img src={LandingBanner} alt="Landing page banner"/>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
