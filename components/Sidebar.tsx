import SidebarRow from './SidebarRow'
import {
  BellIcon,
  BookmarkIcon,
  EllipsisHorizontalCircleIcon,
  EnvelopeIcon,
  HashtagIcon,
  HomeIcon,
  RectangleStackIcon,
  UserIcon,
} from '@heroicons/react/24/outline'
import { NextPage } from 'next'
import { signIn, signOut, useSession } from 'next-auth/react'


const Sidebar: NextPage = function() {

  const { data: session } = useSession()

  return (<aside className='flex flex-col items-center col-span-2 px-4 md:items-start'>
    <img src='https://links.papareact.com/drq' alt='' className='h-10 m-3' />

    <SidebarRow Icon={HomeIcon} title='Home' />
    <SidebarRow Icon={HashtagIcon} title='Explore' />
    <SidebarRow Icon={BellIcon} title='Notifications' />
    <SidebarRow Icon={EnvelopeIcon} title='Messages' />
    <SidebarRow Icon={BookmarkIcon} title='Bookmarks' />
    <SidebarRow Icon={RectangleStackIcon} title='Lists' />
    <SidebarRow onClick={session ? signOut : signIn} Icon={UserIcon} title={session ? 'Logout' : 'Login'} />
    <SidebarRow Icon={EllipsisHorizontalCircleIcon} title='More' />
  </aside>)
}

export default Sidebar