import {React, useState} from 'react'
import axios from 'axios';

export default function Create() {
    const [userData, setUserData] = useState({});

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        setUserData((values)=> ({...values, [name] : value}))
    }

    function handleSumit(e) {
        e.preventDefault()
        console.log(userData)
        sendData();
    }

    const sendData = async ()=> {
        axios.post('http://127.0.0.1:8000/api/user',userData).then((res)=> console.log(res));
    }

  return (
    <div>
        <form onSubmit={handleSumit}>
            <input type="text" name='name' defaultValue='' onChange={handleChange} placeholder='name' /> <br /> <br />
            <input type="email" name='email' defaultValue=''  onChange={handleChange} placeholder='email' /> <br /> <br />
            <input type="password" name='password'  onChange={handleChange} placeholder='password' /> <br /> <br />
            <button type='submit'> submit </button>
        </form>
    </div>
  )
}

