import { NextPage } from 'next'
import { IComment, TwitterProps } from '../typings'
import { ChatBubbleBottomCenterIcon, HeartIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'
import { UserPlusIcon } from '@heroicons/react/24/solid'
import { fetchComments } from '../utils/fetchComments'
import TimeAgo from 'react-timeago'
import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'


const Tweet: NextPage<TwitterProps> = ({ tweet }) => {
  const { data: session } = useSession()
  const [comments, setComments] = useState<IComment[]>([])
  const [commentInput, setCommentInput] = useState<string>('')
  const [commentBoxVisible, setCommentBoxVisible] = useState(false)
  const refreshComments = async () => {
    const comments: IComment[] = await fetchComments(tweet._id)
    setComments(comments)
  }
  useEffect(() => {
    refreshComments()
  }, [])
  return (
    <div className='flex flex-col gap-3 border-y p-5 border-gray-100'>
      <div className='flex  gap-3'>
        <img src={tweet.profileImg} alt=''
             className='h-10 w-10 rounded-full  object-cover ' />
        <div className='flex-1'>
          <div className='flex items-center gap-1'>
            <p className='mr-1 font-bold'>{tweet.username}</p>
            <p className='hidden text-sm text-gray-500 sm:inline'>
              @{tweet.username.replace(/\s+/g, '').toLowerCase()} .
            </p>
            <TimeAgo date={Date.parse(tweet._createdAt)} className='text-sm text-gray-500' />
          </div>
          <p className='pt-1'>{tweet.text}</p>
          {tweet.image && (
            <img src={tweet.image} alt='' className='m-5 object-contain w-full  max-h-60 rounded-lg shadow-sm mb-1' />
          )}
        </div>

      </div>
      {/*footer column of icons, share/like, etc.*/}
      <footer className='mt-5 flex justify-around'>
        <div
          onClick={() => {
            setCommentBoxVisible(!commentBoxVisible)
          }} className='flex cursor-pointer items-center justify-center gap-3 text-gray-400'>
          <ChatBubbleBottomCenterIcon
            className='w-5 h-5' /> {comments.length}
        </div>
        <div className='flex cursor-pointer items-center justify-center gap-3 text-gray-400'>
          <HeartIcon className='w-5 h-5' /> 12
        </div>
        <div className='flex cursor-pointer items-center justify-center gap-3 text-gray-400'>
          <ShieldCheckIcon className='w-5 h-5' />
        </div>
        <div className='flex cursor-pointer items-center justify-center gap-3 text-gray-400'>
          <UserPlusIcon className='w-5 h-5' />
        </div>
      </footer>
      {/*comment box*/}
      {commentBoxVisible && session && (
        <form className='mt-3 flex gap-3'>
          <input
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
            className='flex-1 outline-none rounded-lg bg-gray-100 p-2'
            type='text'
            placeholder='write a comment' />
          <button disabled={!commentInput} className='text-twitter disabled:text-gray-500'>Post</button>
        </form>
      )}
      {/*comments length*/}
      {comments?.length > 0 && (
        <section className='my-2 mt-5 max-h-44 space-y-5  border-t border-gray-100 p-5'>
          {comments.map(comment => (
            <div key={comment._id} className='relative flex gap-2'>
              <img src={comment.profileImage} className='h-7 mt-2 w-7 rounded-full object-cover' alt='' />
              <hr className='absolute left-3.5 top-10 h-8 border-x border-twitter/20' />
              <div>
                <div className='flex items-center gap-1'>
                  <p>{comment.username}</p>
                  <p className='hidden text-sm text-gray-500 lg:inline'>
                    @{comment.username.replace(/\s+/g, '').toLowerCase()} .
                  </p>
                  <TimeAgo className='text-sm text-gray-500' date={Date.parse(comment._createdAt)} />
                  1 month ago.
                </div>
                <p className='text-gray-600'>{comment.comment}</p>
              </div>

            </div>
          ))}
        </section>
      )}
    </div>
  )
}

export default Tweet