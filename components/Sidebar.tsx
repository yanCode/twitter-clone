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

const Sidebar: NextPage<never> = function() {

  return (<aside className='flex flex-col items-start'>
    <img src='https://links.papareact.com/drq' alt='' className='h-10' />

    <SidebarRow Icon={HomeIcon} title='Home' />
    <SidebarRow Icon={HashtagIcon} title='Explore' />
    <SidebarRow Icon={BellIcon} title='Notifications' />
    <SidebarRow Icon={EnvelopeIcon} title='Messages' />
    <SidebarRow Icon={BookmarkIcon} title='Bookmarks' />
    <SidebarRow Icon={RectangleStackIcon} title='Lists' />
    <SidebarRow Icon={UserIcon} title='Sign In' />
    <SidebarRow Icon={EllipsisHorizontalCircleIcon} title='More' />
  </aside>)
}

export default Sidebar