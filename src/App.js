import ContainerBody from "./components/ContainerBody";
import DevJobsGrid from "./components/DevJobsGrid";
import NavBar from "./components/NavBar";
import { DevJobsProvider } from "./context/DevJobs";
import { BrowserRouter as Router } from "react-router-dom";



export default function App() {
  return (
    <DevJobsProvider>
      <Router>
        <ContainerBody />
      </Router>
    </DevJobsProvider>
  );
}


