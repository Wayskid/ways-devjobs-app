import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSun } from "@fortawesome/free-solid-svg-icons"
import { faMoon } from "@fortawesome/free-solid-svg-icons"
import { useContext } from "react"
import DevJobsContext from "../context/DevJobs"
import { Link } from "react-router-dom"

export default function NavBar() {

    const {
        handleTheme,
        lightOrDark
    } = useContext(DevJobsContext)

  return (
    <nav>
        <div className="navWrap">
            <Link to="/">
                <h1 className="logo">waysjobs</h1>
            </Link>
            <div className="lightDark">
                <FontAwesomeIcon icon={faSun} />
                <div className="divInput">
                    <input
                        type="checkBox"
                        onChange={handleTheme}
                        checked={lightOrDark}
                        className="checkLightorDark"
                    />
                    <div className="inputDiv"></div>
                </div>
                <FontAwesomeIcon icon={faMoon} />
            </div>
        </div>
    </nav>
  )
}
