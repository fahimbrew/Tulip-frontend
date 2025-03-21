import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const Details = () => {
  const { user } = useContext(AuthContext);
  const campaign = useLoaderData();
  // Calculate percentage raised
  const percentageRaised = Math.min(
    (campaign.raisedAmount / campaign.goalAmount) * 100,
    100
  );
  const handleDonate = () => {
    // console.log("I will donate");
    const donationData = {
      email: user?.email,
      donorName: user?.displayName,
      campaignTitle: campaign.title,
      campaignId: campaign._id,
      image: campaign.image,
      amount: 100, // Fixed
      date: new Date(),
    };
    fetch("https://backend-server-eosin.vercel.app/donate", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(donationData),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          toast.success("$100 Contributed Successfully");
        }
      });
  };

  // Calculate remaining days
  const deadlineDate = new Date(campaign.deadline);
  const currentDate = new Date();
  const timeDiff = deadlineDate - currentDate;
  const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-xl shadow-lg">
        <img
          src={campaign.image}
          alt={campaign.title}
          className="w-full h-80 object-cover rounded-lg"
        />

        <h2 className="text-3xl font-bold text-gray-800 mt-4">
          {campaign.title}
        </h2>
        <p className="text-gray-500 mt-2">Category: {campaign.category}</p>

        <div className="mt-4 text-lg text-gray-700">
          {campaign.description || "No description available."}
        </div>

        {/* Fundraising progress */}
        <div className="mt-6">
          <div className="flex justify-between items-center mb-2 text-gray-600">
            <span>
              Raised: ${campaign.raisedAmount} / ${campaign.goalAmount}
            </span>
            <span className="text-sm">
              {daysLeft > 0 ? `${daysLeft} days left` : "Campaign ended"}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-green-500 h-3 rounded-full"
              style={{ width: `${percentageRaised}%` }}
            ></div>
          </div>
        </div>

        {/* Donation button */}
        <button
          onClick={handleDonate}
          className="mt-6 bg-purple-400 text-white px-6 py-3 rounded-lg w-full hover:bg-primary/80"
        >
          Contribute Now
        </button>
      </div>
    </section>
  );
};

export default Details;
