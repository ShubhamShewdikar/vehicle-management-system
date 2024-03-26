import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const email = "demo@gmail.com"
const password = "demo123"

const Login = ({setCurrentUser}) => {
    const navigate = useNavigate();
    const [loginInfo, setLoginInfo] = useState()

    const handleLogin = () => {
        if(loginInfo.email === email && loginInfo.password === password){
            setCurrentUser('Shubham')
            navigate("/")
        }
    }
  return (
    <div className='w-full h-screen flex items-center justify-center'>
        <div className='bg-gradient-to-tr from-pink-400 to-gray-300 px-10 py-20 rounded-3xl'>
        <h1 className='text-3xl font-semibold'> Welcome back to Login Screen </h1>
        <p className="font-medium text-gray-600 mt-5">
            Please enter your details
        </p>
        <div className='mt-5'>
            <label className="font-medium text-lg">Email</label>
            <input 
                className="w-full h-30 bg-transparent border-2 border-gray-100 rounded"
                placeholder='Enter your email'
                onChange={(e)=>setLoginInfo(previousInfo => ({...previousInfo, email: e.target.value}))}
            />
        </div>
        <div className='mt-3'>
            <label className="font-medium text-lg">Password</label>
            <input 
                className='w-full bg-transparent border-2 border-gray-100 rounded'
                placeholder='Enter your password'
                onChange={(e)=>setLoginInfo(previousInfo => ({...previousInfo, password: e.target.value}))}
            />
        </div>
        <div className='flex justify-between'>
            <div className='mt-4'>
                <input 
                    type="checkbox"
                    id="login_checkbox"
                />
                <label className="ml-2 font-medium text-base">remember</label>
            </div>
            <button className='text-base font-medium text-violet-500 mt-4'>Forgot Password</button>
        </div>
        <div className='flex mt-8 flex-col gap-y-4'>
            <button className='active:scale-[.95] p-3 text-bold text-white bg-violet-500 rounded-xl' onClick={handleLogin}>
                Sign in
            </button>
        </div>
        </div>
    </div>
    )
}

export default Login