import "./content.scss"
import {ReactComponent as Line} from "../../../Images/Line.svg"
import {ReactComponent as Lock} from "../../../Images/Lock.svg"
import MasterCard from "../../../Images/mastercard.svg"
import PayPal from "../../../Images/paypal.svg"
import VisaCard from "../../../Images/visa.svg"
import DPay from "../../../Images/DPay.svg"
import GPay from "../../../Images/gpay.svg"
import ApplePay from "../../../Images/ApplePay.svg"
import Amex from "../../../Images/Amex.svg"



const ButtonPay = () => {

   return (
      <div className="buttonPayDiv">
         <button className="button">
            <div className="buttonTextDiv">
               <p className="buttonText">Yes - Claim my discount</p>
               <Line className="lineSvg"/>
            </div>
         </button>
         <div className="payDiv">
            <div className="payText1">
               <p className="payText">Free shipping</p>
               <div className="line"></div>
               <div className="lockPayTextDiv">
                  <Lock className="lockIcon" alt=""/>
                  <p className="payText">Secure 256-bit SSL encryption.</p>
               </div>
               <div className="line1"></div>
            </div>
            <div className="line2"></div>
            <div className="iconsDiv">
               <img src={VisaCard} className="iconPay" alt=""/>
               <img src={DPay} className="iconPay" alt=""/>
               <img src={PayPal} className="iconPay" alt=""/>
               <img src={MasterCard} className="iconPay" alt=""/>
               <img src={GPay} className="iconPay" alt=""/>
               <img src={ApplePay} className="iconPay" alt=""/>
               <img src={Amex} className="iconPay" alt=""/>
            </div>
         </div>
         <div className="redTextDiv">
            <p className="textRed">No thanks, I don’t want this.</p>
         </div>
      </div>
   )
}

export default ButtonPay