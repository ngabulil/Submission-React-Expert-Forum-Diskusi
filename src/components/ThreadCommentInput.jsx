import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function ThreadCommentInput({ addCommentThread }) {
  const [content, onContentChange] = useInput('');

  return (
    <div>
      <p className='font-medium text-lg'>Comment</p>
      <textarea
        value={content}
        onChange={onContentChange}
        className='w-full border-2 border-solid border-black rounded-md p-2'
        rows={5}
      ></textarea>
      <button className='w-full bg-sky-900 text-white p-1 rounded-md hover' onClick={() => addCommentThread({ content })}>
        Send
      </button>
    </div>
  );
}

ThreadCommentInput.propTypes = {
  addCommentThread: PropTypes.func.isRequired,
};

export default ThreadCommentInput;
