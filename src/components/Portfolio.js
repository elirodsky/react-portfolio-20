import Project from "./Project";
import natureImage from "../assets/nature-image.jpg";
function Portfolio() {
    const myProjects = [
        {
            id: "project1",
            name: "Home City",
            link: "http://home-city-final.herokuapp.com/",
            repo: "https://github.com/elirodsky/Project-Three",
            image: homeCity
        },
        {
            id: "project2",
            name: "Favor Trader",
            link: "https://favortrader.herokuapp.com/",
            repo: "https://github.com/elirodsky/Project_2",
            image: natureImage
        },
        {
            id: "project3",
            name: "Note-Taker",
            link: "https://afternoon-scrubland-97212.herokuapp.com/",
            repo: "https://github.com/elirodsky/note-taker",
            image: natureImage
        },
        {
            id: "project4",
            name: "Team Profile Generator",
            link: "https://elirodsky.github.io/Team-Profile-Generator/",
            repo: "https://github.com/elirodsky/Team-Profile-Generator",
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