import SearchBar from "../components/SearchBar"
import DevJobsGrid from "../components/DevJobsGrid"
import Button from "../components/Button"

export default function Home() {
  return (
    <>
        <SearchBar />
        <DevJobsGrid />
        <Button
            type="button"
            version="loadMore"
        >Load More</Button>
    </>
  )
}
