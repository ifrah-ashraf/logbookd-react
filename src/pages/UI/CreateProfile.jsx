import React, { useState } from 'react';

const CreateProfile = () => {
  const [formData, setFormData] = useState({
    image: null,
    name: '',
    college: '',
    yearOfPassout: '',
    achievements: '',
    techSkills: '',
    github: '',
    linkedin: '',
    industry: '',
    about: ''
  });
  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      const file = files[0];
      setFormData({
        ...formData,
        [name]: file
      });
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-6 space-y-4 bg-white rounded-lg shadow-lg">
      <div className="form-control">
        <label className="label" htmlFor="image">
          <span className="label-text">Image</span>
        </label>
        <div className="flex items-center space-x-4">
          {imagePreview ? (
            <img src={imagePreview} alt="Preview" className="w-24 h-24 rounded-full object-cover" />
          ) : (
            <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">No Image</span>
            </div>
          )}
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="file-input file-input-bordered"
          />
        </div>
      </div>
      <div className="form-control">
        <label className="label" htmlFor="name">
          <span className="label-text">Name</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="input input-bordered"
        />
      </div>
      <div className="form-control">
        <label className="label" htmlFor="college">
          <span className="label-text">College</span>
        </label>
        <input
          type="text"
          id="college"
          name="college"
          value={formData.college}
          onChange={handleChange}
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control">
        <label className="label" htmlFor="yearOfPassout">
          <span className="label-text">Year of Passout</span>
        </label>
        <input
          type="number"
          id="yearOfPassout"
          name="yearOfPassout"
          value={formData.yearOfPassout}
          onChange={handleChange}
          className="input input-bordered"
        />
      </div>
      <div className="form-control">
        <label className="label" htmlFor="achievements">
          <span className="label-text">Achievements</span>
        </label>
        <textarea
          id="achievements"
          name="achievements"
          value={formData.achievements}
          onChange={handleChange}
          className="textarea textarea-bordered"
        ></textarea>
      </div>
      <div className="form-control">
        <label className="label" htmlFor="techSkills">
          <span className="label-text">Tech Skills</span>
        </label>
        <input
          type="text"
          id="techSkills"
          name="techSkills"
          value={formData.techSkills}
          onChange={handleChange}
          className="input input-bordered"
        />
      </div>
      <div className="form-control">
        <label className="label" htmlFor="github">
          <span className="label-text">GitHub Profile</span>
        </label>
        <input
          type="url"
          id="github"
          name="github"
          value={formData.github}
          onChange={handleChange}
          className="input input-bordered"
        />
      </div>
      <div className="form-control">
        <label className="label" htmlFor="linkedin">
          <span className="label-text">LinkedIn Profile</span>
        </label>
        <input
          type="url"
          id="linkedin"
          name="linkedin"
          value={formData.linkedin}
          onChange={handleChange}
          className="input input-bordered"
        />
      </div>
      <div className="form-control">
        <label className="label" htmlFor="industry">
          <span className="label-text">Industry/Field</span>
        </label>
        <input
          type="text"
          id="industry"
          name="industry"
          value={formData.industry}
          onChange={handleChange}
          className="input input-bordered"
        />
      </div>
      <div className="form-control">
        <label className="label" htmlFor="about">
          <span className="label-text">Add Something About You</span>
        </label>
        <textarea
          id="about"
          name="about"
          value={formData.about}
          onChange={handleChange}
          className="textarea textarea-bordered"
        ></textarea>
      </div>
      <div className="form-control">
        <button type="submit" className="btn btn-primary w-full">
          Submit
        </button>
      </div>
    </form>
  );
};

export default CreateProfile;
