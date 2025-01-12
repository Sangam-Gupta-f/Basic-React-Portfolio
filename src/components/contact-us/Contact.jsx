import React from "react";
import "./Contact.scss";
const Contact=function contact(){
   return(
    <div>
         <div className="form">
            <div>
               <h2>Contact Us</h2>
            </div>
            <div>
               <form className="form-in">
                <div>
                <label>Sangam</label>
                <input type="text"></input>
                </div>
                 <div>
                 <label>Email</label>
                 <input type="email"></input>
                 </div>
                 <div>
                 <label>Phone</label>
                 <input type="number"></input>
                 </div>
                 <div>
                 <label>Message</label>
                 <input type="message"></input>
                 </div>
                 <div>
                    <button>Submit</button>
                 </div>
                 
                 
               </form>
            </div>
            
         </div>
    </div>
   )
}
export default Contact;