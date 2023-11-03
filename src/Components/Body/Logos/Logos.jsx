import "./logos.scss"
import Clarifion from "../../../Images/Clarifion.png"
import McAfee from "../../../Images/McAfee.png"
import Norton from "../../../Images/Norton.png"


const Logos = () => {
   return(
      <div className="logosDiv">
         <img src={Clarifion} alt="" className="logo1"/>
         <div className="logoRightDiv">
            <img src={McAfee} alt="" className="logo2"/>
            <img src={Norton} alt="" className="logo2"/>
         </div>
      </div>
   )
}

export default Logos