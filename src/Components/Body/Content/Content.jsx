import "./content.scss"
import ContentImage from "../../../Images/ContentImage.png"
import LeftFooter from "./LeftFooter"
import RightCenter from "./RightCenter"
import RightBottom from "./RightBottom"
import ButtonPay from "./ButtonPay"
import RightFooter from "./RightFooter"
import RightPercent from "./RightPercent"
import RightTitle from "./RightTitle"


const Content = () => {


   return (
      <div className="contentDiv">
         <div className="left">
            <img src={ContentImage} alt="" className="leftImg"/>
            <LeftFooter />
         </div>
         <div className="right">
            <div className="rightContent">
               <RightTitle />
               <RightCenter />
               <RightBottom />
               <RightPercent />
               < ButtonPay />
            </div>
            <RightFooter />
         </div>
      </div>
   )
}

export default Content