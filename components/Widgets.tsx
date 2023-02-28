import { NextPage } from 'next'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

import { TwitterTimelineEmbed } from 'react-twitter-embed'

const Widgets: NextPage = function() {
  return (<section className='col-span-2 mt-2  px-2  hidden lg:block' >
    {/*search bar starts*/}
    <div className='mt-2 flex items-center space-x-2 bg-gray-100 p-3 rounded-full mb-5'>
      <MagnifyingGlassIcon className='h-5 w-5 text-gray-400' />
      <input type='text' placeholder='Search Twitter' className='bg-transparent outline-none flex-1' />
    </div>
    {/*search bar ends*/}
    <TwitterTimelineEmbed   sourceType="profile" screenName="tinyfool" options={{height:1000}}/>
  </section>)
}

export default Widgets