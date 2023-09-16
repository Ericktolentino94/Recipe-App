import React from 'react'
import { useState } from 'react'
import { getAllRecipes } from '../api/fetch'

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
    <div>CreateRecipe</div>
  )
};
