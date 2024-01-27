// #2 STEP
// TODO:IMPORT FROM COMPONENTS FOLDER
// import PortfolioH from './components/header.jsx';
import Header from './components/header.jsx';
import Navbar from './components/navbar.jsx';
import Content from './components/content.jsx';
import Footer from './components/footer.jsx';
// This is my main component or "Parent component" function
function App() {
    return
        <div>
            {/* <PortfolioH /> */}
            <Header />
            <Navbar />
            <Content />
            <Footer />
        </div>
}

export default App;