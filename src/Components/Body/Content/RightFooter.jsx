import "./content.scss"
import Image from "../../../Images/Image.png"

const RightFooter = () => {

   return(
   <div className="rightFooter">
      <img src={Image} className="img"/>
      <p className="text">If you are not completely thrilled with your Clarifion - We have a 
         <span className="textBold"> 30 day satisfaction guarantee. </span> 
         Please refer to our return policy at the bottom of the page for more details. Happy Shopping!
      </p>
   </div>
   )
}
export default RightFooter