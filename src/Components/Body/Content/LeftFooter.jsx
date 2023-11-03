import "./content.scss"
import {ReactComponent as Vector} from "../../../Images/Vector1.svg"
import {ReactComponent as Vector2} from "../../../Images/Vector2.svg"
import Rectangle from "../../../Images/Rectangle.png"


const LeftFooter = () => {
   return(
      <div className="leftFooter">
         <div className="footerContentDiv">
            <img src={Rectangle} className="img"/>
            <div className="footerTextsDiv">
               <div className="footerTextTop">
                  <div className="likeDiv">
                     <Vector className="vectorLike"/>
                     <Vector className="vectorLike"/>
                     <Vector className="vectorLike"/>
                     <Vector className="vectorLike"/>
                     <Vector className="vectorLike"/>
                  </div>
                  <div className="footerText">
                     <p className="textName">Ken T.</p>
                     <Vector2 className="vectorVery"/>
                     <p className="textGreen">Verified Customer</p>
                  </div>
               </div>
               <div></div>
            </div>
         </div>
         <div className="footerContenText">
            <p className="text">“As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I could breathe better. Wonderful.”</p>
         </div>
      </div>
   )
}

export default LeftFooter