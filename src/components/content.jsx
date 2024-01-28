// #4 STEP
import Aboutme from '../components/aboutme.jsx';
import PortfolioH from '../components/portfolio.jsx';
import ContactH from '../components/contact.jsx';
import ResumeH from '../components/resume.jsx';

function Content({ AboutMeValue }) {

        return(
        <div>
            <section>
                <h1>content section:</h1>
            {AboutMeValue ? <Aboutme/> : null},
            {PortfolioValue ? <PortfolioH/> : null},
            {ContactValue ? <ContactH/> : null},
            {ResumeValue ? <ResumeH/> : null}
            </section>
        </div>
        );
}
    export default Content;