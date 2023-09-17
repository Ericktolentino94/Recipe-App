import React, { useState } from 'react';

export default function CreateRecipe() {
  const [formData, setFormData] = useState({ name: '', email: '', summary: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((oldFormData) => ({ ...oldFormData, [name]: value })); // Fixed the missing closing curly brace and used spread operator
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${formData.name}, Email: ${formData.email}, Summary: ${formData.summary}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />

      <label htmlFor="summary">Summary:</label>
      <textarea id="summary" name="summary" value={formData.summary} onChange={handleChange} /> {/* Changed formData.message to formData.summary */}

      <button type="submit">Submit</button>
    </form>
  );
}
