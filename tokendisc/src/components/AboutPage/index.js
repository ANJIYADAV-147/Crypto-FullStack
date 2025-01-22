import {Component} from 'react'
import 'animate.css/animate.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './index.css'
import Header from '../Header'
import companyLogo from '../images/companyLogo.jpg'
import Footer from '../Footer'

class AboutPage extends Component{
    render(){
        return(
            <div className='about-component'>
                <Header/>
                <div className='about-information-container'>
                    <h1 className='about-heading'>About Us</h1>
                    <img src='https://demo.htmlcodex.com/2597/free-cryptocurrency-website-template/img/hero-2.png' className='about-section-img  img-fluid animate__animated animate__pulse animate__infinite' alt='img'/>
                </div>
                <div className='about-container'>
                    <div className='wow animate__animated animate__fadeInUp' data-wow-delay='0.1s'>
                        <img src={companyLogo} className='about-img ' alt='aboutImg'/>
                    </div>
                    <div className='about-description-container wow animate__animated animate__fadeInUp' data-wow-delay='1s'>
                        <h1 className='about-heading'>About Us</h1>
                        <p className='des'>The Most Trusted Cryptocurrency Platform</p>
                        <p className='about-des'>
                            The cryptocurrency exchange ecosystem consists of platforms enabling digital currency trading
                            Centralized Exchanges (CEX), like Binance and Coinbase, offer high liquidity and user-friendly interfaces but manage funds centrally.
                            Decentralized Exchanges (DEX), such as Uniswap and SushiSwap, provide peer-to-peer trading with enhanced security and privacy, giving users control over their funds.
                            Hybrid Exchanges combine features of CEX and DEX, balancing security, liquidity, and user control. Examples include Binance DEX and Nash.
                            This ecosystem is vital for the growth of the cryptocurrency market, catering to both individual and institutional investors.
                        </p>
                        
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default AboutPage