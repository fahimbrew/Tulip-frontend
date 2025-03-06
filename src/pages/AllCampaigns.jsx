import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const AllCampaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    axios
      .get("http://localhost:4000/all")
      .then((response) => {
        setCampaigns(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching campaigns:", error);
        setLoading(false);
      });
  }, []);

  // Filter campaigns based on search and category
  const filteredCampaigns = campaigns.filter(
    (campaign) =>
      (category === "All" || campaign.category === category) &&
      campaign.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          All Campaigns
        </h2>

        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <input
            type="text"
            placeholder="Search campaigns..."
            className="input input-bordered w-full md:w-1/3"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="select select-bordered"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="All">All Categories</option>
            <option value="Medical">Medical</option>
            <option value="Education">Education</option>
            <option value="Business">Business</option>
            <option value="Startup">Startup</option>
            <option value="Humantarian">Humantarian</option>
            <option value="Natural Calamities">Natural Calamities</option>
            <option value="Environment">Environment</option>
          </select>
        </div>

        {/* Campaign Cards Grid */}
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : filteredCampaigns.length === 0 ? (
          <div className="text-center text-gray-500">No campaigns found.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCampaigns.map((campaign) => (
              <div
                key={campaign._id}
                className="card bg-white shadow-md rounded-lg overflow-hidden"
              >
                <img
                  src={campaign.image}
                  alt={campaign.title}
                  className="w-full h-48 object-cover"
                />

                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-800">
                    {campaign.title}
                  </h3>
                  <p className="text-gray-500">{campaign.category}</p>

                  {/* Progress Bar */}
                  <div className="mt-4">
                    <div className="text-sm text-gray-600">
                      Raised: ${campaign.raisedAmount} / ${campaign.goalAmount}
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{
                          width: `${
                            (campaign.raisedAmount / campaign.goalAmount) * 100
                          }%`,
                        }}
                      ></div>
                    </div>
                  </div>

                  {/* See More Button */}
                  <Link
                    to={`/campaign/${campaign._id}`}
                    className="btn bg-purple-400 text-white mt-4 w-full"
                  >
                    See More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AllCampaigns;
