import "./content.scss"
import GroupImage from "../../../Images/Group1.png"
import {ReactComponent as Vector} from "../../../Images/Vector1.svg"
import {ReactComponent as Group} from "../../../Images/Group2.svg"

const RightCenter = () => {
   return(
   <div className="rightCenter">
      <img src={GroupImage} alt="" className="rightimage"/>
      <div className="rightTexts">
         <div className="titleDiv">
            <h3 className="title">Clarifion Air Ionizer</h3>
            <div className="priceDiv">
               <p className="priceGray">$180</p>
               <p className="priceBlue">$84</p>
            </div>
         </div>
         <div className="likeDiv">
            <Vector className="vectorLike"/>
            <Vector className="vectorLike"/>
            <Vector className="vectorLike"/>
            <Vector className="vectorLike"/>
            <Vector className="vectorLike"/>
         </div>
         <div className="subTitleDiv">
            <Group className="subTitleSvg"/>
            <p className="subTitle">12 left in Stock</p>
         </div>
         <p className="text">Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.</p>
      </div>
   </div>
   )
}

export default RightCenter