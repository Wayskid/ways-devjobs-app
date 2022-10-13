import { useContext } from 'react'
import DevJobsContext from '../context/DevJobs'
import JobDetails from '../components/JobDetails'

export default function Details() {

  const {
    jobClicked
  } = useContext(DevJobsContext)

  return (
    <>
        {jobClicked ? <JobDetails /> : <p className='NoJobClicked'>Go to homepage and click on a Job to view Job Details and apply</p>}
    </> 
  )
}
