import Main from "../../Components/main/Main"

import {BrandGroup} from "./brandGroup"
import {Link} from "react-router-dom";

const Brands = () => {

    return (
        <>
            <Main/>
            <div className="wrapper">
                <span className={'wrapper__title'}>Trending in Brands</span>
                <div className='main-list'>
                    {BrandGroup.map((item, index) => {
                        return (
                            <div className='main-person' key={index}>
                                <div className='main-person_name'/>
                                <Link to={`/brand/${item.id}`}>
                                    <img src={item.image} alt='account-card'/>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
export default Brands