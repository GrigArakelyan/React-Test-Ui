import {ReactComponent as LockWite} from "../../Images/LockWite.svg"
import "./footer.scss"

const Footer = () => {
   return(
      <div className="footerDiv">
         <div className="leftDiv">
            <p className="text">Copyright (c) 2023</p>
            <div className="line"></div>
            <p className="text">Clarifionsupport@clarifion.com</p>
         </div>
         <div className="rightDiv">
            <LockWite className="icon"/>
            <p className="text">Secure 256-bit SSL encryption.</p>
         </div>
      </div>
   )
}

export default Footer