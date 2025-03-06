import Banner from "../components/Banner";
import RunningCampaign from "../components/RunningCampaign";
import SuccessStories from "../components/SuccessStories";
import WhyChooseUs from "../components/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <Banner />
      <div>
        <RunningCampaign />
      </div>
      <div>
        <WhyChooseUs />
      </div>
      <div>
        <SuccessStories />
      </div>
    </div>
  );
};

export default Home;
