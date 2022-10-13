import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import { useContext } from "react";
import DevJobsContext from "../context/DevJobs";

export default function SearchBar() {

    const {
        lightOrDark,
        lightDarkCardStyle,
        handleInputValPosition,
        handleSearch,
        handleInputValLocation,
        inputValPosition,
        inputValLocation,
        inputValFulltime,
        handleInputValFulltime
    } = useContext(DevJobsContext)

  return (
    <form style={lightOrDark ? lightDarkCardStyle : {}} onSubmit={handleSearch} >
        <div className="search">
            <FontAwesomeIcon icon={faSearch} className="icon"/>
            <input 
                type="text"  
                placeholder="Search by title, companies, expertise..."
                onChange={handleInputValPosition}
                value={inputValPosition}
                />
        </div>
        <div className="filter">
            <FontAwesomeIcon icon={faLocationDot} className="icon"/>
            <input 
                type="text"  
                placeholder="Search by location..."
                onChange={handleInputValLocation}
                value={inputValLocation}
            />
        </div>
        <div className="fulltimeSearch">
            <div className="fulltimeInput">
                <div className="divInput2">
                    <input 
                        type="checkbox" 
                        id="fullTime" 
                        checked={inputValFulltime}
                        onChange={handleInputValFulltime}
                        name="Full Time"
                    />
                    <div className="inputDiv2"></div>
                </div>
                <label htmlFor="fullTime">Full Time Only</label>
            </div>
            <Button type="submit" version="searchBtn">Search</Button>
        </div>
    </form>
  )
}
