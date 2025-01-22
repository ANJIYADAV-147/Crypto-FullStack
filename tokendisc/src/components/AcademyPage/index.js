import { Component } from "react";
import './index.css'
import Header from "../Header";

class AcademyPage extends Component{
    render(){
        return(
            <div className="academy-component">
                <Header/>
                <div className="academy-container">
                    <h1>Academy Page</h1>
                </div>
            </div>
        )
    }
}
export default AcademyPage