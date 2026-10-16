import {BrowserRouter,Routes,Route,Link} from "react-router-dom"

import Home from "./component/Home"
import Aboutus from "./component/Aboutus"
import Contactus from "./component/Contactus"

function App() {
 
  return (
    <>
      <BrowserRouter>
      <ul>
        <li> <Link to="/">Home</Link> </li>
        <li> <Link to="/Aboutus">Aboutus</Link> </li>
        <li> <Link to="/Contactuss">Contactus</Link> </li>
      </ul>
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/Aboutus"  element={<Aboutus/>} />
        <Route path="/Contactus"  element={<Contactus/>} />
      </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
