import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Title from './components/title';

async function registerUser(credentials) {
    console.log(JSON.stringify(credentials))
    return fetch('http://127.0.0.1:8000/auth/register/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
  }


export default function Register() {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [confirm_password, setConfirm_password] = useState();
    const [email, setEmail] = useState();
    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();
        const response = await registerUser({
          username,
          email,
          password,
          confirm_password,
        });
        if ('access_token' in response) {
          const token = response.accessToken;
          localStorage.setItem('user_id', response.user_id);
          localStorage.setItem('user_name', response.user_name);
          localStorage.setItem('access_token', response.access_token);
          navigate("/profile");
        } else {
          alert("Failed" + response.message + "error");
        }
      }

    return (
        <div className='flex justify-center'>
            <div className="w-full pt-[40px] max-w-sm">
                <Title/>
                <form onSubmit={handleSubmit} className="bg-white drop-shadow-md rounded-lg px-8 pt-6 pb-8 my-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input onChange={e => setUserName(e.target.value)} className="bg-slate-50 drop-shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:bg-slate-100" name="username" id="username" type="text" placeholder="Username" autoComplete='username' required/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input onChange={e => setEmail(e.target.value)} className="bg-slate-50 drop-shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:bg-slate-100" name="email" id="email" type="email" placeholder="name@domain.com" autoComplete='email' required/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input onChange={e => setPassword(e.target.value)} className="bg-slate-50 drop-shadow-md appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:bg-slate-100" name="password" id="password" type="password" placeholder="Password" autoComplete='new-password' required/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm_password">
                            Confirm Password
                        </label>
                        <input onChange={e => setConfirm_password(e.target.value)} className="bg-slate-50 drop-shadow-md appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:bg-slate-100" name="confirm_password" id="confirm_password" type="password" placeholder="Confirm Password" autoComplete='new-password' required/>
                    </div>
                    <div className="flex justify-center">
                        <button className="text-center w-2/5 bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Register
                        </button>
                    </div>
                    <div className="pt-[15px] flex justify-center ">
                        <span onClick={() => navigate('/login')} className="cursor-pointer inline-block align-baseline font-bold text-sm text-sky-500 hover:text-sky-800">
                            Already registered? Log in here
                        </span>
                    </div>
                </form>
                <p className="text-center text-gray-200 text-xs">
                    &copy;2023 Dagonite. All rights reserved.
                </p>
            </div>
        </div>
    )
}