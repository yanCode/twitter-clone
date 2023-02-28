import SidebarRow from "./SidebarRow";
import {
    BellIcon,
    BookmarkIcon,
    CameraIcon,
    HashtagIcon,
    HomeIcon,
    InformationCircleIcon,
    ListBulletIcon,
} from "@heroicons/react/24/outline";

function Sidebar() {

    return (<aside>
        <img src="https://links.papareact.com/drq" alt="" className="h-10"/>

        <SidebarRow Icon={HomeIcon} title="Home"/>
        <SidebarRow Icon={HashtagIcon} title="Explore"/>
        <SidebarRow Icon={BellIcon} title="Notifications"/>
        <SidebarRow Icon={InformationCircleIcon} title="Messages"/>
        <SidebarRow Icon={BookmarkIcon} title="Bookmarks"/>
        <SidebarRow Icon={ListBulletIcon} title="Lists"/>
    </aside>)
}

export default Sidebar