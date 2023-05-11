import React, { useState } from "react";

function LearnersPage() {
  const [learners, setLearners] = useState([
    { id: 1, name: "Learner 1", email: "learner1@example.com" },
    { id: 2, name: "Learner 2", email: "learner2@example.com" },
    { id: 3, name: "Learner 3", email: "learner3@example.com" },
  ]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAddLearner = () => {
    const newLearner = {
      id: learners.length + 1,
      name,
      email,
    };
    setLearners([...learners, newLearner]);
    setName("");
    setEmail("");
  };

  const handleDeleteLearner = (id) => {
    const updatedLearners = learners.filter((learner) => learner.id !== id);
    setLearners(updatedLearners);
  };

  const handleEditLearner = (id, updatedLearner) => {
    const updatedLearners = learners.map((learner) =>
      learner.id === id ? updatedLearner : learner
    );
    setLearners(updatedLearners);
  };

  return (
    <div>
      <h1>Learners</h1>
      <ul>
        {learners.map((learner) => (
          <li key={learner.id}>
            <h2>{learner.name}</h2>
            <p>{learner.email}</p>
            <button onClick={() => handleDeleteLearner(learner.id)}>Delete</button>
            <button onClick={() => handleEditLearner(learner.id, learner)}>Edit</button>
          </li>
        ))}
      </ul>
      <h2>Add Learner</h2>
      <form>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <label>
          Email:
          <input type="text" value={email} onChange={handleEmailChange} />
        </label>
        <button type="button" onClick={handleAddLearner}>Add Learner</button>
      </form>
    </div>
  );
}

export default LearnersPage;
