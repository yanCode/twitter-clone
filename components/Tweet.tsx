import { NextPage } from 'next'
import { IComment, TwitterProps } from '../typings'
import { ChatBubbleBottomCenterIcon, HeartIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'
import { UserPlusIcon } from '@heroicons/react/24/solid'
import ReactTimeAgo from 'react-time-ago'

import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import { fetchComments } from '../utils/fetchComments'
import { useEffect, useState } from 'react'

TimeAgo.addDefaultLocale(en)


const Tweet: NextPage<TwitterProps> = ({ tweet }) => {
  const [comments, setComments] = useState<IComment[]>([])
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

            <ReactTimeAgo
              className='text-sm text-gray-599'
              date={Date.parse(tweet._createdAt)}
              locale='en' />
          </div>
          <p className='pt-1'>{tweet.text}</p>
          {tweet.image && (
            <img src={tweet.image} alt='' className='m-5  max-h-60 rounded-lg shadow-sm mb-1' />
          )}
        </div>

      </div>
      {/*footer column of icons, share/like, etc.*/}
      <footer className='mt-5 flex justify-around'>
        <div className='flex cursor-pointer items-center justify-center gap-3 text-gray-400'>
          <ChatBubbleBottomCenterIcon className='w-5 h-5' /> {comments.length}
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
      {comments?.length > 0 && (
        <section className='my-2 mt-5 max-h-44 space-y-5  border-t border-gray-100 p-5'>
          {comments.map(comment => (
            <div key={comment._id} className='relative flex gap-2'>
              <img src={comment.profileImage} className='h-7 mt-2 w-7 rounded-full object-cover' alt='' />
              <hr className="absolute left-3.5 top-10 h-8 border-x border-twitter/20"/>
              <div>
                <div className='flex items-center gap-1'>
                  <p>{comment.username}</p>
                  <p className='hidden text-sm text-gray-500 lg:inline'>
                    @{comment.username.replace(/\s+/g, '').toLowerCase()} .
                  </p>
                  <ReactTimeAgo
                    className='text-sm text-gray-500'
                    date={Date.parse(comment._createdAt)}
                    locale='en' />
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