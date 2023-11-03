import "./content.scss"
import {ReactComponent as Percent} from "../../../Images/percent.svg"

const RightPercent = () => {
   return(
      <div className="percentDiv">
         <div className="percentImgDiv">
            <Percent className="percentImg"/>
         </div>
         <p className="text">Save 
            <span className="textBlue"> 53% </span> 
            and get <span className="textBlue"> 6 extra Clarifision </span> 
            for only <span className="textBlue"> $14 Each. </span>
         </p>
      </div>
   )
}
export default RightPercent