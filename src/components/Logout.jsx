import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../UserContext'; // Adjust the path as necessary

const Logout = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:3000/logout', {}, {
        withCredentials: true
      });

      setUser(null); // Clear the user context
      navigate('/login'); // Redirect to login page
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <a className='text-lg font-thin capitalize' onClick={handleLogout}>
      Logout
    </a>
  );
};

export default Logout;
