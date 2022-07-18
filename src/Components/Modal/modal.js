import {  useState } from "react"
import cross from '../../assets/image/cross.png'
import './modal.scss'


const Modal = ({active, setActive, children}) => {
   
    return(
        <>
           <div className={active ? 'modal active': 'modal'} onClick={() => setActive(false)}>
            <div className={active ? 'modal-main active': 'modal-main'} onClick={(e) => e.stopPropagation()}>
                <div className="modal-title">
                    <h1>registration</h1>
                    <form className="modal-inputs">
                        <input className="modal-input" type='text' placeholder="Enter the received password from sms" />
                        <input className="modal-input" type='email' placeholder="Enter your e-mail" />
                        <input className="modal-input" type='text' placeholder="Your first name" />
                        <input className="modal-input" type='text' placeholder="Your last name" />
                        
                    </form>
                    <div className="modal-close"><img src={cross} onClick={ () => { setActive(false) }} /></div>
                </div>
                
               
            </div>
        </div>
        </>
    )
}
export default Modal