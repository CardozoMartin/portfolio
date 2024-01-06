import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/common/Navbar"
import Home from "./views/Home"
import Projects from "./views/Projects"


const Router = () => {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
    <Route exact path="/home" element={<Home />} />
    <Route exact path="/projects" element={<Projects />} />
    </Routes>

    </BrowserRouter>
  )
}

export default Router