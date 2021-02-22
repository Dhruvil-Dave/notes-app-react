import React,{Component} from "react";
import Card from './CardUI';
import img1 from "../assets/math.jpg";
import img2 from "../assets/cpp.jpg";
import img3 from "../assets/phy.jpg";

class Cards extends Component {
    render(){
        return(
    <>
        <div className="container-fluid d-flex justify-content-center">
            <div className="row">
                <div className="col-md-4">
                    <Card imgsrc={img1} title="Linear Algebra" popularity="97"/>
                </div>
                <div className="col-md-4">
                    <Card imgsrc={img2} title="C++ programming" popularity="89"/>
                </div>
                <div className="col-md-4">
                    <Card imgsrc={img3} title="Optical Physics" popularity="83"/>
                </div>
            </div>
        </div>   
        
        <div className="container-fluid d-flex justify-content-center">
            <div className="row">
                <div className="col-md-4">
                    <Card imgsrc={img1} title="Linear Algebra" popularity="79"/>
                </div>
                <div className="col-md-4">
                    <Card imgsrc={img2} title="C++ programming" popularity="77"/>
                </div>
                <div className="col-md-4">
                    <Card imgsrc={img3} title="Optical Physics" popularity="70"/>
                </div>
            </div>
        </div>
        <div className="container-fluid d-flex justify-content-center">
            <div className="row">
                <div className="col-md-4">
                    <Card imgsrc={img1} title="Linear Algebra" popularity="62"/>
                </div>
                <div className="col-md-4">
                    <Card imgsrc={img2} title="C++ programming" popularity="54"/>
                </div>
                <div className="col-md-4">
                    <Card imgsrc={img3} title="Optical Physics" popularity="50"/>
                </div>
            </div>
        </div> 
    </>
        );
    }
}

export default Cards;