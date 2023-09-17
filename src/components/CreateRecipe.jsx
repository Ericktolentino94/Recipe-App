import React from 'react'
import { useState } from 'react'
//import { getAllRecipes } from '../api/fetch'

export default function CreateRecipe() {

  const [formData, setFormData] = useState({name: "", email: "", summary: ""});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((oldFormData) => ({oldFormData, [name]: value}));

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${formData.name}, Email: ${formData.email}, Summary: ${formData.summary}`)
    };
  };
  
  return (

    <form onSubmit={handleSubmit}>
        
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}/>

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}/>

        <label htmlFor="summary">Summary:</label>
        <textarea id="summary" name="summary" value={formData.message} onChange={handleChange}/>

        <button type="submit">Submit</button>
    </form>
  )
};
