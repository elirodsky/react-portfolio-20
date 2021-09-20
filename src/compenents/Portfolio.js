import Project from "./Project";
import natureImage from "../assets/nature-image.jpg"
function Portfolio() {
    const myProjects = [
        {
            id: "project1",
            name: "project 1 name",
            link: "https://www.linkToYourProject.com",
            repo: "https://www.github.com/repo-name",
            image: natureImage
        },
        {
            id: "project2",
            name: "project 2 name",
            link: "https://www.linkToYourProject.com",
            repo: "https://www.github.com/repo-name",
            image: natureImage
        },
        {
            id: "project3",
            name: "project 3 name",
            link: "https://www.linkToYourProject.com",
            repo: "https://www.github.com/repo-name",
            image: natureImage
        },
        {
            id: "project4",
            name: "project 4 name",
            link: "https://www.linkToYourProject.com",
            repo: "https://www.github.com/repo-name",
            image: natureImage
        }
    ]
    return (
        <section className="portfolio">
            {myProjects.map(dataProject => (
                <Project project={dataProject} key={dataProject.id}/>
            ))}
        </section>
    )
}

export default Portfolio;