
import { SubSecond } from "../ContentGroupsArrays/subGroupSecond"

import './style.scss'

const SubFilterSecond = () => {
    return (
        <div className="sub__second ">
            {SubSecond.map((item, index) => {
                return (
                    <div className="subfilter__second" key={item.subname.toString()}>
                        <div className="subfilter__second-main">
                            <div className="subfilter__second-content filter__item">
                                <img src={item.icon} />
                                <div className="subfilter__second-content-name">{item.subname}</div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>


    )
}
export default SubFilterSecond