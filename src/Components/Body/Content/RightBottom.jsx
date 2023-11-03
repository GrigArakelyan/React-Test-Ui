import "./content.scss"
import {ReactComponent as TickCircleBlue} from "../../../Images/TickCircleBlue.svg"

const RightBottom = () => {
   return(               
   <div className="rightBottom">
      <div className="TickCircleTextDiv">
         <TickCircleBlue className="TickCircle"/>
         <p className="text">Negative Ion Technology may help 
            <span className="boldText"> with allergens</span>
         </p>
      </div>
      <div className="TickCircleTextDiv">
         <TickCircleBlue className="TickCircle"/>
         <p className="text">Designed for  
            <span className="boldText"> air rejuvenation</span>
         </p>
      </div>
      <div className="TickCircleTextDiv">
         <TickCircleBlue className="TickCircle"/>
         <p className="boldText">Perfect for every room  
            <span className="text"> in all types of places.</span>
         </p>
      </div> 
   </div>)
}

export default RightBottom