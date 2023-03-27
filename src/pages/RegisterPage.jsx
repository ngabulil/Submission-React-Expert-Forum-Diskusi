import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { asyncRegisterUser } from '../states/users/action';
import RegisterInput from '../components/RegisterInput';

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));

    navigate('/');
  };

  return (
    <div className='m-auto h-screen flex flex-row-reverse'>
      <div className='flex w-1/2'>
        <div className='flex w-full mx-4 my-32 p-7 bg-white rounded-xl shadow-lg items-center'>
          <div className='w-full'>
            <div className='text-center font-bold text-2xl'>
              <h2 className=''>Register</h2>
            </div>
            <div className='wrap-content-auth'>
              <RegisterInput register={onRegister} />
              <p>
                Already have an account?{' '}
                <Link className='text-blue-500 hover:underline' to='/login'>
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='w-1/2 flex bg-black'>
        <div className='w-full flex'>
          <img className='m-auto' src='https://jurnalapps.co.id/assets/img/content/1573459793_m1-11-1.jpg' alt='' />
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
