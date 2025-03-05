import Marquee from "react-fast-marquee";

const Banner = () => {
  return (
    <div className="carousel carousel-center rounded-box my-10">
      <Marquee pauseOnHover={true} speed={100}>
        <div className="carousel-item">
          <img
            className="h-[300px] w-[500px] object-cover"
            src="https://i.ibb.co.com/HDmfz2sx/investment-crowdfunding-concept-74855-7563.jpg"
            alt=""
          />
        </div>
        <div className="carousel-item">
          <img
            className="h-[300px] w-[500px] object-cover"
            src="https://i.ibb.co.com/dwrsGfRP/crowdfunding-abstract-concept-vector-illustration-crowdsourcing-project-alternative-financing-raise.jpg"
            alt=""
          />
        </div>
        <div className="carousel-item">
          <img
            className="h-[300px] w-[500px] object-cover"
            src="https://i.ibb.co.com/CcCN0dJ/crowdfunding-project-plan-strategy-business-graphic-concept-53876-125388.jpg"
            alt=""
          />
        </div>
        <div className="carousel-item">
          <img
            className="h-[300px] w-[500px] object-cover"
            src="https://i.ibb.co.com/84RWMGY2/crowdfunding-composition-with-flat-illustration-lamp-inside-idea-box-people-with-banknotes-1284-6344.jpg"
            alt=""
          />
        </div>
        <div className="carousel-item">
          <img
            className="h-[300px] w-[500px] object-cover"
            src="https://i.ibb.co.com/rGq4df5p/crowdfunding-money-business-bulb-graphic-concept-53876-125606.jpg"
            alt=""
          />
        </div>
      </Marquee>
    </div>
  );
};

export default Banner;
