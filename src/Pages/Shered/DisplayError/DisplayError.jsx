import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const DisplayError = () => {
    const {  logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogOut = () => {
      logOut()
        .then(() => {
          navigate('/login');
        })
        .catch((err) => {
          console.error(err);
        });
    };
    const error =  useRouteError();
    return ( 
        <div>
            <p className="text-red-600">something went wrong !!!</p>
           
         <p className="text-red-400">{error.statusText || error.message}</p>
         <h2 className="text-3xl">please <button onClick={handleLogOut}>sign out </button> log in back </h2>
        </div>
    );
};

export default DisplayError;