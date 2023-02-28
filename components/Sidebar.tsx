import SidebarRow from './SidebarRow'
import {
  BellIcon,
  BookmarkIcon,
  HashtagIcon,
  HomeIcon,
  InformationCircleIcon,
  ListBulletIcon,
  UserIcon,
} from '@heroicons/react/24/outline'

function Sidebar() {

  return (<aside>
    <img src='https://links.papareact.com/drq' alt='' className='h-10' />

    <SidebarRow Icon={HomeIcon} title='Home' />
    <SidebarRow Icon={HashtagIcon} title='Explore' />
    <SidebarRow Icon={BellIcon} title='Notifications' />
    <SidebarRow Icon={InformationCircleIcon} title='Messages' />
    <SidebarRow Icon={BookmarkIcon} title='Bookmarks' />
    <SidebarRow Icon={ListBulletIcon} title='Lists' />
    <SidebarRow Icon={UserIcon} title='Sign In' />
  </aside>)
}

export default Sidebar