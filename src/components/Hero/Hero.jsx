import "./Hero.scss"
import pic from "../assets/MY PIC.jpg"
const Hero=function hero(){
    return(
        <div className="h">
           <div className="hero">
             <div className="myimg">
                <img src={pic} alt="Pic" />
             </div>
             <div className="myname">
                <h1>Sangam Gupta</h1>
             </div>
             <div className="skills">
                <h2>Full-Stack Developer - Web Designer - WordPress</h2>
             </div>
             
             </div>
             
        </div>
    )
}
export default Hero;