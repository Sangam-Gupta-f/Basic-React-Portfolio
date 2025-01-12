import React from "react";
import img from "./img.js"
import Imgformate from "./Imgformate.jsx"
function creatImg(props){
    return(
       <Imgformate 
       name={props.name}
       url={props.imgurl} />
    )
}
const Port=function Port(){
    return(
        <div className="port">
            <div className="head">
                <h1>PORTFOLIO</h1>
            </div>
            <div className="map">
            {img.map(creatImg)};
            </div>
            
        </div>
    )
}
export default Port;