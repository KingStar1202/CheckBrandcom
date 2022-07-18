import React, {useState} from 'react';
import StatsToken from "../../TokensStats/tokenstats";
import styles from './accToken.module.scss'


export const AccordionToken = ({
                                   avatar,
                                   number,
                                   collectionName,
                                   volume,
                                   perDay,
                                   perWeek,
                                   floorPrice,
                                   owners,
                                   items
                               }) => {

    const [open, setOpen] = useState(false)
    return (
        <div className={styles.stats}>
            <StatsToken>
                <div className={styles.stats__collection}>
                    <div className={styles.stats__collection_title}>
                        <div>{number}</div>
                        {avatar && <img src={avatar} className={styles.stats__collection_avatar}/>}
                        <div className={styles.stats__collection_accordionBtn} onClick={() => setOpen(value => !value)}>
                            <div>{collectionName}</div>
                            {
                                open
                                    ? <div style={{marginTop: '5px'}}> - Less </div>
                                    : <div style={{marginTop: '5px'}}> + More </div>
                            }
                        </div>
                    </div>
                    <div className={styles.stats__collection_valueDay}>
                        <div className={styles.stats__collection_values_first}>
                            <svg width="9" height="15" viewBox="0 0 9 15" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M4.4668 11.2304L0 8.51317L4.46408 15L8.93316 8.51317L4.46408 11.2304H4.4668ZM4.5332 0L0.0682094 7.63898L4.5332 10.3609L9 7.64179L4.5332 0Z"
                                    fill="white"/>
                            </svg>
                            {volume}
                        </div>
                        <div className={styles.stats__collection_values_perDay}>{perDay}</div>
                    </div>
                </div>
            </StatsToken>
            {open && <StatsToken>
                <div className={styles.stats__collection_values}>
                    <div>
                        <div className={styles.stats__collection_values_title}>7d %</div>
                        <div className={styles.stats__collection_values_perWeek}>{perWeek}</div>
                    </div>
                    <div>
                        <div className={styles.stats__collection_values_title}>Floor Price</div>
                        <div className={styles.stats__collection_values_floorPrice}>
                            <svg width="9" height="15" viewBox="0 0 9 15" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M4.4668 11.2304L0 8.51317L4.46408 15L8.93316 8.51317L4.46408 11.2304H4.4668ZM4.5332 0L0.0682094 7.63898L4.5332 10.3609L9 7.64179L4.5332 0Z"
                                    fill="white"/>
                            </svg>
                            {floorPrice}</div>
                    </div>
                    <div>
                        <div className={styles.stats__collection_values_title}>Owners</div>
                        <div>{owners}</div>
                    </div>
                    <div>
                        <div className={styles.stats__collection_values_title}>Items</div>
                        <div>{items}</div>
                    </div>

                </div>
            </StatsToken>}
        </div>
    );
};

