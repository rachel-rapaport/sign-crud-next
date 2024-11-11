"use client"
import React, { useState } from 'react'
import useUserStore from '../store/user';
import { UserSchemaProps } from '../types/userSchemaProps';
import { signInUser } from '../server/user';


const SignIn = () => {
    const [user, setUser] = useState<Partial<UserSchemaProps>>({
      name: '',
      email: '',
      password: '',
    });
    const [error, setError] = useState<string | null>(null);
    // let curentUser=useUserStore((state)=>state.curentUser);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setUser({ ...user, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();    
        const result = await signInUser(user as UserSchemaProps);
        console.log("result",result);
        


        console.log("fghjkl",result.response.data.massage);
        
    // if (result.response.data.message === "User not found") {
    //     alert("המשתמש לא נמצא");
    // } else if (result.response.data.message === "Invalid password") {
    //     alert("הסיסמא אינה נכונה");
    // } else if (result.name) {
    //     alert(`שלום, ${result.name}`);
    // }
    }
       
  return (
    <div>
      <form className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-8 space-y-6" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold text-center text-gray-700">Sign In</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
        <div>
          <label className="block text-gray-600 font-semibold mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
            <label className="block text-gray-600 font-semibold mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type='submit' 
            className="w-full py-3 mt-4 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Create Account
            </button>
      </form>
    </div>
  )
}

export default SignIn

