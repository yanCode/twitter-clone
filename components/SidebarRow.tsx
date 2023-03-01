
import { NextPage } from 'next'
import { IconType } from '../typings'

interface SidebarRowProps {
  Icon: IconType;
  title: string;


}

const SidebarRow: NextPage<SidebarRowProps> = function({ Icon, title }) {
  return (
    <div className='cursor-pointer group flex max-w-fit items-center space-x-3 px-4 py-3 hover:bg-gray-100
       rounded-full transition-all duration-200'>
      <Icon className='h-6 w-6' />
      <p className='hidden md:inline-flex group-hover:text-twitter text-base font-light lg:text-xl'>{title}</p>
    </div>
  )
}

export default SidebarRow