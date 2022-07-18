import StatsToken from "./tokenstats"

import './style.scss'

import arrowUp from '../../../assets/image/arrowup.svg'

const CollectionToken = () => {
    return (
        <>
            <StatsToken>
                <div className='stats-any'>
                    <div>Collection</div>
                </div>
                <div className="stats__property">
                    <div className="stats-arrow-up">
                        <div className='stats-price_filter stats-values'>Volume</div>
                        <img src={arrowUp} />
                    </div>
                    <div className='stats_update stats-values'>24h %</div>
                    <div className='stats_update stats-values'  style={{paddingLeft: '10px'}} >7d %</div>
                    <div className='stats-value stats-values'>Floor Price</div>
                    <div className='stats-owners stats-values'>Owners</div>
                    <div className='stats-items stats-values'>Items</div>
                </div>
            </StatsToken>
        </>
    )
}
export default CollectionToken