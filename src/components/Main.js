import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Resume from "./Resume";
import MainPage from "./MainPage";

function Main({currentPage}) {
    function renderMainPageComponent() {
        switch (currentPage) {
            case "About Me":
                return <About />;
            case "Portfolio":
                return <Portfolio />;
            case "Contact":
                return <Contact />;
            case "Resume":
                return <Resume />;
            default:
                return <About />;
        }
    }

    return (
        <main>
            <h1>{currentPage}</h1>
            <MainPage contentComponent={renderMainPageComponent()} />
        </main>
    )
}
export default Main;