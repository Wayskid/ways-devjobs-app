import { useContext } from "react";
import DevJobsContext from "../context/DevJobs";
import Button from "./Button";

export default function JobDetails() {
    
    const {
        jobClicked,
        lightDarkCardStyle,
        lightOrDark,
    } = useContext(DevJobsContext)

  return (
    <div className="jobDetails">
        <main>
            <header style={lightOrDark ? lightDarkCardStyle : {}}>
                <div className="companyName">
                    <h2 className="companyDet">{jobClicked.company}</h2>
                    <p className="webName">{jobClicked.company}.com</p>
                </div>
                <a href={jobClicked.website} className="compSite">Company Site</a>
            </header>
            <div className="detailsMain" style={lightOrDark ? lightDarkCardStyle : {}}>
                <div className="detailsMainTop">
                    <div className="positionApply">
                        <div className="positionGrid">
                            <div className="timeContract">
                                <p className="postedAt">{jobClicked.postedAt}</p> . <p className="contract">{jobClicked.contract}</p>
                            </div>
                            <h1 className="position">{jobClicked.position}</h1>
                            <p className="location">{jobClicked.location}</p>
                        </div>
                        <Button type="button" version="search">Apply Now</Button>
                    </div>
                    <p className="topText">{jobClicked.description}</p>
                </div>
                <div className="detailsMainMid">
                    <h2 className="requirements">Requirements</h2>
                    <p className="midText">{jobClicked.requirements.content}</p>
                    <ul className="midList">
                        <li>{jobClicked.requirements.items[0]}</li>
                        <li>{jobClicked.requirements.items[1]}</li>
                        <li>{jobClicked.requirements.items[2]}</li>
                        {jobClicked.requirements.items[3] && <li>{jobClicked.requirements.items[3]}</li>}
                    </ul>
                </div>
                <div className="detailsMainBottom">
                    <h2 className="Role">Role</h2>
                    <p className="midText">{jobClicked.role.content}</p>
                    <ul className="bottomList">
                        <li>{jobClicked.role.items[0]}</li>
                        <li>{jobClicked.role.items[1]}</li>
                        <li>{jobClicked.role.items[2]}</li>
                        {jobClicked.role.items[3] && <li>{jobClicked.role.items[3]}</li>}
                    </ul>
                </div>
            </div>
        </main>
        <footer style={lightOrDark ? lightDarkCardStyle : {}}>
            <div className="detailsFooter">
                <div className="positionGrid">
                    <h2 className="position">{jobClicked.position}</h2>
                    <p className="company">{jobClicked.company}</p>
                </div>
                <Button type="button" version="search">Apply Now</Button>
            </div>
        </footer>
    </div>
  )
}
