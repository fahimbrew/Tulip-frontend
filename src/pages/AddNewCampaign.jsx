import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const AddNewCampaign = () => {
  const { user } = useContext(AuthContext);
  const handleAddCampaign = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const title = form.title.value;
    const category = form.category.value;
    const description = form.description.value;
    const goalAmount = form.goalAmount.value;
    const deadline = form.deadline.value;
    const email = form.email.value;
    const username = form.username.value;

    const campaign = {
      image,
      title,
      category,
      description,
      goalAmount,
      deadline,
      email,
      username,
    };
    console.log(campaign);
    fetch("http://localhost:4000/myCampaign", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(campaign),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          toast.success("Campaign has been added");
        }
      });
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white p-8 rounded-xl shadow-md w-96">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Add New Campaign
        </h2>

        <form onSubmit={handleAddCampaign} className="mt-6">
          {/* Image URL */}
          <label className="block mb-2 text-sm text-gray-600">Image URL</label>
          <input
            type="text"
            name="image"
            className="input input-bordered w-full"
            placeholder="Enter image URL"
            required
          />

          {/* Title */}
          <label className="block mt-4 mb-2 text-sm text-gray-600">
            Campaign Title
          </label>
          <input
            type="text"
            name="title"
            className="input input-bordered w-full"
            placeholder="Enter campaign title"
            required
          />

          {/* Type Dropdown */}
          <label className="block mt-4 mb-2 text-sm text-gray-600">
            Campaign Type
          </label>
          <select
            name="category"
            className="select select-bordered w-full"
            required
          >
            <option value="Personal Issue">Personal Issue</option>
            <option value="Startup">Startup</option>
            <option value="Business">Business</option>
            <option value="Creative Idea">Creative Idea</option>
          </select>

          {/* Description */}
          <label className="block mt-4 mb-2 text-sm text-gray-600">
            Description
          </label>
          <textarea
            name="description"
            className="textarea textarea-bordered w-full"
            placeholder="Enter campaign details"
            required
          />

          {/* Minimum Donation */}
          <label className="block mt-4 mb-2 text-sm text-gray-600">
            Minimum Donation ($)
          </label>
          <input
            type="number"
            name="goalAmount"
            className="input input-bordered w-full"
            placeholder="Enter minimum donation"
            required
          />

          {/* Deadline */}
          <label className="block mt-4 mb-2 text-sm text-gray-600">
            Deadline
          </label>
          <input
            type="date"
            name="deadline"
            className="input input-bordered w-full"
            required
          />

          {/* User Email (Read-only) */}
          <label className="block mt-4 mb-2 text-sm text-gray-600">
            Your Email
          </label>
          <input
            type="email"
            name="email"
            className="input input-bordered w-full bg-gray-200"
            value={user ? user.email : ""}
            readOnly
          />

          {/* User Name (Read-only) */}
          <label className="block mt-4 mb-2 text-sm text-gray-600">
            Your Name
          </label>
          <input
            type="text"
            name="username"
            className="input input-bordered w-full bg-gray-200"
            value={user ? user.displayName : ""}
            readOnly
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="btn bg-purple-400 text-white w-full mt-6"
          >
            Add Campaign
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNewCampaign;
