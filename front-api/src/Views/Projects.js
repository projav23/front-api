import React from "react";
import {getAllProjectsService} from "../project.service"
import { Link } from "react-router-dom"

function Projects(){
    const[projects, setProjects] = React.useState([])

    const getAllProjects = async () => {
            const {data} = await getAllProjectsService() 
            setProjects(data)
    }
    
    React.useEffect(()=>{
        getAllProjects()
    },[])

    return(
        <main>
            <h1>Projects</h1>
            <div>
            {projects.map((item,idx) =>
                <Link to={`/projects/${item._id}`} key={item._id}>
                    <div>
                        <p>{item.title}</p>
                    </div>
                </Link>
            )}
            </div>
        </main>
    )
}

export default Projects;