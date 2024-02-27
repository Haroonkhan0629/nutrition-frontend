import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import LoginNav from "./LoginNav"

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
      axios.post('http://127.0.0.1:8000/api/auth/login/', credentials)
        .then((response) => {
          console.log(response['data']);
          setToken(response['data']['token']);
        });
    }, delay);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {

    axios.get("http://127.0.0.1:8000/api/auth/hello/", {
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
      <LoginNav profile={profile} logout={logout} />
      <h1> {data} </h1>
    </div>
  );
}

export default UserPage;

