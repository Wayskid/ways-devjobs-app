import { useContext } from "react"
import { Link } from "react-router-dom"
import DevJobsContext from "../context/DevJobs"

export default function Card({ job }) {

  const {
    lightOrDark,
    lightDarkCardStyle,
    handleJobClick
  } = useContext(DevJobsContext)

  return (
    <Link to="/details">
      <div 
        className="card" 
        style={lightOrDark ? lightDarkCardStyle : {}} 
        onClick={()=>handleJobClick(job)}
      >
          <div className="mid">
              <div className="timeContract">
                  <p className="postedAt">{job.postedAt}</p> . <p className="contract">{job.contract}</p>
              </div>
              <h2 className="position">{job.position}</h2>
              <p className="company">{job.company}</p>
          </div>
          <p className="location">{job.location}</p>
      </div>
    </Link>
  )
}
