import React, { useState } from 'react';
import "./.css";
import axios from 'axios';

const addMaterial = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');

  const handleOptionChange = (e) => {
    setType(e.target.value);
}

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can implement your signup logic
    console.log(`Name: ${name}\Description: ${description}\Type: ${type}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Sign Up</h1>
      <label htmlFor="email">Material Name:</label>
      <input
        id="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
      />
      <label htmlFor="password">Description:</label>
      <input
        id="description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        required
      />
    <div>
      <label>Type:</label>
      <select value={type} onChange={handleOptionChange}>
        <option value="doc">Document</option>
        <option value="vid">Video</option>
        <option value="pic">Picture</option>
        <option value="link">Link</option>
      </select>
    </div>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default addMaterial;
