import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import building from '../data/building1.png';
import logo from '../data/logo.png';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('resident@themonroe.com');
  const [password, setPassword] = useState('password123');

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      email === 'resident@themonroe.com' &&
      password === 'password123'
    ) {
      navigate('/dashboard');
    } else {
      alert('Use the demo credentials shown below.');
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${building})`,
      }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div
        className="
          relative
          z-10
          w-full
          max-w-md
          mx-4
          p-10
          rounded-[2rem]
          bg-white/10
          backdrop-blur-xl
          border
          border-white/20
          shadow-2xl
        "
      >
        <div className="flex flex-col items-center">
          <img
            src={logo}
            alt="The Monroe"
            className="w-16 h-16 object-contain mb-4"
          />

          <h1
            className="text-white text-4xl text-center"
            style={{
              fontFamily: 'Playfair Display, serif',
            }}
          >
            The Monroe
          </h1>

          <p className="text-gray-200 mt-2 text-3xl text-center">
            Ledger
          </p>
        </div>

        <form onSubmit={handleLogin} className="mt-8">
          <div>
            <label className="text-white text-sm font-medium">
              Email Address
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="
                w-full
                mt-2
                px-4
                py-3
                rounded-xl
                bg-white/20
                border
                border-white/30
                text-white
                placeholder-gray-300
                outline-none
              "
            />
          </div>

          <div className="mt-5">
            <label className="text-white text-sm font-medium">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="
                w-full
                mt-2
                px-4
                py-3
                rounded-xl
                bg-white/20
                border
                border-white/30
                text-white
                placeholder-gray-300
                outline-none
              "
            />
          </div>

          <div className="flex justify-between items-center mt-5">
            <label className="flex items-center gap-2 text-sm text-gray-200">
              <input type="checkbox" defaultChecked />
              Remember me
            </label>

            <button
              type="button"
              className="text-sm text-white hover:text-gray-200"
            >
              Forgot Password?
            </button>
          </div>

          <button
            type="submit"
            className="
              w-full
              mt-8
              py-3
              rounded-xl
              font-semibold
              bg-white
              text-gray-900
              hover:bg-gray-100
              transition-all
            "
          >
            Sign In
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-gray-200">
          Demo Login
        </div>

        <div className="mt-2 text-center text-xs text-gray-300">
          resident@themonroe.com
          <br />
          password123
        </div>
      </div>
    </div>
  );
};

export default Login;