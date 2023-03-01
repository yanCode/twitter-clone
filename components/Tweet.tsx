import { NextPage } from 'next'
import { TwitterProps } from '../typings'
import { ChatBubbleBottomCenterIcon, HeartIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'
import { UserPlusIcon } from '@heroicons/react/24/solid'
import ReactTimeAgo from 'react-time-ago'

import TimeAgo from 'javascript-time-ago'

import en from 'javascript-time-ago/locale/en'
TimeAgo.addDefaultLocale(en)



const Tweet: NextPage<TwitterProps> = ({ tweet }) => {
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
      <footer className='mt-5 flex justify-between'>
        <div className='flex cursor-pointer items-center justify-center gap-3 text-gray-400'>
          <ChatBubbleBottomCenterIcon className='w-5 h-5' /> 5
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

    </div>
  )
}

export default Tweet