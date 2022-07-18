import { SubFirst } from "../ContentGroupsArrays/subGroupFirst"

import './style.scss'

const SubFilterFirst = () => {
    return(
        <div className="sub ">
            {SubFirst.map((item, index) => {
                return(
                    <div className="subfilter" key={item.subname.toString()}>
                        <div className="subfilter-main ">
                            <div className="subfilter-content subfilter-content__second">
                                {item.subname}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
        
      
    )
}
export default SubFilterFirst