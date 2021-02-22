import React from "react";
import './Card-style.css';
import ProgressBar from 'react-bootstrap/ProgressBar'
const Card = props =>{
    return(
    <div className="card text-center">
        <div className="overflow">
            <img src={props.imgsrc} alt="" className="card-img-top" height="210px" width="30px"/>
            
        </div>
        <div className="card-body text-dark">
            <h4 className="card-title">{props.title}</h4>
            <span>Popularity<h6 style={{color:"green"}}>{props.popularity}%</h6></span>
                <ProgressBar variant="success" now={props.popularity} /><br/>
            <a href="#" className="btn btn-outline-success">Go to the Note</a>
        </div>
    </div>
    );
};

export default Card;