import React, { useState } from 'react';
import "./.css";
import axios from 'axios';

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('learner');

  const handleOptionChange = (e) => {
    setRole(e.target.value);
}

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can implement your signup logic
    console.log(`Email: ${email}\nPassword: ${password}\nRole: ${role}`);
    const url = process.env.REACT_APP_API_URL + "/users/add";
    const data = {
      name: name,
      email: email,
      password: password,
      role: role
    };
    axios.post(url, data)
    .then(response => {
        alert(response.data.Message);
    })
    .catch(error => {
        alert(error);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Sign Up</h1>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        required
      />
    <div>
      <label>Role:</label>
      <select value={role} onChange={handleOptionChange}>
        <option value="learner">Learner</option>
        <option value="admin">Admin</option>
      </select>
    </div>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpPage;
