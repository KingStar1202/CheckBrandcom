import Accordion from "./Accordion"
import { FilterData } from "./util/filterData"
import filterIcon from './filter-icon.svg'

import './style.scss'


const MenuFilter = ({children,activeFilter,SetActiveFilter}) =>{
    return(
        <>
            <div className={activeFilter ? "filter active" : 'filter'}>
                <div className="filter-main">
                    <div className="filter-header">
                        <div className="filter-list">
                            <div style={{display: 'flex'}}>
                                <img src={filterIcon} />
                                <h6>Filter</h6>
                            </div>
                            <div className="filter-arrow" onClick={() => {return SetActiveFilter(false)}}>
                            <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="10" height="3" transform="matrix(-1 0 0 1 15 5)" fill="#C4C4C4"/>
<path d="M0 6.5L6 12.1292L6 0.870835L0 6.5Z" fill="#C4C4C4" />
</svg>
                            </div>
                        </div>   
                    </div>
                    {children}
                </div>    
            </div>
        </>
    )
}
export default MenuFilter