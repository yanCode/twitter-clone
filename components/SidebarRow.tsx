import { IconType } from './types'
import { NextPage } from 'next'

interface SidebarRowProps {
  Icon: IconType;
  title: string;


}

const SidebarRow: NextPage<SidebarRowProps> = function({ Icon, title }) {
  return (
    <div className='group flex max-w-fit items-center space-x-3 px-4 py-3 hover:bg-gray-100
       rounded-full transition-all duration-200'>
      <Icon className='h-6 w-6' />
      <p className='group-hover:text-twitter'>{title}</p>
    </div>
  )
}

export default SidebarRow