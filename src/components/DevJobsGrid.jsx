import { useContext } from 'react'
import DevJobsContext from '../context/DevJobs'
import Card from './Card'

export default function DevJobsGrid() {

  const {
    searched
  } = useContext(DevJobsContext)

  const DataMapped = searched.map(el=>{
        return <Card 
          key={el.id}
          job={el}
        />
  })

  return (
    <section>
        <div className="cardsWrap">
           {searched.length ? DataMapped : <p className='searchEmpty'>No result found</p>}
        </div>
    </section>
  )
}


