import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const successStories = [
  {
    name: "Sarah Johnson",
    story:
      "I raised $20,000 for my medical treatment! The support was overwhelming, and I’m forever grateful.",
    image: "https://source.unsplash.com/200x200/?woman,portrait",
  },
  {
    name: "Alex Carter",
    story:
      "With $50,000 raised, I successfully launched my dream startup. This platform made it all possible!",
    image: "https://source.unsplash.com/200x200/?man,portrait",
  },
  {
    name: "Emma Brown",
    story:
      "I was able to fund my short film with the $15,000 raised. The community here is amazing!",
    image: "https://source.unsplash.com/200x200/?girl,portrait",
  },
  {
    name: "James Wilson",
    story:
      "Thanks to generous backers, I raised $30,000 for my tech invention. A dream come true!",
    image: "https://source.unsplash.com/200x200/?boy,portrait",
  },
];

const SuccessStories = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Success Stories</h2>
        <p className="text-gray-600 mt-2">
          Real people, real impact! See how crowdfunding changed lives.
        </p>

        <div className="mt-10">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            navigation
            pagination={{ clickable: true }}
            className="pb-10"
          >
            {successStories.map((story, index) => (
              <SwiperSlide key={index}>
                <div className="bg-gray-100 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-center">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-primary"
                  />
                  <p className="text-gray-700 italic">"{story.story}"</p>
                  <h3 className="text-lg font-semibold text-gray-900 mt-4">
                    - {story.name}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
