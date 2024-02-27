import './App.css';
import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import { Routes, Route } from "react-router-dom";
import Navigation from './components/Navigation';
import Search from './components/Search';
import Home from './components/Home';
import HomeFolders from './components/HomeFolders';
import Settings from './components/Settings';
import LoginPage from './components/LoginPage';
import axios from 'axios';


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
        <Route path="/login" element={<LoginPage profile={profile} logout={logout} login={login} />} />
        <Route path="/" element={<HomeFolders profile={profile} />} />
        <Route path="/settings" element={<Settings profile={profile} />} />
        <Route path="/search" element={<Search profile={profile} />} />
        <Route path="/home" element={<Home profile={profile} />} />
      </Routes>
    </div>
  );
}

export default App;

