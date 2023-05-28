import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Index() {
    const [userData, setUserData] = useState([]);

    function deleteUser(e) {
        const parsedId =  parseInt(e.target.value)
        const withoutDeletedData = userData.filter((user)=> user.id !== parsedId)
        const sendData = async ()=> {
            const res = await axios.post(`http://127.0.0.1:8000/api/delete`, withoutDeletedData).then((res)=> console.log(res))
            // console.log(res)
        }

        sendData();

    }

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

    //   const deleteUser = (e)=> {
    //     console.log(e.event.)
    //   }

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
                    <Link to='/create'><button type="submit">create</button></Link>
                        <Link to ={`/show/${user.id}`}><button type="submit">show</button></Link>
                        <button  type="submit" value={user.id} onClick={deleteUser}>supprimer</button>
                    </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

