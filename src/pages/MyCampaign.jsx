import React from "react";
import { useLoaderData } from "react-router-dom";

const MyCampaign = () => {
  const campaigns = useLoaderData();
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">My Campaigns</h2>

      {campaigns.length === 0 ? (
        <p className="text-center text-gray-600">
          You have not created any campaigns yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {campaigns.map((campaign) => (
            <div
              key={campaign._id}
              className="bg-white p-4 shadow-md rounded-lg"
            >
              <img
                src={campaign?.image}
                alt={campaign?.title}
                className="w-full h-40 object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold mt-2">{campaign?.title}</h3>
              <p className="text-gray-600">
                {campaign.description.slice(0, 100)}...
              </p>
              <p className="text-blue-500 mt-2">
                Minimum Donation: ${campaign?.goalAmount}
              </p>
              <p className="text-red-500">
                Deadline: {new Date(campaign?.deadline).toDateString()}
              </p>

              {/* Action Buttons */}
              <div className="flex justify-between mt-4">
                <button className="btn btn-sm btn-outline btn-primary">
                  Edit
                </button>
                <button className="btn btn-sm btn-outline btn-error">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyCampaign;
