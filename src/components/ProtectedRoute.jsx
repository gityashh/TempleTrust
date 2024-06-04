// // ProtectedRoute.jsx
// import React, { useEffect, useState } from 'react';
// import { Navigate } from 'react-router-dom';
// import axios from 'axios';

// const ProtectedRoute = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     const checkAuth = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/', {
//             withCredentials: true
//         });
//         console.log(response.data);
//         // if(response.data === "login") {
//         //     setIsAuthenticated(true);
//         // }
//         setIsAuthenticated(true);
//         console.log(isAuthenticated);
//       } catch (error) {
//         // setIsAuthenticated(false);
//         console.log(error);
//       }
//     };
//     checkAuth();
//   }, []);

//   console.log('isAuthenticated state:', isAuthenticated);

// //   if (isAuthenticated === null) {
// //     return <Navigate to="/login" /> // or a loading spinner
// //   }

//   return isAuthenticated ? children : <Navigate to="/login" />;
// };

// export default ProtectedRoute;


import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // Start with null to indicate loading state

  useEffect(() => {
    const checkAuth = async () => {
      try {
        console.log('Checking authentication...');
        const response = await axios.get('http://localhost:3000/', {
          withCredentials: true
        });
        if(response.data === "login") {
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
  }, []);


  if (isAuthenticated === null) {
    return <div>Loading...</div>; // or a loading spinner
  }

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
