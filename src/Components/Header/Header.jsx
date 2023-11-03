import "./header.scss"
import {ReactComponent as HeaderLogo1} from "../../Images/HeaderLogo1.svg"
import {ReactComponent as HeaderLogo2} from "../../Images/HeaderLogo2.svg"
import {ReactComponent as HeaderLogo3} from "../../Images/HeaderLogo3.svg"
import {ReactComponent as HeaderLogo4} from "../../Images/HeaderLogo4.svg"

import {ReactComponent as LeftArrow} from "../../Images/ArrowLeft.svg"
import {ReactComponent as RightArrow} from "../../Images/ArrowRight.svg"




const Header = () => {

   
   const headerData = [
      {image: HeaderLogo1, lable:"30-DAY SATISFACTION GUARANTEE"},
      {image: HeaderLogo2, lable:"Free delivery on orders over $40.00"},
      {image: HeaderLogo3, lable:"50.000+ HAPPY CUSTOMERS"},
      {image: HeaderLogo4, lable:"100% Money Back Guarantee"},
   ]
   const ImageData = headerData[0].image
   return(
      <div className="headerDiv">
         <LeftArrow className="arrow"/>
         <div className="flex">
            {headerData.map(data => (
               <div key={data.lable} className="headerInfo">
                  <data.image className="headerLogo"/>
                  <div className="headerLable">{data.lable}</div>
               </div>
            ))}
         </div>
         <div className="flex2">
            <div className="headerInfo">
               <ImageData className="headerLogo"/>
               <div className="headerLable">{headerData[0].lable}</div>
            </div>
         </div>
         <RightArrow className="arrow"/>
      </div>
   )
}

export default Header