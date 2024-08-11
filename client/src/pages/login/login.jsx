import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../../assets/light2.png'; // Import the background image

function Login() {
  return (
    <div
      className="min-h-screen flex items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full ml-16">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold mb-4">Capital Enterprises</h1>
          <h2 className="text-2xl font-bold mb-2">Welcome Back</h2>
        </div>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center text-sm">
              <input className="mr-2 leading-tight" type="checkbox" />
              <span className="text-gray-700">Remember me</span>
            </label>
            <a className="inline-block align-baseline font-bold text-sm text-green-500 hover:text-green-800" href="#">
              Forgot Password?
            </a>
          </div>
          <button
            className="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
            type="button"
          >
            Login
          </button>
          <p className="text-center text-gray-600 text-sm mt-4">
            Don’t have an account? <Link to="/register" className="text-green-500 font-bold">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;

