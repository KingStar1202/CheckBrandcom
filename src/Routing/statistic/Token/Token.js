import StatsToken from "../TokensStats/tokenstats"

export const Token = ({avatar, number, collectionName, volume, perDay, perWeek, floorPrice, owners, items}) => {

    // const dayDynamic = () => {
    //     if (perDay[0] === '+'){
    //         return true
    //     } else if (perDay[1]=== '-'){
    //         return
    //     }
    // }
    const dayDynamic = perDay[0] === '+'
    const weekDynamic = perWeek[0] === '+'
    return (
        <StatsToken>
            <div className='stats__collection'>
                <div>{number}</div>
                {avatar && <img src={avatar} style={{
                    width: '50px', height: '50px', marginLeft: '9px', borderRadius: '50%',
                }}/>}
                <div className='stats-name'>{collectionName}</div>
            </div>
            <div className="stats__collection-values">
                <div className='stats__collection-values_first'>
                    <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M4.4668 11.2304L0 8.51317L4.46408 15L8.93316 8.51317L4.46408 11.2304H4.4668ZM4.5332 0L0.0682094 7.63898L4.5332 10.3609L9 7.64179L4.5332 0Z"
                            fill="white"/>
                    </svg>
                    {volume}
                </div>

                <div
                    className={dayDynamic ? 'valueIsPositive stats__collection-values_perDay' : 'valueIsNegative stats__collection-values_perDay'}>{perDay}</div>
                <div
                    className={weekDynamic ? 'valueIsPositive stats__collection-values_perWeek' : 'valueIsNegative stats__collection-values_perWeek'}>{perWeek}</div>
                <div className='stats__collection-values_floorPrice'>
                    <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M4.4668 11.2304L0 8.51317L4.46408 15L8.93316 8.51317L4.46408 11.2304H4.4668ZM4.5332 0L0.0682094 7.63898L4.5332 10.3609L9 7.64179L4.5332 0Z"
                            fill="white"/>
                    </svg>
                    {floorPrice}</div>
                <div className='stats__collection-values_owners'>{owners}</div>
                <div className='stats__collection-values_items'>{items}</div>

            </div>
        </StatsToken>
    )
}