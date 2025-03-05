import { ShieldCheck, Rocket, Globe, BarChart } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Rocket size={40} className="text-primary" />,
      title: "Easy & Fast Campaign Setup",
      description:
        "Launch your campaign in just a few minutes with our user-friendly interface.",
    },
    {
      icon: <ShieldCheck size={40} className="text-primary" />,
      title: "Secure & Reliable Transactions",
      description:
        "All payments are securely processed to protect your funds and backers.",
    },
    {
      icon: <Globe size={40} className="text-primary" />,
      title: "Global Reach & Support",
      description:
        "Connect with backers from around the world to maximize your campaign's success.",
    },
    {
      icon: <BarChart size={40} className="text-primary" />,
      title: "Real-Time Tracking & Insights",
      description:
        "Monitor donations and campaign progress with live analytics.",
    },
  ];

  return (
    <section className="py-16 bg-base-200 mb-10">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Why Choose Us?</h2>
        <p className="text-gray-600 mt-2">
          Discover the benefits of using our crowdfunding platform.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="bg-primary/10 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
