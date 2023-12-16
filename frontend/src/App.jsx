import About from "./component/About"
import Contact from "./component/Contact"
import Home from "./component/Home"
import Navbar from "./component/Navbar"
import Protfolio from "./component/Protfolio"
import SocialLinks from "./component/SocialLinks"

function App() {


  return (
    <div >
      <Navbar/>
      <Home/>
      <SocialLinks/>
      <About/>
      <Protfolio/>
      <Contact/>
    </div>
  )
}

export default App
