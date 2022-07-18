import './style.scss';
import {Link} from 'react-router-dom'
import {navLinkValue} from "../../Routing/AppLayout";

const BurgerLink = ({active, setActive, id, name, url}) => {
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    if (name === 'about') {
        name = 'About Platform'
    }

    return (<Link className='burger__link' to={url} onClick={() => setActive(id)}>
        <label
            className={active === id ? "navigation__text burger__text text__white" : "navigation__text burger__text"}
            htmlFor={name}>
            <input className={`navigation__input real-radio-btn`}
                   name="navBurger" type="checkbox" id={id} checked={active === id}
                   readOnly
            />
            <span className="burger-radio-btn "/>
            {capitalizeFirstLetter(name)}
        </label>
    </Link>)
}

const Burger = ({isOpen, setActive, active}) => {


    return (
        <div className={isOpen ? 'burger__wrapper active' : 'burger__wrapper'}>
            <div className='burger__content'>
                {navLinkValue.map((el) => {
                    return <BurgerLink key={el.id} active={active} setActive={setActive} name={el.name} id={el.id}
                                       url={el.url}/>
                })}
            </div>
        </div>
    )
}


export default Burger;