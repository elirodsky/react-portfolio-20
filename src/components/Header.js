function Header({changePage}) {
    function handleClick(event) {
        changePage(event.target.textContent);
    }
    return (
        <header>
            <nav>
                <div>Eli</div>
                <ul>
                    <li onClick={handleClick}>About Me</li>
                    <li onClick={handleClick}>Portfolio</li>
                    <li onClick={handleClick}>Contact</li>
                    <li onClick={handleClick}>Resume</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;