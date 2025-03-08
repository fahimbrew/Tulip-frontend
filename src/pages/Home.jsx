import { Fade } from "react-awesome-reveal";
import Banner from "../components/Banner";
import RunningCampaign from "../components/RunningCampaign";
import SuccessStories from "../components/SuccessStories";
import WhyChooseUs from "../components/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <Fade cascade>
        <Banner />
      </Fade>

      <div>
        <Fade cascade>
          <RunningCampaign />
        </Fade>
      </div>
      <div>
        <Fade cascade>
          <WhyChooseUs />
        </Fade>
      </div>
      <div>
        <Fade cascade>
          <SuccessStories />
        </Fade>
      </div>
    </div>
  );
};

export default Home;
