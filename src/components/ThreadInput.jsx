import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function ThreadInput({ addThread }) {
  const [title, onTitleChange] = useInput('');
  const [category, onCategoryChange] = useInput('');
  const [body, onBodyChange] = useInput('');

  return (
    <div className='wrapper'>
      <div className='flex flex-col mb-3'>
        <label className='font-semibold'>Title</label>
        <input
          placeholder='Masukkan Judul'
          className='border-2 border-black rounded-md px-2 py-1 text-sm'
          type='text'
          value={title}
          onChange={onTitleChange}
        />
      </div>
      <div className='flex flex-col mb-3'>
        <label className='font-semibold'>Category</label>
        <input
          placeholder='Masukkan Kategori'
          className='border-2 border-black rounded-md px-2 py-1 text-sm'
          type='text'
          value={category}
          onChange={onCategoryChange}
        />
      </div>
      <div className='flex flex-col mb-2'>
        <label className='font-semibold'>Content</label>
        <textarea
          placeholder='Masukkan Isi Diskusi'
          className='border-2 border-black rounded-md px-2 py-1 text-sm'
          value={body}
          onChange={onBodyChange}
          rows={5}
        ></textarea>
      </div>
      <button onClick={() => addThread({ title, category, body })} className='bg-sky-900 text-white w-full rounded-md p-1'>
        Create
      </button>
    </div>
  );
}

ThreadInput.propTypes = {
  addThread: PropTypes.func.isRequired,
};

export default ThreadInput;
