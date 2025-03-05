import Banner from "../components/Banner";
import SuccessStories from "../components/SuccessStories";
import WhyChooseUs from "../components/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <Banner />
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
