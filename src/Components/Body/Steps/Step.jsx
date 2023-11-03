import "./steps.scss"
import {ReactComponent as TickCircle} from "../../../Images/TickCircle.svg"

const Steps = () => {

   const steps = [
      {svg:TickCircle, number: "1", lable: "Step 1:", text: "Cart Review", color: "#85BF55"},
      {svg:TickCircle, number: "2", lable: "Step 2:", text: "Checkout", color: "#85BF55"},
      {svg: null, number: "3", lable: "Step 3:", text: "Special Offer", color: "#2C7EF8"},
      {svg: null, number: "4", lable: "Step 4:", text: "Confirmation", color: "#FFFFFF"}]
   return(
      <div className="steps">
         {steps.map(step => (
            <div key={step.number} className="step">
               <div className={step.color === "#FFFFFF" ? "stepIconDiv" : (step.color === "#2C7EF8" ? "stepBlue" : "stepGreen")}>
               {step.svg ? 
                  <step.svg className="stepSvg"/> : 
                  <div className={step.color === "#FFFFFF" ? "stepNumberBlue" : "stepNumberWite"}>{step.number}</div>
               }
               </div>
               <p className="stepTextTitle">{step.lable}</p>
               <p className="stepText">{step.text}</p>
            </div>
         ))}
      </div>
   )
}

export default Steps