import React from 'react';
import Login from '../components/Login';
import Register from '../components/Register';

const Home = () => {
  return (
    <div>
      <h1>Welcome to ChatApp</h1>
      <Login />
      <Register />
    </div>
  );
};

export default Home;
