import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

function UserPage({ profile, logout }) {

  const [token, setToken] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {

    const delay = 3000;

    const credentials = {
      username: profile['id'],
      password: 'random123'
    };

    const timeout = setTimeout(() => {
      axios.post('https://nutrition-backend-qire.onrender.com/api/auth/login/', credentials)
        .then((response) => {
          console.log(response['data']);
          setToken(response['data']['token']);
        });
    }, delay);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {

    axios.get("https://nutrition-backend-qire.onrender.com/api/auth/hello/", {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + token
      }
    }).then((response) => {
      console.log(response['data']);
      setData(response['data']['message']);
    }, (error) => {
      console.log(error);
    }
    );
  }, [token]);

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item active" aria-current="page">Profile</li>
        </ol>
      </nav>
      <div className="logo">
        <img src={profile['picture']} alt={profile['name']} />
        <h2>Welcome, {profile['name']}!</h2>
      </div>
      <div className="profile-info">
        <h3>Mail ID: {profile['email']}</h3>
        <button onClick={logout}>Logout</button>
      </div>
      <h1> {data} </h1>
    </div>
  );
}

export default UserPage;

