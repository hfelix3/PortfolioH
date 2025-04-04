import { useState } from 'react';
import Content from './content';

export default function Navbar() {
    const linkStyle = { border: '1px black', padding: '5px' };

    let [AboutMeValue, setAboutMe] = useState(false)
    const handleClickAbout = () => {
        setAboutMe(true);
        setPortfolio(false);
        setContact(false);
        setResume(false);
    }

    let [PortfolioValue, setPortfolio] = useState(false)
    const handleClickPort = () => {
        setAboutMe(false);
        setPortfolio(true);
        setContact(false);
        setResume(false);
    }

    let [ContactValue, setContact] = useState(false)
    const handleClickCont = () => {
        setAboutMe(false);
        setPortfolio(false);
        setContact(true);
        setResume(false);
    }

    let [ResumeValue, setResume] = useState(false)
    const handleClickRes = () => {
        setAboutMe(false);
        setPortfolio(false);
        setContact(false);
        setResume(true);
    }

    return (
        <>
        <nav className="nav">
                {/* make Anchors buttons? that have an event handler like onClick={props.clickHandler} "from the parent file" or onClick={function name here} "within file calling on the function" look at 40:00 in react day 2 zoom */}
                <div style={linkStyle}>
                    <button id='clickable' type ="button" onClick={handleClickAbout} href="#aboutme" >About Me</button>
                </div>
                <div style={linkStyle}>
                    <button id='clickable' type ="button" onClick={handleClickPort} href="#portfolio" >Portfolio</button>
                </div>
                <div style={linkStyle}>
                    <button id='clickable' type ="button" onClick={handleClickCont} href="#contact" >Contact</button>
                </div>
                <div style={linkStyle}>
                    <button id='clickable' type ="button" onClick={handleClickRes} href="#resume" >Resume</button>
                </div>
        </nav>
        <Content 
        AboutMeValue={AboutMeValue}
        PortfolioValue={PortfolioValue}
        ContactValue={ContactValue}
        ResumeValue={ResumeValue}/>
        </>
    );
}