
import React, { useEffect, useState,useContext } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../UserContext'; 

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const { setUser } = useContext(UserContext);
  
  useEffect(() => {
    const checkAuth = async () => {
      try {
        console.log('Checking authentication...');
        const response = await axios.get('http://localhost:3000/', {
          withCredentials: true
        });
        if(response.data) {
            setUser(response.data.user);
            setIsAuthenticated(true);
        }
        else{
            alert('login first')
        }
      } catch (error) {
        console.error('Error during authentication check:', error); // Debug log
        setIsAuthenticated(false);
      }
    };
    checkAuth();
  }, [setUser]);


  if (isAuthenticated === null) {
    return <div>Loading...</div>; // or a loading spinner
  }

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
