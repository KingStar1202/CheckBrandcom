import {useState} from 'react'
import './style.scss'
import arrowDown from '..//..//assets/image/arrowdown.svg'
import bannerMain from '../../assets/image/bannerBrands.png'

const Main = ({setValue, text}) => {
    const [isOpen, setOpen] = useState(false)
    let descValue = `Explore collections of brand certificates. Use the opportunity to get an NFT certificate for your branded item. Buy and sell NFTs tied to real-life branded items. The value of such things is greater, and the value of NFTs is more meaningful.
        Below are collections of NFT-certificates of top brands of clothing, watches, cars and alcohol. All of them are located on OpenSea and are available for viewing and purchase.
        If you would like to create your own NFT certificate, go through the authentication process of your branded item and mint the NFT on our platform. But remember that the number of certificates of each brand is always limited.
        We wish you success in exploring the new possibilities of NFT.`

    const threeHundredSymbols = descValue.split('').splice(0, 309)


    return (
        <>
            <div style={{width: '100%', height: '244px', marginTop: '-1px'}}>
                <img src={bannerMain} style={{width: '100%', height: '100%', objectFit: 'cover'}}
                     alt={'banner for main page'}/>
            </div>
            <div className='about'>
                <div className='about-main'>
                    <h3 className='about__title'>Explore Brands</h3>
                    <div className='about__text' style={isOpen ? {height: 'auto'} : {height: 'auto'}}>
                        {/*<span className={'about_description'}>{isOpen ? descValue : threeHundredSymbols}</span>*/}
                        <span className={'about_description'}>{isOpen
                            ?
                            <span> Explore collections of brand certificates. Use the opportunity to get an NFT certificate for your branded item. Buy and sell NFTs tied to real-life branded items. The value of such things is greater, and the value of NFTs is more meaningful.
        Below are collections of NFT-certificates of top brands of clothing, watches, cars and alcohol. All of them are located on OpenSea and are available for viewing and purchase.
        If you would like to create your own NFT certificate, go through the authentication process of your branded item and mint the NFT on our platform. But remember that the number of certificates of each brand is always limited.
        We wish you success in exploring the new possibilities of NFT. </span>
                            :
                            <span>Explore collections of brand certificates. Use the opportunity to get an NFT certificate for your branded item. Buy and sell NFTs tied to real-life branded items. The value of such things is greater, and the value of NFTs is more meaningful.
        Below are collections of NFT-certificates of <span className={'blur'}> top brands of </span></span>
                        }
                        </span>
                    </div>

                    {
                        !isOpen
                            ? <img className='about-arrow' src={arrowDown} alt={'arrow button open'}
                                   style={{transform: 'rotate(0deg)'}}
                                   onClick={() => setOpen(true)}/>
                            : <img className='about-arrow' src={arrowDown} alt={'arrow button closed'}
                                   style={{transform: 'rotate(180deg)'}}
                                   onClick={() => setOpen(false)}/>
                    }


                </div>
            </div>
        </>
    )


}
export default Main