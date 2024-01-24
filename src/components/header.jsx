// #3 STEP
import content from './components/content.jsx';

// These components are small organized isolated parts of an app
// Here we would have a child component from the parent in Apps.jsx

function PortfolioH() {
    const name = 'Hector';
    const AboutMe = 'About me';
    const Portfolio = 'Portfolio';
    const Contact = 'Contact';
    const Resume = 'Resume';

    return (
        <div>
            <h1>{name}</h1>
            {/* ?do theese buttons need to be component files? */}
            <button>{AboutMe}</button>
            <button>{Portfolio}</button>
            <button>{Contact}</button>

            <button>{Resume}

            <content />
            </button>
        </div>
    )
}

// exporting to the NextComponent file
export default PortfolioH;