import { NextPage } from 'next'
import { ArrowPathIcon } from '@heroicons/react/24/outline'
import TwitterBox from './TwitterBox'
import { FeedProps } from '../typings'
import Tweet from './Tweet'

const Feeds: NextPage<FeedProps> = ({ tweets }) => {
  return (<main className='col-span-7 lg:col-span-5 border-x overflow-auto'>
    <div className='flex items-center justify-between'>
      <h1 className='p-5 pb-0 text-xl font-bold'>Home</h1>
      <ArrowPathIcon
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