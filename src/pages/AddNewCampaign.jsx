const AddNewCampaign = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white p-8 rounded-xl shadow-md w-96">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Add New Campaign
        </h2>

        <form className="mt-6">
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
            name="type"
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
            name="minDonation"
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
