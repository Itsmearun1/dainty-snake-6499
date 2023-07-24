import React from 'react'
import axios from 'axios';
const Logout = () => {
  const handleLogout = async () => {
    try {
      const response = await axios.get('http://localhost:8080/users/logout');


      localStorage.removeItem('token');

      console.log(response.data.msg);

    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout

