import './style.scss'
import QR from '../../assets/image/qrCode.png'

const AboutPlatform = () => {
    return (
        <section className='platform'>
            <div className="platform__container">
                <h3 className="platform__title">About Platform</h3>
                <img className='platform__qr' src={QR} alt={'QR Code'} />
                <h4 className='platform__subtitle'>CheckBrandcom</h4>
                <p className='platform__text'>When you buy a truly expensive thing from a known brand, you get a
                    certificate of authenticity, a plastic card with numbers, which allows you to receive warranty
                    service and additional benefits, such as access to a business lounge at the airport, VIP service and
                    a pass to private events.</p>
                <p className='platform__text'>Our idea is to replace plastic with NFT. Anyone who confirms the
                    authenticity of their branded item will be able to become a member of our movement, purchase and
                    link an NFT certificate to their branded item on our platform.</p>
                <p className='platform__text'>The value of such an NFT lies in the presence of a connection between
                    material and virtual objects. You get the opportunity to demonstrate in the virtual world that you
                    have attributes of prestige in the material world.</p>
                <p className='platform__text'>Do you own such things as Rolls-Roys, Rollex, Prada or a bottle of Red
                    Label? Why not announce about it to the entire metaverse? Why not take advantage of the
                    material-virtual object connection to add value to the NFT and sell it to someone who appreciates
                    the prestige of the virtual world?</p>
                <p className='platform__text platform__text-list'>&gt;&gt; Each brand secures its products with an
                    authentication system. Use it to confirm the authenticity of your branded item. <br />
                    &gt;&gt; Send us this confirmation and we will grant you access to the platform; <br />
                    &gt;&gt; Enter the metadata of your branded item (collection name, model, release date, etc.); <br />
                    &gt;&gt; Issue a ready-made NFT-certificate of your branded item; <br />
                    &gt;&gt; Demonstrate to your friends and put up for sale.</p>
                <p className='platform__text'>How much do you think another user is willing to pay for the opportunity
                    to own your NFT-certificate of a real branded item, the presence and authenticity of which are
                    confirmed?</p>
                <h4 className='platform__subtitle platform__subtitle-second'>For Investors</h4>
                <p className='platform__text'>Unfortunately, it is not possible to buy several NFTs at the same time.
                    You can buy only one at a time and only after confirming the authenticity of the branded item.
                    Further, every year, we will buy 10% of NFT certificates issued on our platform. The point of this
                    action is that as the number of NFT certificates issued increases, the previously issued ones will
                    have more and more value in the future. Thus, by supporting us now, you can count on higher rewards
                    in the future.</p>
                <p className='platform__text platform__text-last'>It is important for professional investors to know
                    that we have copyrights to the material-virtual object system deposin the blockchain. Based on the
                    expert's opinion on the patentability of the technology, measures are being taken to prepare an
                    application for a patent. Technology is a sequence of actions from production to marketing to
                    connect material and virtual objects. The peculiarity of the technology is the ease of
                    implementation in production and reliability. Also, this technology will be fully implemented by us
                    on our platform and brand representatives will be able to use the ready-made system for certifying
                    their products at no additional cost, since the business model embedded in the technology
                    distributes the financial burden among platform users without increasing the cost of production. To
                    summarize, using our platform, brands will be able to provide their consumers with additional value
                    without increasing the cost of products, and users will receive additional benefits. The cost of an
                    NFT certificate is high and may exceed the cost of a real thing.</p>
                <h4 className='platform__subtitle'>Road map</h4>
                <div className='platform__map'>
                    <div className='map'>
                        <div className='map__first'>
                            <h4 className='map__title'>Creation of a blockchain</h4>
                            <div className='map__line-first' />
                            <p className='map__text'>Release of branded NFT-Bonds <br />
                                Blockchain implementation in the platform <br />
                                Launch of the test version <br />
                                Aseries of tests <br />
                                Software development <br />
                                Development of technical specifications</p>
                        </div>
                        <div className='map__second'>
                            <h4 className='map__title'>Launch of the material to virtual object association system for
                                brands</h4>
                            <div className='map__line-second' />
                            <p className={'map__text'}>
                                Start af test manufacture of products <br />
                                Connecting of Account of licensed point of sale <br />
                                Connection of Account of licensed production <br />
                            </p>
                        </div>
                        <div className='map__third'>
                            <h4 className='map__title'>Launch of a system for Minting NFT-certificates for brands on the
                                platform in test mode</h4>
                            <div className='map__line-third' />
                            <p className='map__text'>
                                Variability testing <br />
                                Development of smart contracts <br />
                                Process testing <br />
                                Design developmentnt <br />
                            </p>
                        </div>
                        <div className='map__four'>
                            <h4 className='map__title'>Launch of a new NFT development on the platform (NFT Options)</h4>
                            <div className='map__line-four' />
                            <p className='map__text'>
                                Sale of tokens <br />
                                Minting of NFT Options <br />
                                Marketing events <br />
                                Smart contract development <br />
                                Creation of a marketplace platform based on OpenSea
                            </p>
                        </div>
                        <div className='map__fifth'>
                            <h4 className='map__title'>Launch of Staking NFTs (NFT Bonds) on the platform</h4>
                            <div className='map__line-fifth' />
                            <p className='map__text'>
                                Sale of tokens <br />
                                Minting af NFT Bonds <br />
                                Marketing events <br />
                                Smart contract development <br />
                            </p>
                        </div>
                        <div className='map__sixth'>
                            <h4 className='map__title'>Launch of platform</h4>
                            <div className='map__line-sixth' />
                            <p className='map__text'>
                                Process optimization <br />
                                Minting of NFT certificates <br />
                                Marketing events <span className='green'> in progress</span> <br />
                            </p>
                        </div>
                        <div className='map__seven'>
                            <h4 className='map__title'>Creation of platform:</h4>
                            <div className='map__line-seven' />
                            <p className='map__text map__text-last'>
                                <s>Creation of collections</s> <br />
                                <s>Development efsmart eentraets</s> <br />
                                <s>Registration of social networks</s> <br />
                                <s>Website building</s> <br />
                                <s>Development of terms of reference for the ereation of aplatform for the implementation of
                                    the system</s> <br />
                                <s>Develepment ef e materiel te virtual eleject esseciation system</s> <br />
                            </p>
                        </div>
                    </div>
                    <div className='map__years'>
                        <p className='map__year map__year-first'>2023 Q4</p>
                        <p className='map__year map__year-second'>2023 Q3</p>
                        <p className='map__year map__year-third'>2023 Q2</p>
                        <p className='map__year map__year-fourth'>2023 Q1</p>
                        <p className='map__year map__year-fifth'>2022 Q4</p>
                        <p className='map__year map__year-sixth'>2022 Q3</p>
                        <p className='map__year map__year-seven'>2022 Q2</p>
                    </div>
                </div>
            </div>
            <div className='platform__container'>
                <h4 className='platform__subtitle platform__subtitle-second'>About us</h4>
                <p className='platform__text platform__text-second'>We are crypto-enthusiasts, idealist-realists,
                    materialists-virtualists. We connect the unconnected, the materialv and the virtual, the valuable
                    and the priceless, the temporary and the permanent.</p>
                <p className='platform__text platform__text-second'>Citizens of the virtual world have ideas for
                    connecting brands and people, NFTs and things.</p>
                <p className='platform__text platform__text-second'>We do not name names and do not voice regalia. What
                    we do and what we are going to do say about us louder than words. Driven by the principles and
                    values of the crypto community, we tirelessly forge the program code.</p>
                <p className='platform__text platform__text-second'>We do not have an investor, but we have the freedem
                    to determine the path. We benefit our community, while income is only a means along the way. There
                    are no goals that are not achievable, there is only a weak fantasy of the mind. We urge you to join
                    our ranks in search of more meaning.</p>
                <p className='platform__text platform__text-second platform__text-last'>Our project is very expensive,
                    it is worth the entire lifotime. We are fully investing in it. Are you with us? </p>
                <h4 className='platform__subtitle platform__subtitle-second'>Our vision</h4>
                <p className='platform__text platform__text-second platform__text-last'>From small to large, from one
                    collection of NFTs to a marketplace, from a ready-made blockchain to your own, from disunity to
                    unity. Idea-technology-platform-global infrastructure for certification of branded items. We take
                    responsibility to the community for realizing our vision. We will put everything we have into it, we
                    will put all of ourselves into it.</p>
            </div>
        </section>
    )
}

export default AboutPlatform;
