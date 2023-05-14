import axios from "axios";
import React, { useState } from "react";
import { useNavigate  } from "react-router-dom";

function LoginPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // handle login logic here
    const url = process.env.REACT_APP_API_URL + "/users/login";
    
    const data = {
      email: email,
      password: password
    };
    axios.post(url, data)
    .then(response => {
        console.log(response.data);
        props.setUser(response.data)
        localStorage.setItem('user',response.data)
        navigate('/');
      })
    .catch(error => {
        alert(error);
    });
  };

  return (
    <div>
      <h1>Login</h1>
        <label>
          Email:
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginPage;
