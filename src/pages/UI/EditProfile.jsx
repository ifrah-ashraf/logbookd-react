import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { supabase } from '../../SupabaseClient'; // Adjust path as necessary

const EditProfile = () => {
  const navigate = useNavigate();
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

  useEffect(() => {
    // Function to fetch existing user data from Supabase and pre-fill the form
    const fetchUserData = async () => {
      try {
        const { data, error } = await supabase.from('users').select('*').single(); // Adjust query as per your needs

        if (data) {
          setFormData({
            image: data.profile_image || null,
            name: data.name || '',
            college: data.college_name || '',
            yearOfPassout: data.year_of_passout || '',
            achievements: data.achievements || '',
            techSkills: data.tech_skills ? data.tech_skills.join(', ') : '', // Convert array to comma-separated string
            github: data.github_profile || '',
            linkedin: data.linkedin_profile || '',
            industry: data.industry || '',
            about: data.bio || ''
          });

          if (data.profile_image) {
            // Optionally, set image preview if available
            setImagePreview(data.profile_image);
          }
        }

        if (error) {
          throw error;
        }
      } catch (error) {
        console.error('Error fetching user data:', error.message);
        // Handle error fetching user data
      }
    };

    fetchUserData();
  }, []);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Split the techSkills input into an array of skills
    const skillsArray = formData.techSkills.split(',').map(skill => skill.trim()).filter(skill => skill);
    
    // Prepare data to be stored in Supabase
    const userData = {
      profile_image: formData.image ? formData.image.name : null,
      name: formData.name,
      college_name: formData.college,
      year_of_passout: formData.yearOfPassout,
      achievements: formData.achievements,
      tech_skills: skillsArray, // Store techSkills as array
      github_profile: formData.github,
      linkedin_profile: formData.linkedin,
      industry: formData.industry,
      bio: formData.about
    };

    try {
      // Insert the user data into the 'users' table in Supabase
      const { data, error } = await supabase.from('users').upsert(userData); // Use upsert to insert or update

      if (error) {
        throw error;
      }

      console.log('User data inserted/updated successfully:', data);

      // Reset the form after successful submission
      setFormData({
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
      setImagePreview(null);

      // Redirect to /check after successful submission
      navigate('/check');
    } catch (error) {
      console.error('Error inserting/updating user data:', error.message);
      // Handle error gracefully (e.g., show error message to the user)
      // Example: set an error state and display a message to the user
    }
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
          placeholder='Enter your name'
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
          placeholder='Enter your college name'
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
          placeholder='Enter your achievements seprated by comma'
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
          placeholder='Add your skills seprated by comma'
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
          placeholder='enter the github URL'
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
          placeholder='Enter the linkedin URL'
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
          placeholder='Enter the industry currently working in'
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
          placeholder='Describe about yourself'
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

export default EditProfile;
