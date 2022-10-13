import { createContext, useEffect, useState } from "react";
import Data from "../data.json";

const DevJobsContext = createContext();

export function DevJobsProvider({ children }) {

    // Light or Dark mode
    const [lightOrDark, setLightOrDark] = useState(
        JSON.parse(localStorage.getItem("theme")) || false
    );

    const lightDarkStyle = {
        backgroundColor: "#000814",
    };

    const lightDarkCardStyle = {
        backgroundColor: "#000c1f",
        color: "#f1f1f1",
    };

    function handleTheme() {
        setLightOrDark(!lightOrDark);
    }


    // Show job details
    const [jobClicked, setJobClicked] = useState("");

    function handleJobClick(job) {
        setJobClicked(job);
    }


    // LocalStorage
    useEffect(() => {
        localStorage.setItem("theme", JSON.stringify(lightOrDark));
    }, [lightOrDark]);


    //Search and Filter
    const [inputValPosition, setInputValPosition] = useState("");
    const [searched, setSearched] = useState([]);
    const [inputValLocation, setInputValLocation] = useState("");
    const [inputValFulltime, setInputValFulltime] = useState(false);
    const [fullTime, setFulltime] = useState("");

    function handleInputValPosition(e) {
        setInputValPosition(e.target.value);
    }

    function handleInputValLocation(e) {
        setInputValLocation(e.target.value);
    }

    function handleInputValFulltime() {
        setInputValFulltime(!inputValFulltime);
    }

    useEffect(()=>{
        if (inputValFulltime) {
            setFulltime("Full Time")
        }else{
            setFulltime("")
        }
    }, [inputValFulltime])

    function handleSearch(e) {
        e.preventDefault();
        setSearched(
            Data.filter((el) => {
                if (
                    (el.position
                        .toLowerCase()
                        .includes(inputValPosition.toLowerCase()) &&
                        el.location
                            .toLowerCase()
                            .includes(inputValLocation.toLowerCase()) && 
                            el.contract.includes(fullTime)) ||
                    (el.company
                        .toLowerCase()
                        .includes(inputValPosition.toLowerCase()) &&
                        el.location
                            .toLowerCase()
                            .includes(inputValLocation.toLowerCase()) && 
                            el.contract.includes(fullTime))
                ) {
                    return el;
                }
            })
        );
    }

    useEffect(() => {
        if (!inputValPosition && !inputValLocation && !inputValFulltime) {
            setSearched(Data);
        }
    }, [inputValPosition, inputValLocation, inputValFulltime]);


    return (
        <DevJobsContext.Provider
            value={{
                handleTheme,
                lightOrDark,
                lightDarkStyle,
                lightDarkCardStyle,
                handleJobClick,
                jobClicked,
                handleInputValPosition,
                inputValPosition,
                handleInputValLocation,
                inputValLocation,
                handleInputValFulltime,
                inputValFulltime,
                handleSearch,
                searched,
            }}
        >
            {children}
        </DevJobsContext.Provider>
    );
}

export default DevJobsContext;
