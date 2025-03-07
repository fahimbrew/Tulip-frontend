import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const MyCampaign = () => {
  const { user } = useContext(AuthContext);

  const [campaigns, setCampaigns] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:4000/myCampaign/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setCampaigns(data);
      });
  }, [user?.email]);
  //   console.log(campaigns);

  const handleDelete = (_id) => {
    // console.log(id);
    fetch(`http://localhost:4000/myCampaign/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.success) {
          toast.success("Deleted Successfully");
        }
        const remaining = campaigns.filter((campaign) => campaign._id !== _id);
        setCampaigns(remaining);
      });
  };
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">My Campaigns</h2>

      {campaigns.length === 0 ? (
        <p className="text-center text-gray-600">No campaigns found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">Title</th>
                <th className="border border-gray-300 px-4 py-2">
                  Min Donation
                </th>
                <th className="border border-gray-300 px-4 py-2">Deadline</th>
                <th className="border border-gray-300 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((campaign) => (
                <tr key={campaign._id} className="text-center">
                  <td className="border border-gray-300 px-4 py-2">
                    {campaign?.title}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    ${campaign?.goalAmount}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {new Date(campaign?.deadline).toDateString()}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button className="btn btn-sm btn-primary mr-2">
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(campaign?._id)}
                      className="btn btn-sm btn-error"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyCampaign;
