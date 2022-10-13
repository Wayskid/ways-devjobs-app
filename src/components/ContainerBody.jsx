import NavBar from "./NavBar"
import { useContext } from "react"
import DevJobsContext from "../context/DevJobs"
import { Routes, Route } from "react-router-dom"
import Details from "../pages/Details"
import Home from "../pages/Home"

export default function ContainerBody() {

    const {
        lightDarkStyle,
        lightOrDark,
    } = useContext(DevJobsContext)

  return (
        <div className="containerBody" style={lightOrDark ? lightDarkStyle : {}}>
            <NavBar />
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/details" element={<Details />}></Route>
            </Routes>
        </div>
  )
}
