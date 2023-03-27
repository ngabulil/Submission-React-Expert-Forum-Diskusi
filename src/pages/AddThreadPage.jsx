import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ThreadInput from '../components/ThreadInput';
import { asyncAddThread } from '../states/threads/action';

function AddThreadPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onAddThread = ({ title, body, category }) => {
    dispatch(asyncAddThread({ title, body, category }));

    navigate('/');
  };

  return (
    <div className='main-page mt-4'>
      <div className='w-4/5 mx-auto p-8 bg-white rounded-xl shadow-xl'>
        <h1 className='text-2xl font-bold mb-5'>Buat Diskusi Baru</h1>
        <ThreadInput addThread={onAddThread} />
      </div>
    </div>
  );
}

export default AddThreadPage;
