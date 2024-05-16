import React, { useState } from 'react';
import { LoginApiMarcom } from '../../ZustandStore/Login';

function LoginMarcomm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { LoginApi } = LoginApiMarcom()

    const handleLogin = async () => {
        await LoginApi(username, password)
    };

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='bg-red-200 p-8 rounded-lg shadow-lg'>
                <h2 className='text-2xl font-semibold mb-4'>Login</h2>
                <div className='mb-4'>
                    <label htmlFor='username' className='block mb-1'>Username</label>
                    <input
                        type='text'
                        id='username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className='w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500'
                    />
                </div>
                <div className='mb-4'>
                    <label htmlFor='password' className='block mb-1'>Password</label>
                    <input
                        type='password'
                        id='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500'
                    />
                </div>
                <button
                    onClick={handleLogin}
                    className='w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-300'
                >
                    Login
                </button>
            </div>
        </div>
    );
}

export default LoginMarcomm;
