import React from "react"
import {getProjectService} from "../project.service"
import {createTasksService, removeTasksService} from "../tasks.service"
import { useParams } from "react-router-dom"

function ProjectDetail(){

     const initialState = {
        name: "",
        description:"",
        tasks: []
     }

    const[project, setProject] = React.useState(initialState)
    const [loading, setLoading] = React.useState(false)
    const [showFormTasks, setShowFormTasks] = React.useState(false)
    const [inputTasks, setInputTasks] = React.useState({})
    
    const {projectId} = useParams()
 
    const getProject = async () => {
            const {data} = await getProjectService(projectId) 
            setProject(data)
            setLoading(true)
    }
    
    const createTask = async () => {
        const newOne = await createTasksService(projectId,inputTasks)
    }

    const removeTask = async (id) => {
        const deleteOne = await removeTasksService(id)
    }

    const handleSubmitRemoveTask = (id) => {
        removeTask(id)
    }

    const handleClickTasks = () => {
        setShowFormTasks(true)
    }

    const handleChange = ({target}) => {
        const {name,value} = target
        setInputTasks({
            ...inputTasks,
            [name]:value
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        createTask()
        setInputTasks({
            name:"",
            description:"",
        })
        setShowFormTasks(false)
    }

    React.useEffect(()=>{
        getProject()
    },[project])
    

    return(
        <section>
            <div>
                {loading ? 
                <div>
                    <h1>Project Detail</h1>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <div>
                        { project.tasks.map((item,idx) =>
                            <div key={item._id}>
                                <p>{item.name}</p>
                                    {/* <form onSubmit={() => handleSubmitRemoveTask(item._id)}>
                                        <input value={item._id} hidden></input>
                                        <button type="submit">Delete</button>
                                    </form> */}
                                    <button onClick={()=> handleSubmitRemoveTask(item._id)}>Delete</button>
                            </div>
                        )}
                    </div>
                    <button onClick={handleClickTasks}>Create new tasks</button>
                </div>
                : <p>loading...</p> }
                
            </div>
            
            {showFormTasks &&
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input name="name" value={inputTasks.name} onChange={handleChange}></input>
                <label>Description</label>
                <input name="description" value={inputTasks.description} onChange={handleChange}></input>
                <label>Status</label>
                <input name="status" value="open" readOnly></input>
                <button type="submit">Create Task</button>
            </form>
            }
        </section>
    )
}

export default ProjectDetail;