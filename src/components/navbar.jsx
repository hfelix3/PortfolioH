export default function Navbar() {
    const linkStyle = { border: '1px black', padding: '5px' };

    return (
        <nav className="nav">
            <section>
                {/* make Anchors buttons? that have an event handler like onClick={props.clickHandler} "from the parent file" or onClick={function name here} "within file calling on the function" look at 40:00 in react day 2 zoom */}
                <div style={linkStyle}>
                    <a href="#">About</a>
                </div>
                <div style={linkStyle}>
                    <a href="#">Portfolio</a>
                </div>
                <div style={linkStyle}>
                    <a href="#">contact</a>
                </div>
                <div style={linkStyle}>
                    <a href="#">Resume</a>
                </div>
            </section>
        </nav>
    );
}