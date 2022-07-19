import discord from '../../assets/image/discord.svg';
import Ethereum from '../../assets/image/Ethereum.svg';
import { useState } from 'react'
import arrowDown from '..//..//assets/image/arrowdown.svg';
import arrowUp from '..//..//assets/image/arrowup.svg';
import twitter from '..//..//assets/image/Twitter.svg';
import instagram from '..//..//assets/image/instagram.svg';
import board from '..//..//assets/image/board.svg';
import dots from '..//..//assets/image/dots.svg';
import './style.scss'
import { useParams } from "react-router-dom";
import { BrandGroup } from "../../Routing/brands/brandGroup";

const ItemBrand = ({ name }) => {
    return (
        <>
            <div className='item'>
                <div className='item__img' />
                <div className='item__info'>
                    <div className='item__titles'>
                        <p className='item__num'>Unique card #001</p>
                        <p className='item__brand'>{name} NTF Certificates</p>
                    </div>
                    <div className='item__price'>
                        <p>Price</p>
                        <div>
                            <img src={Ethereum} alt='vector' />
                            <span>0.01</span>
                        </div>
                    </div>
                </div>

                <div className='item__footer'>
                    <button className='item__btn'>Book</button>
                    <p className='item__procent'>Investor’s royalty 4.5%</p>
                </div>
            </div>
        </>
    )
}

const Brand = () => {
    const [isOpen, setOpen] = useState(false)
    let description = `Explore collections of brand certificates. Use the opportunity to get an NFT certificate for your branded item. Buy and sell NFTs tied to real-life branded items. The value of such things is greater, and the value of NFTs is more meaningful. Below are collections of NFT-certificates of top brands of clothing, watches, cars and alcohol. All of them are located on OpenSea and are available for viewing and purchase. If you would like to create your own NFT certificate, go through the authentication process of your branded item and mint the NFT on our platform. But remember that the number of certificates of each brand is always limited. We wish you success in exploring the new possibilities of NFT.`
    const { id } = useParams()
    const brand = BrandGroup.filter(brand => brand.id === id)[0]
    const itemCount = brand.item.length

    return (
        <section className='brand'>
            <div className='brand__inner'>
                <div className="brand__header" />
                <div className="brand__img" />
                <div className='brand__share'>
                    <div className='brand__share-first'>
                        <span className='brand__share-cross'>+</span>
                        <span className='brand__share-text'>Get on White List</span>
                    </div>
                    <div className='brand__share-second'>
                        <div className='brand__share-social'>
                            <img src={twitter} />
                        </div>
                        <div className='brand__share-social'>
                            <img src={board} />
                        </div>
                        <div className='brand__share-social'>
                            <img src={instagram} />
                        </div>
                        <div className='brand__share-social'>
                            <img src={dots} />
                        </div>
                    </div>
                </div>
                <h3 className="brand__title">{brand.name} NTF Certificates</h3>
                <p className="brand__subtitle">Created by <span className='blue'>CheckBrandcom</span></p>
                <a className='brand__discord'>
                    <img src={discord} alt='discord' />
                    Discord support
                </a>
                <div className='brand__info'>
                    <div className='brand__count'>
                        <span className='count'>{itemCount}</span>
                        <p>items</p>
                    </div>
                    <div className='brand__count'>
                        <span className='count'>{brand.owner}</span>
                        <p>owners</p>
                    </div>
                    <div className='brand__count brand__count-last'>
                        <img src={Ethereum} alt={'Icon Ethereum'} />
                        <span className='count'>{brand.floorPrice}</span> <p>floor price</p>
                    </div>
                    <div className='brand__count brand__count-last'>
                        <img src={Ethereum} alt={'Icon Ethereum'} />
                        <span className='count'>{brand.volumeTraded}</span>
                        <p>volume traded</p>
                    </div>
                </div>
                <div className='about__text' style={isOpen ? { height: 'auto' } : { height: 'auto' }}>
                    <span className={'about_description'}>{isOpen
                        ?
                        <span style={{ fontSize: '19px', fontWeight: 400 }}> Unique cards designed to certify branded items. Each NFT is associated with a real tangible brand item. Before minting a token, we authenticate the thing with which it will be associated. In case of authentication confirmation, the user gets access to the NFT certificate creation service.
                            <br />
                            Collection minting is produced by releases. Collection release means 100 NFTs. Each token has its own unique serial number, which determines the cost and royalty. Anniversary numbers are especially valuable. Each release is unique and is carried out only by presale.
                            <br />
                            <br />
                            <span style={{ textAlign: 'left' }}>
                                Issue 1 is... <br />
                                Issue 2 is... <br />
                            </span>
                            <br />
                            If you are the owner of a top branded item, visit our website where you can find out if it is possible to issue an NFT certificate: </span>
                        :
                        <span style={{ fontSize: '19px', fontWeight: 400 }}>'Unique cards designed to certify branded items. Each NFT is associated with a real tangible brand item. Before minting a token, we authenticate the thing with which it will be associated. In case of authentication confirmation, the user gets access to the NFT certificate creation service. <p className={'blur'}> Collection </p></span>
                    }
                    </span>
                </div>

                {
                    !isOpen
                        ? <img className='about-arrow' src={arrowDown} alt={'arrow button open'}
                            style={{ transform: 'rotate(0deg)' }}
                            onClick={() => setOpen(true)} />
                        : <img className='about-arrow' src={arrowUp} alt={'arrow button closed'}
                            style={{ transform: 'rotate(180deg)' }}
                            onClick={() => setOpen(false)} />
                }
                <p className='brand__text'>Choose and book</p>
            </div>
            <div className='brand__search'>
                <input type='search' className='brand__input' placeholder='Seach unique card number' />
                <button className='brand__all brand__btn'>All items</button>
                <button className='brand__book brand__btn'>Booked</button>
            </div>
            <p className='brand__total'>{itemCount} items</p>
            <div className='brand__items'>
                {brand.item.length > 0
                    ? brand.item.map(_ => <ItemBrand name={brand.name} key={brand.id} />
                    )
                    : <h2 style={{ fontSize: '22px', textAlign: 'center' }}>Oh, no. NFT is not found.</h2>}
            </div>
        </section>
    )
}

export default Brand