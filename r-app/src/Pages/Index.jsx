import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Index() {
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
        console.log(userData);
      },[userData])

  return (
    <div>
        <table>
            <thead>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>email</th>
                <th>actions</th>
            </tr>
            </thead>
            <tbody>
                {userData.map((user)=> (
                    <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <Link to ={`/show/${user.id}`}><button type="submit">show</button></Link>
                        <button type="submit">supprimer</button>
                    </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

