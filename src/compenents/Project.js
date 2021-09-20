function Project( {project} ) {
    return (
        <div className="project">
            <h1>{project.name}</h1>
            <img style={{width:"500px"}} src={project.image}></img>
            <div className="project-links">
                <a href={project.repo}>Github</a>
                <a href={project.link}>Live Site</a>
            </div>
        </div> 
    )
}
export default Project;