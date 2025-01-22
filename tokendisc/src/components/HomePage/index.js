import { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import Header from '../Header'
//import { MdCurrencyBitcoin } from "react-icons/md";
//import { BsCurrencyExchange } from "react-icons/bs";
//import { GrCurrency } from "react-icons/gr";
import Footer from '../Footer';
import 'animate.css/animate.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WOW from 'wowjs';
//import CountUp from 'react-countup';
import companyLogo from '../images/companyLogo.jpg'


class HomePage extends Component {

    componentDidMount() {
        new WOW.WOW().init();  // Initialize WOW.js
    }

    render() {

        return (

            <div className='homePage-component'>
                <Header />
                <div className='home-container'>
                    <div className='heading-button-container'>
                        <h1 className='Home-heading animate__animated animate__slideInDown'>Your Personal Crypto Counsellor</h1>
                        <p className='home-description animate__animated animate__slideInDown'>Token Disc, the world’s leading bitcoin ATM operator, makes it so flippin’ easy to buy and sell bitcoin via cash, card, or bank transfer.</p>
                        <div className='header-button-container'>
                            <button className='get-start-button animate__animated animate__slideInDown' type='button'>Get Stared!</button>
                            <button className='explore-button animate__animated animate__slideInDown' type='button'>Explore</button>
                        </div>
                    </div>
                    <img src='https://demo.htmlcodex.com/2597/free-cryptocurrency-website-template/img/hero-1.png' className='home-image img-fluid animate__animated animate__pulse animate__infinite' style={{ animationDuration: '3s' }} alt='homeImg' />
                </div>


                <div className='about-container'>
                    <div className='wow animate__animated animate__fadeInUp' data-wow-delay='0.2s'>
                        <img src={companyLogo} className='about-img ' alt='aboutImg' />
                    </div>
                    <div className='about-description-container wow animate__animated animate__fadeInUp' data-wow-delay='0.5s'>
                        <h1 className='about-heading'>About Us</h1>
                        <p className='des'>The Most Trusted Cryptocurrency Platform</p>
                        <p className='about-des'>
                            The cryptocurrency exchange ecosystem consists of platforms enabling digital currency trading
                            Centralized Exchanges (CEX), like Binance and Coinbase, offer high liquidity and user-friendly interfaces but manage funds centrally.
                            Decentralized Exchanges (DEX), such as Uniswap and SushiSwap, provide peer-to-peer trading with enhanced security and privacy, giving users control over their funds.
                            Hybrid Exchanges combine features of CEX and DEX, balancing security, liquidity, and user control. Examples include Binance DEX and Nash.
                            This ecosystem is vital for the growth of the cryptocurrency market, catering to both individual and institutional investors.
                        </p>
                        <Link to='/about' className='link'>
                            <button className='read-more-button'>Read More</button>
                        </Link>
                    </div>
                </div>


                {/*  <div className='transactions-statics-container'>
                    <div className='daily-transactions wow animate__animated animate__fadeIn' data-wow-delay='0.2s'>
                        <MdCurrencyBitcoin className='bitcoin-icon'/>
                        <h1 className='total-count ' data-toggle='counter-up'>
                            <CountUp start={0} end={123456} duration={2} separator="" />
                        </h1>
                        <p className='transaction-des'>Today Transactions</p>
                    </div>
                    <div className='daily-transactions wow animate__animated animate__fadeIn'>
                        <BsCurrencyExchange className='bitcoin-icon'/>
                        <h1 className='total-count'>
                            <CountUp start={0} end={123456} duration={2} separator="" />
                        </h1>
                        <p className='transaction-des'>Montly Transactions</p>
                    </div>
                    <div className='daily-transactions wow animate__animated animate__fadeIn'>
                        <GrCurrency className='bitcoin-icon'/>
                        <h1 className='total-count'>
                            <CountUp start={0} end={123456} duration={2} separator="" />
                        </h1>
                        <p className='transaction-des'>Total Transactions</p>
                    </div>
                </div>
                */ }

                <div className='why-us-container'>
                    <div className='wow animate__animated animate__fadeInUp' data-wow-delay='0.2s'>
                        <h1 className='heading text-center'>Why Us!</h1>
                        <p className='des text-center'>The Best In The crypto Industry</p>
                    </div>
                    <div className='easy-safe-plans-container'>
                        <div className='why-us-item-container wow animate__animated animate__fadeInUp' data-wow-delay='0.1s'>
                            <img src='https://demo.htmlcodex.com/2597/free-cryptocurrency-website-template/img/icon-7.png' className='why-images' alt='img' />
                            <div className='why-us-content'>
                                <h1 className='why-us-heading'>Easy to Start</h1>
                                <p className='why-us-des'>Launch your own crypto exchange platform with user-friendly interface and robust security.</p>
                            </div>
                        </div>
                        <div className='why-us-item-container wow animate__animated animate__fadeInUp' data-wow-delay='0.3s'>
                            <img src='https://demo.htmlcodex.com/2597/free-cryptocurrency-website-template/img/icon-6.png' className='why-images' alt='img' />
                            <div className='why-us-content'>
                                <h1 className='why-us-heading'>Safe & Secure</h1>
                                <p className='why-us-des'>Create a safe and secure crypto exchange platform with advanced encryption and authentication.</p>
                            </div>
                        </div>
                        <div className='why-us-item-container wow animate__animated animate__fadeInUp' data-wow-delay='0.5s'>
                            <img src='https://demo.htmlcodex.com/2597/free-cryptocurrency-website-template/img/icon-5.png' className='why-images' alt='img' />
                            <div className='why-us-content'>
                                <h1 className='why-us-heading'>Affordable Plans</h1>
                                <p className='why-us-des'>Affordable pricing plans for starting your crypto exchange platform quickly and efficiently.</p>
                            </div>
                        </div>


                        <div className='why-us-item-container wow animate__animated animate__fadeInUp' data-wow-delay='0.1s'>
                            <img src='https://demo.htmlcodex.com/2597/free-cryptocurrency-website-template/img/icon-4.png' className='why-images' alt='img' />
                            <div className='why-us-content'>
                                <h1 className='why-us-heading'>Secure Storage</h1>
                                <p className='why-us-des'>Implement secure storage for crypto  with advanced encryption technology.</p>
                            </div>
                        </div>
                        <div className='why-us-item-container wow animate__animated animate__fadeInUp' data-wow-delay='0.3s'>
                            <img src='https://demo.htmlcodex.com/2597/free-cryptocurrency-website-template/img/icon-3.png' className='why-images' alt='img' />
                            <div className='why-us-content'>
                                <h1 className='why-us-heading'>Protected By Insurance</h1>
                                <p className='why-us-des'>Assets protected by comprehensive insurance for peace of mind and security.</p>
                            </div>
                        </div>
                        <div className='why-us-item-container wow animate__animated animate__fadeInUp' data-wow-delay='0.5s'>
                            <img src='https://demo.htmlcodex.com/2597/free-cryptocurrency-website-template/img/icon-8.png' className='why-images' alt='img' />
                            <div className='why-us-content'>
                                <h1 className='why-us-heading'>24/7 Support</h1>
                                <p className='why-us-des'>Access 24/7 support for continuous assistance and peace of mind.</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='services-container'>
                    <h1 className='services-heading'>Services</h1>
                    <p className='service'>Buy, Sell And Exchange Cryptocurrency</p>
                    <div className='different-services-container  wow animate__animated animate__fadeInUp' data-wow-delay='0.2s'>
                        <div className='service-item'>
                            <h1 className='item-heading'>Academy</h1>
                            <p className='item-description'>An institute exclusively designed for Cryptocurrency and block-chain technology.</p>
                            <button type='button' className='service-button'>Join Community</button>
                        </div>
                        <img src='http://surl.li/orxkkb' className='service-img' alt='serviceImg' />
                    </div>
                    <div className='service-2-3'>
                        <div className='service-2  wow animate__animated animate__fadeInUp' data-wow-delay='0.2s'>
                            <div className='service-item'>
                                <h1 className='item-heading'>Community</h1>
                                <p className='item-description'>Be a significant part of fastest growing crypto Community in the world.</p>
                                <Link to='/community-page' className='link'>
                                    <button type='button' className='service-button'>Join Community</button>
                                </Link>
                            </div>
                            <img src='https://cryptovirally.com/wp-content/uploads/2024/05/Growing-Your-Crypto-Community-on-Social-Media.webp' className='service-img-1' alt='serviceImg' />
                        </div>
                        <div className='service-2  wow animate__animated animate__fadeInUp' data-wow-delay='0.5s'>
                            <div className='service-item'>
                                <h1 className='item-heading'>Demo trading</h1>
                                <p className='item-description'>Take your First steps towards Crypto trading.</p>
                                <Link to='/demo-trading' className='link'>
                                    <button type='button' className='service-button'>Start Demo Trading</button>
                                </Link>
                            </div>
                            <img src='https://assets.finbold.com/uploads/2022/11/Crypto-Day-Trading-for-Beginners-_-__Strategies-Common-Mistakes-1.jpg' className='service-img-1' alt='serviceImg' />
                        </div>
                    </div>
                </div>


                <div className='token-sale-container'>
                    <h1 className='token-sale-heading'>Token Sale <span className='coming-soon'>coming soon</span></h1>

                    <p className='sale'>Token Sale Countdown</p>
                    <div className='countdown-container'>
                        <div className='count-item wow animate__animated animate__fadeInUp' data-wow-delay='0.1s'>
                            <h1>0</h1>
                            <p className='time-des'>Days</p>
                        </div>
                        <div className='count-item wow animate__animated animate__fadeInUp' data-wow-delay='0.3s'>
                            <h1>0</h1>
                            <p className='time-des'>Hours</p>
                        </div>
                        <div className='count-item wow animate__animated animate__fadeInUp' data-wow-delay='0.5s'>
                            <h1>0</h1>
                            <p className='time-des'>Minutes</p>
                        </div>
                        <div className='count-item wow animate__animated animate__fadeInUp' data-wow-delay='0.7s'>
                            <h1>0</h1>
                            <p className='time-des'>Seconds</p>
                        </div>
                    </div>
                    <button className='buy-token-button' type='button'>Buy Token</button>
                    <div className='transaction-card-container'>
                        <img src='https://d28wu8o6itv89t.cloudfront.net/images/Visadebitcardpng-1599584312349.png' className='card-img' alt='cardImg' />
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_xZoKNNvk8JBf58ZkjHJVq5oJt9mUoAlrLg&s' className='card-img' alt='cardImg' />
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/800px-Bitcoin.svg.png' className='card-img' alt='cardImg' />
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZjFEPRla6RVcK5iaMMOc4bQZAJZv7XhpWqg&s' className='card-img' alt='cardImg' />
                    </div>
                </div>

                <Footer />

            </div>
        )
    }
}
export default HomePage