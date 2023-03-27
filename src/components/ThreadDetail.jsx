import React from 'react';
import PropTypes from 'prop-types';
import { postedAt } from '../utils';

function ThreadDetail({ title, body, createdAt, owner, category }) {
  return (
    <div>
      <h1 className='text-3xl font-bold'>{title}</h1>
      <p className='text-blue-600 text-lg'>#{category}</p>
      <div className='flex items-center gap-1 mt-4 mb-2'>
        <img className='rounded-full w-8' src={owner.avatar} />
        <p className='font-semibold'>{owner.name}</p>
      </div>
      <p dangerouslySetInnerHTML={{ __html: body }}></p>
      <div className='flex justify-end'>
        <p>{postedAt(createdAt)}</p>
      </div>
    </div>
  );
}

const ownerShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

ThreadDetail.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
  category: PropTypes.string.isRequired,
};

export default ThreadDetail;
