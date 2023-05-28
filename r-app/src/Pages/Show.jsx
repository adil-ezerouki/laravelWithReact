import React, { useState, useEffect } from 'react';
import { useParams,Link } from 'react-router-dom';
import axios from 'axios';
// import { Link } from 'react-router-dom';

export default function Show() {

    const [userData, setUserData] = useState([]);
    const {id} = useParams();
    const parsedId = parseInt(id);


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
        console.log(userData);
      },[userData])

      const targetedUser = userData.find((user)=> user.id === parsedId);


  return (
    <div>
      {targetedUser && <h1>  name : {targetedUser.name}</h1>}
       {targetedUser && <h1> email :{targetedUser.email}</h1>}
       <Link to='/index'><button type="submit">to index</button></Link>
    </div>
  )
}

