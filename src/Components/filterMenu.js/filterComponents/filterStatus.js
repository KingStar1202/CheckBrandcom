import { useState } from "react"


import './style.scss'
import {dataStatus} from './dataStatus/dataFilter'

const FilterStatus = () => {

  

    const [isColor, setColor] = useState(false)

            const HandleColor = index => {
                if(isColor === index) {
                    
                    return setColor(null)
                }
                console.log(isColor)
                setColor(index)
            }
    return(
        <>
            <div className="accordion-content_main">
                <div className="accordion-content_main_list">
                {dataStatus.map((item,index) => {
                    return(
                        <input
                        style={isColor ? {border: '2px solid white', background: '#4896F9'}:{border: '2px solid #184588', background: 'transparent'}}
                        readOnly
                        placeholder={item.text}
                        onClick={()=> {HandleColor(index)}}
                        />
                    )
                })}
                </div>
            </div>
        </>
    )
}
export default FilterStatus