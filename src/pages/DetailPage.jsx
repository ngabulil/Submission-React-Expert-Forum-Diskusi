import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { asyncReceiveThreadDetail, asyncAddThreadComment } from '../states/threadDetail/action';
import ThreadDetail from '../components/ThreadDetail';
import ThreadCommentInput from '../components/ThreadCommentInput';
import ThreadCommentList from '../components/ThreadCommentList';

function DetailPage() {
  const { id } = useParams();
  const { threadDetail = null } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  const onAddCommentThread = ({ content }) => {
    dispatch(asyncAddThreadComment({ threadId: id, content }));
  };

  console.log({ threadDetail });

  if (!threadDetail) {
    return null;
  }

  return (
    <div className='w-4/5 mx-auto my-5 px-8 py-6 pb-8 border-2 border-solid border-sky-600 rounded-xl bg-white shadow-xl'>
      <ThreadDetail {...threadDetail} />
      <ThreadCommentInput addCommentThread={onAddCommentThread} />
      <p className='text-xl font-semibold mb-4 mt-8'>Comments</p>
      <ThreadCommentList comments={threadDetail.comments} />
    </div>
  );
}

export default DetailPage;
