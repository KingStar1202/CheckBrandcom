import React from "react";
import { Link } from "react-router-dom";

export const NavCheckbox = ({ active, setActive, url, name, id, disable, setDisable, handleMenu }) => {
    return (
        <Link className='navigation__link' to={url} style={disable ? { display: 'none' } : { display: 'block' }}>
            <label
                onClick={(e) => {
                    setActive(id)
                    handleMenu()
                    setDisable(id)
                }}
                className={active === id ? "navigation__text text__white" : "navigation__text"}
                htmlFor={name}>{name}
                <input className="navigation__input real-radio-btn" name="nav" type="checkbox"
                    id={id} checked={active === id} readOnly />
                <span className="custom-radio-btn" />
            </label>
        </Link>
    )
}

