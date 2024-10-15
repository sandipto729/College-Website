import { Link, useNavigate } from "react-router-dom"
import { Routes } from "react-router-dom";
import ProjectDetailsPage from "./ProjectDeatilsPage";

function ProjectHomePage(){

const navigate=useNavigate();

    return (

        <div>
        <main className="flex-grow py-8 text-center">
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Explore the plethora of ongoing and completed projects being undertaken by the Computer Science and Engineering Department here at NIT Durgapur.
          </p>
          <Link to="/projects">
            <button className="mt-6 bg-[#22286b] text-white px-6 py-3 rounded-lg hover:bg-[#1c1f4b] transition duration-200">
              Explore Projects
            </button>
          </Link>
        </main>
 
        </div>
    )
}

export default ProjectHomePage