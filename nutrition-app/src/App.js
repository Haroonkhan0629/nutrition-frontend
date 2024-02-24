import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import { Routes, Route } from "react-router-dom";
import Search from './components/Search';
import Navigation from './components/Navigation';
import Home from './components/Home';
import HomeFolders from './components/HomeFolders';
import LoginPage from './components/LoginPage';
import Settings from './components/Settings';
import axios from 'axios';
import './App.css';

const App = () => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log('login failed:', error)
  });

  useEffect(() => {
    if (user) {
      console.log(user)
      axios
        .get(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${user['access_token']}`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${user['access_token']}`,
            "Access-Control-Allow-Credentials": true,
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*"
          }
        })
        .then(
          (response) => {
            console.log('changes');
            setProfile(response['data']);
          },
          (error) => {
            console.log(error);
          }
        );
    }
  }, [user]);

  useEffect(() => {
    if (profile === null) {
      console.log('profile null');
    } else {
      console.log('sending data to django');

      const profileData = {
        name: profile['name'],
        email: profile['email'],
        username: profile['id']
      };

      console.log(profileData);

      axios.post('http://127.0.0.1:8000/api/auth/register/', profileData).then(
        (response) => {
          console.log(response['data']);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }, [profile]);

  const logout = () => {
    googleLogout();
    setProfile(null);
  };

  if (profile) {
    console.log('profile present');
    console.log(profile);
  }

  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="" element={<HomeFolders />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/login" element={<LoginPage profile={profile} logout={logout} login={login} />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;


