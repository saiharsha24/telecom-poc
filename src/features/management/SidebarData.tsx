import {AiOutlineUser} from 'react-icons/ai';
import { MdSubscriptions,MdMiscellaneousServices,MdOutlinePayment } from "react-icons/md";
import { SidebarItem } from './SidebarItem';


export const SidebarData: SidebarItem[] = [
    {
        title: 'customerprofiles',
        path: '/management/customerprofiles',
        icon:<AiOutlineUser/>
        
    },
    {
        title: 'subscriptions',
        path: '/management/subscriptions',
        icon: <MdSubscriptions />
    },
    {
        title: 'serviceorders',
        path: '/management/serviceorders',
        icon: <MdMiscellaneousServices />
    },
    {
        title: 'payments',
        path: '/management/payments',
        icon: <MdOutlinePayment  />
    },
];