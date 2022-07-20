import './style.scss'
import logo from '../../assets/image/header_logo.png';
import wallet from '../../assets/image/wallet.png'
import profile from '../../assets/image/profile.png'
import { Link } from 'react-router-dom'
import { NavCheckbox } from "./NavCheckbox";
import { navLinkValue } from "../../Routing/AppLayout";
import { useCallback, useState } from "react";


const Header = ({ setActive, active, setOpen, isOpen, setOpenWallet, isOpenWallet }) => {

    const [menu, setMenu] = useState(navLinkValue);

    const handleMenu = () => {
        const item = menu.shift();
        menu.push(item)
    }

    const setDisable = (id) => {
        // e.preventDefault()
        if (!menu.find(i => i.id === id + 1)) {
            menu.find(i => i.id === 1).disable = false;
            menu.find(i => i.id === id - 2).disable = true;
        } else if (id === 1) {
            console.log('2')
            console.log(menu)
            menu.find(i => i.id === 6).disable = false;
            menu.find(i => i.id === 5).disable = true;
            menu.find(i => i.id === 2).disable = false;
        } else if (id === 2) {
            menu.find(i => i.id === id + 1).disable = false;
            menu.find(i => i.id === 6).disable = true;
        } else {
            console.log(id)
            menu.find(i => i.id === id + 1).disable = false;
            menu.find(i => i.id === id - 2).disable = true;
        }
    }

    return (
        <div className="navigation">
            <div className="navigation__blur"></div>
            <div className="navigation__wrapper">
                <Link className='navigation__link' to='/about' onClick={() => setActive('about')}>
                    <div className='navigation__logo'>
                        <img className='navigation__icon' src={logo} alt={"Logotype Company CheckBrand.com"} />
                        <p className='navigation__label'>CheckBrandcom</p>
                    </div>
                </Link>
                <div className='navigation__links'>
                    {menu.map((el) => {
                        return (
                            <NavCheckbox key={el.id} name={el.name} url={el.url} id={el.id} active={active}
                                setActive={setActive} disable={el.disable} setDisable={setDisable} handleMenu={handleMenu} />
                        )
                    })}
                </div>
                <div className='navigation__burger'>
                    <div className='navigation__profile'>
                        <img className='navigation__profile-icon' src={profile} alt={'profile'} />
                    </div>
                    <div className={isOpenWallet ? 'navigation__wallet active' : 'navigation__wallet'}
                        onClick={() => setOpenWallet(!isOpenWallet)}>
                        <img className='navigation__wallet-icon' src={wallet} alt={'Wallet Btn'} />
                    </div>
                    {/* <div className={isOpen ? ' burger-btn active' : 'burger-btn'} onClick={() => setOpen(!isOpen)}>
                        <span />
                    </div> */}
                </div>
            </div>
        </div>
    )


}


export default Header