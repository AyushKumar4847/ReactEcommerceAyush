import React, { useState } from 'react';

export const Login = () => {
  // State to track the current form view (Login or Sign Up)
  const [currentState, setCurrentState] = useState('Login');

  // Handler for form submission (currently does nothing)
  const onSubmitHandler = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
  };

  return (
    <form
      onSubmit={onSubmitHandler} // Trigger form submission handler
      className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 text-gray-800'
    >
      {/* Title section with dynamic text */}
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p> {/* Dynamic text: Login or Sign Up */}
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' /> {/* Underline */}
      </div>

      {/* Conditional rendering for the name input (only shows if Sign Up is selected) */}
      {currentState === 'Login' ? (
        ''
      ) : (
        <input
          type='text'
          className='w-full mb-3 px-3 py-2 border border-gray-800'
          placeholder='Name'
        />
      )}

      {/* Common email and password fields */}
      <input
        className='w-full mb-3 px-3 py-2 border border-gray-800'
        type='email'
        placeholder='Email'
      />
      <input
        className='w-full mb-3 px-3 py-2 border border-gray-800'
        type='password'
        placeholder='Password'
      />

      {/* Forgot password and toggle between Login and Sign Up */}
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Forgot your password</p>
        {/* Toggle between Login and Sign Up */}
        {currentState === 'Login' ? (
          <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer'>
            Create Account
          </p>
        ) : (
          <p onClick={() => setCurrentState('Login')} className='cursor-pointer'>
            Login Here
          </p>
        )}
      </div>

      {/* Submit button with dynamic text based on the current state */}
      <button className='bg-black text-white font-light px-8 py-2 mt-4'>
        {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
      </button>
    </form>
  );
};
