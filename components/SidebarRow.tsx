import {IconType} from "./types";

interface SidebarRowProps {
    Icon: IconType
    title: string


}

function SidebarRow({Icon, title}: SidebarRowProps) {
    return (
        <div className="group
    flex
    items-center
    space-x-3
    px-4
    py-3
    hover:bg-gray-100
    rounded-full transition-all duration-200">
        <Icon className='h-6 w-6'/>
        <p className="group-hover:text-blue-100">{title}</p>
    </div>)
}

export default SidebarRow