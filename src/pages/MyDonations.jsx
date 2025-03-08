import React, { useContext, useEffect, useState } from "react";

import { AuthContext } from "../provider/AuthProvider";

const MyDonations = () => {
  const { user } = useContext(AuthContext);

  const [donations, setDonations] = useState([]);
  useEffect(() => {
    fetch(`https://backend-server-eosin.vercel.app/donate/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDonations(data);
      });
  }, [user?.email]);
  //   console.log(donations);
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">My Donations</h2>
      {donations.length === 0 ? (
        <p className="text-center text-gray-500">No donations yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {donations.map((donation) => (
            <div
              key={donation._id}
              className="bg-white shadow-md rounded-lg p-4"
            >
              <img
                src={donation?.image}
                alt={donation?.campaignTitle}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold mt-2">
                {donation.campaignTitle}
              </h3>
              <p className="text-gray-600">Category: {donation?.category}</p>
              <p className="text-green-600 font-bold">
                Donated: ${donation.amount}
              </p>
              <p className="text-gray-500 text-sm">
                Date: {new Date(donation?.date).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyDonations;
