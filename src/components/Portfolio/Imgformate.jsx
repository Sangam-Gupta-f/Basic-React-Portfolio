import React from "react";
import "./Port.scss";
const Imgformate=function Imgformate(props){
    return(
    <div className="formate">
      <div className="imgbox">
        <div className="imgname">
            <h1>{props.name}</h1>
        </div>
        <div className="imgdiv">
            <img src={props.url} alt="" />
        </div>
      </div>
        
          
    </div>
    )
}
export default Imgformate;