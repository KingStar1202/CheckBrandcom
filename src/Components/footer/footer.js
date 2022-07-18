import './style.scss'
import facebook from './social_icons/facebook.png';
import instagram from './social_icons/instagram.png';
import linked from './social_icons/linked.png';
import odnoclassniki from './social_icons/odnoclassniki.png';
import reddit from './social_icons/reddit.png';
import telegram from './social_icons/telegram.png';
import tiktok from './social_icons/tiktok.png';
import twitter from './social_icons/twitter.png';
import vk from './social_icons/vk.png';
import youtube from './social_icons/youtube.png';

const Footer = () => {
    return(
        <>
        <footer className='footer'>
            <div className='footer-main'>
                <div className='footer-link'>
                    <a href='' target='_blank'><img src={youtube} /></a>
                    <a href='' target='_blank'><img src={vk} /></a>
                    <a href='' target='_blank'><img src={facebook} /></a>
                    <a href='' target='_blank'><img src={twitter} /></a>
                    <a href='' target='_blank'><img src={tiktok} /></a>
                    <a href='' target='_blank'><img src={telegram} /></a>
                    <a href='' target='_blank'><img src={reddit} /></a>
                    <a href='' target='_blank'><img src={odnoclassniki} /></a>
                    <a href='' target='_blank'><img src={linked} /></a>
                    <a href='' target='_blank'><img src={instagram} /></a>
                </div>
            </div>
        </footer>
        </>
    )
}
export default Footer