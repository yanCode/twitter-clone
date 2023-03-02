import { CalendarIcon, FaceSmileIcon, MagnifyingGlassIcon, MapPinIcon, PhotoIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { useSession } from 'next-auth/react'

const TwitterBox = function() {
  const [input, setInput] = useState<string>('')
  const { data: session } = useSession()
  return (<section className='flex gap-2 p-5'>
      <img src={session?.user?.image ?? 'https://links.papareact.com/gll'} alt='avatar'
           className='h-14 w-14 object-cover rounded-full mt-4' />
      <div className='flex flex-1 items-center pl-2'>
        <form action='' className='flex flex-1 flex-col'>
          <input type='text' placeholder="What's Happening"
                 value={input}
                 onChange={e => setInput(e.target.value)}
                 className='outline-none  h-24 w-full text-xl placeholder:text-xl' />
          <div className='flex items-center'>
            {/*icons*/}
            <div className='flex gap-2 text-twitter flex-1'>
              <PhotoIcon className='h-5 w-5 cursor-pointer transition-transform
              duration-150 ease-out hover:scale-150' />
              <MagnifyingGlassIcon className='h-5 w-5' />
              <FaceSmileIcon className='h-5 w-5' />
              <CalendarIcon className='h-5 w-5' />
              <MapPinIcon className='h-5 w-5' />
            </div>
            {/*icons*/}

            <button
              disabled={!input || !session}
              className='rounded-full bg-twitter px-5 py-2 font-bold
              text-white disabled:opacity-40'>
              Tweet
            </button>

          </div>
        </form>
      </div>
    </section>
  )
}
export default TwitterBox