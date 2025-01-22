import {Component} from 'react'
import './index.css'
import Header from '../Header'
import Footer from '../Footer'
import { IoMdSend } from "react-icons/io";

class CommunityPage extends Component{
    render(){
        return(
            <div className='community-component'>
                <Header/>
                <div className='community-container'>
                    <div className='welcome-container'>
                        <h1 className='welcome-heading'>Welcome to the trading Community</h1>
                        <div className='button-container'>
                            <p className='welcome-des'>Connect, Clear and Ask your peer trades...</p>
                            <button className='ask-button'>Doubt? Ask here...</button>
                        </div>
                    </div>
                    <div className='user-comments-container'>
                        <div className='gmail-user-container'>
                            <div>
                                <h1 className='username-heading'>username</h1>
                                <p className='gmail-des'>Gmail</p>
                            </div>
                            <button className='post-button'>Post</button>
                        </div>
                        <div className='input-send-container'>
                            <input type='text' className='text-input' placeholder='Type anything here...' />
                            <button type='button' className='send-button'>
                                <IoMdSend size={25} className='send-icon'/>
                            </button>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default CommunityPage