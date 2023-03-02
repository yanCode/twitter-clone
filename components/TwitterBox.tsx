import { CalendarIcon, FaceSmileIcon, MagnifyingGlassIcon, MapPinIcon, PhotoIcon } from '@heroicons/react/24/outline'
import React, { useRef, useState } from 'react'
import { useSession } from 'next-auth/react'
import { TweetBody } from '../typings'
import { fetchTweets } from '../utils/fetchTweets'

const TwitterBox = function() {

  const [input, setInput] = useState<string>('')
  const { data: session } = useSession()
  const [image, setImage] = useState<string>('')
  const [isImageBoxOpen, setIsImageBoxOpen] = useState<boolean>(false)
  const imageInputRef = useRef<HTMLInputElement>(null)
  const addImageToTweet = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    if (!imageInputRef.current?.value) return
    setImage(imageInputRef.current?.value)
    imageInputRef.current.value = ''
    setIsImageBoxOpen(false)
  }
  const postTweet = async () => {
    const tweetBody: TweetBody = {
      text: input,
      username: session?.user?.name || 'Unknown User',
      profileImg: session?.user?.image || 'https://links.papareact.com/gll',
      image: image
    }
    const result = await fetch('/api/addTweet', {
      body: JSON.stringify(tweetBody),
      method:'POST',
    })
    const json = await result.json();

  }
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    postTweet()
  }

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
              <PhotoIcon onClick={() => {
                setIsImageBoxOpen(!isImageBoxOpen)
              }} className='h-5 w-5 cursor-pointer transition-transform
              duration-150 ease-out hover:scale-150' />
              <MagnifyingGlassIcon className='h-5 w-5' />
              <FaceSmileIcon className='h-5 w-5' />
              <CalendarIcon className='h-5 w-5' />
              <MapPinIcon className='h-5 w-5' />
            </div>
            {/*icons*/}

            <button
              disabled={!input || !session}
              type='submit'
              onClick={handleSubmit}
              className='rounded-full bg-twitter px-5 py-2 font-bold
              text-white disabled:opacity-40'>
              Tweet
            </button>

          </div>
          {isImageBoxOpen
            && (<form className='mt-5 rounded-lg flex gap-2 bg-twitter/80 py-2 px-4 box-border'>
              <input type='text'
                     ref={imageInputRef}
                     className='flex-1 bg-transparent outline-none placeholder:text-white text-gray-200'
                     placeholder='Please input image URL' />
              <button className='font-bold text-white' onClick={addImageToTweet}>Add image</button>
            </form>)
          }{
          image &&
          <img src={image}
               className=' mt-5 w-full max-h-40 object-contain rounded-lg shadow-lg' />
        }
        </form>
      </div>
    </section>
  )
}
export default TwitterBox