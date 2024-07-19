/* i'll add this later on */

import React, { useState } from 'react';

const predefinedTags = ['JavaScript', 'Web Development', 'Blockchain', 'React', 'Node.js'];

export default function TechSkills() {
  const [formData, setFormData] = useState({
    techSkills: '',
    selectedSkills: [],
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      techSkills: event.target.value,
    });
  };

  const handleAddSkill = (event) => {
    if (event.key === 'Enter') {
      const newSkill = formData.techSkills.trim();
      if (newSkill && !formData.selectedSkills.includes(newSkill)) {
        setFormData({
          ...formData,
          selectedSkills: [...formData.selectedSkills, newSkill],
          techSkills: '',
        });
      }
    }
  };

  const handleSelectPredefined = (skill) => {
    if (!formData.selectedSkills.includes(skill)) {
      setFormData({
        ...formData,
        selectedSkills: [...formData.selectedSkills, skill],
      });
    }
  };

  return (
    <div>
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
          onKeyDown={handleAddSkill}
          className="input input-bordered"
          placeholder="Add a tech skill and press Enter"
        />
      </div>
      <div className="selected-skills">
        {formData.selectedSkills.map((skill, index) => (
          <span key={index} className="tag">
            {skill}
            <button type="button" onClick={() => {
              const updatedSkills = formData.selectedSkills.filter(s => s !== skill);
              setFormData({ ...formData, selectedSkills: updatedSkills });
            }}>x</button>
          </span>
        ))}
      </div>
      <div className="predefined-tags">
        {predefinedTags.map((skill, index) => (
          <button
            key={index}
            type="button"
            onClick={() => handleSelectPredefined(skill)}
            className="tag-button"
          >
            {skill}
          </button>
        ))}
      </div>
    </div>
  );
}
