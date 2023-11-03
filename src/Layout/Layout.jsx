import "./layout.scss"
import { Outlet } from "react-router"
import Header from "../Components/Header/Header"
import Footer from "../Components/Footer/Footer"

const Layout = () => {
   return(
      <>
      <header className="header">
         <Header />
      </header>
      <main className="container">
         <Outlet />
      </main>
      <footer className="footer">
         <Footer />
      </footer>
      </>
   )
}
export default Layout