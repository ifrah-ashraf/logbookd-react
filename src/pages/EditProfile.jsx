

const EditProfile = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-lg p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Edit Profile</h2>
        <form className="space-y-4">
          {/* Picture Upload */}
          <div>
            <label htmlFor="profile-pic" className="block text-sm font-medium text-gray-700">Upload Picture</label>
            <input type="file" id="profile-pic" className="file-input file-input-bordered file-input-primary w-full" />
          </div>

          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" className="input input-bordered w-full" placeholder="Enter your name" />
          </div>

          {/* Year of Passing */}
          <div>
            <label htmlFor="year-of-passing" className="block text-sm font-medium text-gray-700">Year of Passing</label>
            <input type="number" id="year-of-passing" className="input input-bordered w-full" placeholder="Enter year of passing" />
          </div>

          {/* Skills */}
          <div>
            <label htmlFor="skills" className="block text-sm font-medium text-gray-700">Skills</label>
            <input type="text" id="skills" className="input input-bordered w-full" placeholder="Enter your skills" />
          </div>

          {/* Achievements */}
          <div>
            <label htmlFor="achievements" className="block text-sm font-medium text-gray-700">Achievements</label>
            <input type="text" id="achievements" className="input input-bordered w-full" placeholder="Enter your achievements" />
          </div>

          {/* LinkedIn Profile Link */}
          <div>
            <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700">LinkedIn Profile</label>
            <input type="url" id="linkedin" className="input input-bordered w-full" placeholder="Enter your LinkedIn profile URL" />
          </div>

          {/* GitHub Profile Link */}
          <div>
            <label htmlFor="github" className="block text-sm font-medium text-gray-700">GitHub Profile</label>
            <input type="url" id="github" className="input input-bordered w-full" placeholder="Enter your GitHub profile URL" />
          </div>

          {/* About Yourself */}
          <div>
            <label htmlFor="bio" className="block text-sm font-medium text-gray-700">About Yourself</label>
            <textarea id="bio" className="textarea textarea-bordered w-full" rows="4" placeholder="Tell us about yourself" />
          </div>

          {/* Industry Currently Working In */}
          <div>
            <label htmlFor="industry" className="block text-sm font-medium text-gray-700">Industry Currently Working In</label>
            <input type="text" id="industry" className="input input-bordered w-full" placeholder="Enter your current industry" />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button type="submit" className="btn btn-primary">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
