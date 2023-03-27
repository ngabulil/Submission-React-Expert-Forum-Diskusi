import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import LoginInput from '../components/LoginInput';
import { asyncSetAuthUser } from '../states/authUser/action';

function LoginPage() {
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };

  return (
    <div className='m-auto h-screen flex'>
      <div className='flex w-1/2'>
        <div className='flex w-full mx-4 my-32 p-7 bg-white rounded-xl shadow-lg items-center'>
          <div className='w-full'>
            <div className='text-center font-bold text-2xl'>
              <h2 className='title-auth'>Login</h2>
            </div>
            <div className='wrap-content-auth'>
              <LoginInput login={onLogin} />
              <p>
                Dont have an account?{' '}
                <Link className='text-blue-500 hover:underline' to='/register'>
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='w-1/2 flex bg-sky-900'>
        <div className='w-full flex'>
          <img
            className='m-auto'
            src='https://upload.wikimedia.org/wikipedia/id/e/e0/EVOS_Esports_Logo_%28SVG%29_-_Vector69Com.svg'
            alt=''
          />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
