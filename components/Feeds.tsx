import { NextPage } from 'next'
import { ArrowPathIcon } from '@heroicons/react/24/outline'
import TwitterBox from './TwitterBox'
import { FeedProps, ITweet } from '../typings'
import Tweet from './Tweet'
import { fetchTweets } from '../utils/fetchTweets'
import { useState } from 'react'
import toast from 'react-hot-toast'

const Feeds: NextPage<FeedProps> = ({ tweets: tweetProps }) => {
  const [tweets, setTweets] = useState<ITweet[]>(tweetProps)
  const handleRefresh = async () => {
    const refreshToast = toast.loading('Refreshing...')
    const tweets = await fetchTweets()
    setTweets(tweets)
    toast.success('Tweets updated!',{
      id:refreshToast
    })
  }
  return (<main className='col-span-7 lg:col-span-5 border-x overflow-auto'>
    <div className='flex items-center justify-between'>
      <h1 className='p-5 pb-0 text-xl font-bold'>Home</h1>
      {/*refresh icon button*/}
      <ArrowPathIcon onClick={handleRefresh}
                     className='mr-5 mt-5 h-8 w-8 cursor-pointer text-twitter transition-all
         duration-500 ease-out active:scale-125 active:rotate-180' />
    </div>
    <div>
      <TwitterBox />
    </div>
    {/*Feeds*/}
    <div>{
      tweets && tweets.map(tweet => (
        <Tweet key={tweet._id} tweet={tweet} />
      ))
    }</div>
  </main>)
}

export default Feeds