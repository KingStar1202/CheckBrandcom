import './style.scss'
import StatsFilter from "./statsFilter"
import CollectionToken from "./TokensStats/CollectionToken"
import {Token} from "./Token/Token"
import Avatar from '../../assets/image/Ellipse.png'
import {AccordionToken} from "./Token/AccordionToken/AccordionToken";

const Stats = () => {
    const windowWidth = window.innerWidth;
    const iPadMiniWidth = 1030// px

    return (
        <>
            <StatsFilter/>
            <div className="stats-collection_flex">
                {
                    windowWidth > iPadMiniWidth
                        ? <> <CollectionToken/>
                            <Token avatar={Avatar} number={'1'} collectionName={'Collection name'} volume={'18,531.52'}
                                   perDay={'-81.93%'} perWeek={'+119.08%'} floorPrice={'1.45'}
                                   owners={'10.3K'} items={'20.2K'}/>
                            <Token avatar={Avatar} number={'2'} collectionName={'Collection name'} volume={'18,531.51'}
                                   perDay={'–––'} perWeek={'–––'} floorPrice={'1.45'}
                                   owners={'10.3K'} items={'20.2K'}/>
                            <Token avatar={Avatar} number={'3'} collectionName={'Collection name'} volume={'18,531.52'}
                                   perDay={'+81.93%'} perWeek={'+119.08%'} floorPrice={'1.45'}
                                   owners={'10.3K'} items={'20.2K'}/>
                        </>
                        : <>
                            <AccordionToken avatar={Avatar} number={'1'} collectionName={'Versace Collection'}
                                            volume={'18,531.52'}
                                            perDay={'-81.93%'} perWeek={'+119.08%'} floorPrice={'1.45'}
                                            owners={'10.3K'} items={'20.2K'}/>}
                            <AccordionToken avatar={Avatar} number={'2'} collectionName={'Gucci Collection'}
                                            volume={'18,531.52'}
                                            perDay={'+20.21%'} perWeek={'+119.08%'} floorPrice={'1.45'}
                                            owners={'10.3K'} items={'20.2K'}/>}
                            <AccordionToken avatar={Avatar} number={'3'} collectionName={'Prada Collection'}
                                            volume={'18,531.52'}
                                            perDay={'---'} perWeek={'+119.08%'} floorPrice={'1.45'}
                                            owners={'10.3K'} items={'20.2K'}/>
                        </>
                }
            </div>
        </>
    )
}
export default Stats