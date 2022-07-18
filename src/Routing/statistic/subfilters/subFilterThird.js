import {SubThird} from "../ContentGroupsArrays/subGroupThird"

import './style.scss'

const SubFilterThird = () => {
    return (
        <div className="sub__third ">
            {SubThird.map((item, index) => {
                return (
                    <div className="subfilter__third" key={item.subname.toString()}>
                        <div className="subfilter__third-main">
                            <div className="subfilter__third-content">
                                <img style={{width:'22px'}} src={item.icon}/>
                                <div className="subfilter__third-content-name">{item.subname}</div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>


    )
}
export default SubFilterThird