import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function LoginInput({ login }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <form>
      <div className='flex flex-col mt-2'>
        <label className='font-bold'>Email</label>
        <input
          className='p-2 rounded-md border-2 border-solid border-black'
          type='email'
          placeholder='Masukkan Email'
          value={email}
          onChange={onEmailChange}
        />
      </div>
      <div className='flex flex-col mt-2'>
        <label className='font-bold'>Password</label>
        <input
          className='p-2 rounded-md border-2 border-solid border-black'
          type='password'
          placeholder='Masukkan Password'
          value={password}
          onChange={onPasswordChange}
        />
      </div>
      <button type='button' className='mt-4 py-2 w-full bg-sky-800 text-white rounded-lg' onClick={() => login({ email, password })}>
        Login
      </button>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
