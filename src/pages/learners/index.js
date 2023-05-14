import React, { useEffect, useState } from "react";
import axios from "axios";
function LearnersPage() {
  const [learners, setLearners] = useState([]);

  const handleDeleteLearner = (id) => {
    const url = process.env.REACT_APP_API_URL + "/users/" + id;
    axios.delete(url).then((resp)=>{
      alert(resp.data.Message)
    })
  };

  const handleEditLearner = (id, updatedLearner) => {
    // const updatedLearners = learners.map((learner) =>
    //   learner.id === id ? updatedLearner : learner
    // );
    // setLearners(updatedLearners);
  };

  useEffect(()=>{
    const url = process.env.REACT_APP_API_URL + "/users";
    axios.get(url).then((resp)=>{
      setLearners(resp.data.data);
    })
  },[learners])


  return (
    <div>
      <h1>Learners</h1>
      <ul>
        {learners.map((learner) => (
          learner.role === "learner" ?
            <li key={learner._id}>
            <h2>{learner.name}</h2>
            <p>{learner.email}</p>
             <p>Joined: {learner.createdAt}</p>
            <button onClick={() => handleDeleteLearner(learner._id)}>Delete</button>
            <button onClick={() => handleEditLearner(learner._id, learner)}>Edit</button>
 
             </li>
             : ""
        ))}
      </ul>
      {/* <h2>Add Learner</h2>
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
      </form> */}
    </div>
  );
}

export default LearnersPage;
