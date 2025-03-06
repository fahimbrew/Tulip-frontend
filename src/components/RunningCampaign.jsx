import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const RunningCampaign = () => {
  const [campaigns, setCampaign] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:4000/running-campaign")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setCampaign(data);
      });
  }, []);
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Running Campaigns
        </h2>
        <p className="text-gray-600 text-center mt-2">
          Support active campaigns before their deadline!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {campaigns.map((campaign) => (
            <div
              key={campaign._id}
              className="bg-white p-5 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <img
                src={campaign.image}
                alt={campaign.title}
                className="w-full h-52 object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold text-gray-800 mt-3">
                {campaign.title}
              </h3>
              <p className="text-gray-600 mt-2">{campaign.category}</p>
              <div className="flex justify-between items-center mt-4 text-gray-700">
                <span>
                  💰 {campaign.raisedAmount} / {campaign.goalAmount}
                </span>
                <span>
                  ⏳{" "}
                  {Math.ceil(
                    (new Date(campaign.deadline) - new Date()) /
                      (1000 * 60 * 60 * 24)
                  )}{" "}
                  Days Left
                </span>
              </div>
              <button
                className="mt-4 bg-primary text-white px-4 py-2 rounded-lg w-full hover:bg-primary/80"
                onClick={() => navigate(`/campaign/${campaign._id}`)}
              >
                See More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RunningCampaign;
