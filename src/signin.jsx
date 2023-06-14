import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Title from './components/title';

async function loginUser(credentials) {
  return fetch('http://127.0.0.1:8000/auth/login/', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}

export default function Signin({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await loginUser({
      username,
      password
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
    <div className="w-full mt-[50px] max-w-xs">
      <Title></Title>
      <form onSubmit={handleSubmit} className="bg-white drop-shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input onChange={e => setUserName(e.target.value)} className="bg-slate-50 drop-shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:bg-slate-100" name="username" type="text" placeholder="Username" />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input onChange={e => setPassword(e.target.value)} className="bg-slate-50 drop-shadow-md appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:bg-slate-100" name="password" type="password" placeholder="Password" />
        </div>
        <div className="flex items-center justify-between">
          <button onClick={() => navigate('/register')} className="text-center w-2/5 bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 rounded focus:outline-none focus:shadow-outline" type="button">
            Register
          </button>
          <button className="text-center w-2/5 bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 rounded focus:outline-none focus:shadow-outline" type="submit">
            Sign In
          </button>
        </div>
        <div className="pt-[15px] flex justify-center">
          <span onClick={() => navigate('/passsword-reset')} className="cursor-pointer inline-block align-baseline font-bold text-sm text-sky-500 hover:text-sky-800">
            Forgot Password?
          </span>
        </div>

      </form>
      <p className="text-center text-gray-200 text-xs">
        &copy;2023 Dagonite. All rights reserved.
      </p>
    </div>
  )
}

