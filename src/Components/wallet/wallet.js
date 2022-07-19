import './style.scss';
import Metamask from '../../assets/image/Metamask.svg';
import Coinbase from '../../assets/image/Coinbase.svg';
import WalletConnect from '../../assets/image/WalletConnect.svg';
import Phantom from '../../assets/image/Phantom.svg';
import { useState } from 'react'
import { ethers } from 'ethers'


const Wallet = ({ isOpenWallet }) => {
    const [errorMessage, setErrorMessage] = useState(null);
    const [defaultAccount, setDefaultAccount] = useState(null);
    const [userBalance, setUserBalance] = useState(null);
    const [errorMessageWallet, setErrorMessageWallet] = useState(false)

    const connectWalletHandler = () => {

        if (window.ethereum && window.ethereum.isMetaMask) {
            console.log('MetaMask Here!');
            setErrorMessageWallet(false)
            window.ethereum.request({ method: 'eth_requestAccounts' })
                .then(result => {
                    console.log(result[0])
                    accountChangedHandler(result[0]);
                    getAccountBalance(result[0]);
                })
                .catch(error => {
                    setErrorMessage(error.message);

                });

        } else {
            console.log('Need to install MetaMask');
            setErrorMessageWallet(true)
            setErrorMessage('Please install MetaMask browser extension to interact');
        }
    }

    const accountChangedHandler = (newAccount) => {
        setDefaultAccount(newAccount);
        getAccountBalance(newAccount.toString());
    }

    const getAccountBalance = (account) => {
        window.ethereum.request({ method: 'eth_getBalance', params: [account, 'latest'] })
            .then(balance => {
                setUserBalance(ethers.utils.formatEther(balance));
            })
            .catch(error => {
                setErrorMessage(error.message);
            });
    };

    const chainChangedHandler = () => {
        window.location.reload();
    }


    window.ethereum && window.ethereum.on('accountsChanged', accountChangedHandler);

    window.ethereum && window.ethereum.on('chainChanged', chainChangedHandler);

    return (
        <div className={isOpenWallet ? 'wallet__wrapper active' : 'wallet__wrapper'}>
            <div className='wallet__blur'></div>
            <div className='wallet__content'>
                {defaultAccount ?
                    <>
                        {errorMessage ? <p>{errorMessage}</p> : null}
                        <div className='wallet__account account'>
                            <div className='account__info'>
                                <div className='account__img' />
                                <p className='account__user'>
                                    Username
                                </p>
                            </div>
                            <p>{`${defaultAccount.slice(0, 6)}...${defaultAccount.slice(-4)}`}</p>
                        </div>
                        <div className='account__balance'>
                            <p className='account__text'>Total balance</p>
                            <p className='account__count'>${userBalance}USD</p>
                        </div>
                        <p className='account__footer'>In development</p>
                    </> :
                    <>
                        <div className='wallet__title'>
                            <svg width="23" height="22" viewBox="0 0 23 22" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <circle cx="11.5" cy="5.5" r="5" fill="#E6E7EB" stroke="white" />
                                <path
                                    d="M21.9354 18.3354L22.2494 17.9463L21.9354 18.3354C21.9933 18.3821 22.0344 18.4357 22.0566 18.4844C22.2285 18.8601 22.3028 19.1529 22.3168 19.4202C22.3308 19.6875 22.2863 19.9616 22.1765 20.3042C22.1277 20.4566 21.9657 20.5832 21.7496 20.5832H1.08431C0.870236 20.5832 0.708843 20.458 0.659173 20.3052C0.52472 19.8918 0.485376 19.596 0.504571 19.3397C0.523697 19.0843 0.603772 18.8289 0.767133 18.4978C0.791827 18.4477 0.835717 18.394 0.896019 18.3484C5.23823 15.0642 8.49601 13.5011 11.6263 13.5C14.7505 13.4989 17.87 15.0546 21.9354 18.3354Z"
                                    fill="#E5E7EA" stroke="white" />
                            </svg>
                            <h3>
                                My Wallet
                            </h3>
                        </div>

                        <p className='wallet__subtitle'>Connect with one of our available <span
                            className='blue'>wallet</span> providers or create a new one</p>
                        {errorMessageWallet &&
                            <p className={'wallet__error'}>Please install MetaMask browser extension to interact</p>
                        }
                        <div className='wallet__table'>
                            <div onClick={connectWalletHandler} className='wallet__item row'>
                                <img className='row__icon' src={Metamask} alt={'metamask wallet'} />
                                <p className='row__name'>MetaMask</p>
                                <span className='row__status '> Popular</span>
                            </div>
                            <div className='wallet__item row'>
                                <img className='row__icon' src={Coinbase} alt={'wallet coinbase'} />
                                <p className='row__name'>Coinbase</p>
                                <div className='row__status row__status-dev'>In development</div>
                            </div>
                            <div className='wallet__item row'>
                                <img className='row__icon' src={WalletConnect} alt={'wallet connect icon'} />
                                <p className='row__name'>WalletConnect</p>
                                <div className='row__status row__status-dev'>In development</div>
                            </div>
                            <div className='wallet__item row'>

                                <img className='row__icon' src={Phantom} alt={'wallet phantom'} />
                                <p className='row__name'>Phantom</p>
                                <div className='row__status row__status-dev'>In development</div>
                            </div>
                            <div className='wallet__item row row-last'>
                                <span className='row__last'>More options will be available later</span>
                            </div>

                        </div>
                    </>
                }
            </div>
        </div>
    )
}


export default Wallet;