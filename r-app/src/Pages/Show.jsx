import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';

export default function Show() {

const [userData, setUserData] = useState([]);
    useEffect(() => {
        const getData = async () => {
          try {
            const response = await axios.get('http://127.0.0.1:8000/api/user');
            setUserData(response.data);
          } catch (error) {
            console.error(error);
          }
        };

        getData();
      }, []);

      useEffect(()=> {
        console.log(userData)
      },[userData])
  return (
    <div>
        <h1>
            {userData[0]['name']}
        </h1>
    </div>
  )
}

