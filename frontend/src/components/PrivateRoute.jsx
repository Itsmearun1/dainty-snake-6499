import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const location = useLocation();

  useEffect(() => {

    const checkAuthentication = () => {
      
      const token = localStorage.getItem('token');
      if (token) {
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
    };

    checkAuthentication();
  }, [isAuth]);

  if (isAuth) {
    return <>{children}</>;
  }
else {
    console.log(location)
    return <Navigate state={location.pathname} to="/login" replace />;
  }
};

export default PrivateRoute;



