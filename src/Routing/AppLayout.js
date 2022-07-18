import Header from "../Components/header/header";
import { Outlet } from 'react-router-dom';
import Modal from "../Components/Modal/modal";
import Burger from "../Components/burger/burger";
import { useState } from "react";
import Wallet from "../Components/wallet/wallet";

export const navLinkValue = [
    {
        id: 1, name: 'stats', url: '/stats', disable: false
    },
    {
        id: 2, name: 'brands', url: '/brands', disable: false
    },
    {
        id: 3, name: 'persons', url: '/', disable: false
    },
    {
        id: 4, name: 'alco', url: '/alco', disable: true
    },
    {
        id: 5, name: 'watch', url: '/watch', disable: true
    },
    {
        id: 6, name: 'about', url: '/about', disable: true
    }
]


const AppLayout = () => {
    const [active, setActive] = useState(false)
    const [activeLink, setActiveLink] = useState(navLinkValue[1].id);
    const [isOpen, setOpen] = useState(false);
    const [isOpenWallet, setOpenWallet] = useState(false);

    return (
        <>
            <Header setActive={setActiveLink} active={activeLink} setOpen={setOpen}
                isOpen={isOpen} isOpenWallet={isOpenWallet} setOpenWallet={setOpenWallet} />
            <Burger setActive={setActiveLink} active={activeLink} isOpen={isOpen} />
            <Wallet isOpenWallet={isOpenWallet} />
            <main style={{ position: 'relative' }}>
                <Outlet />
            </main>
            <Modal active={active} setActive={setActive} />

        </>
    )
}
export default AppLayout