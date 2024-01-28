// #2 STEP
// TODO:IMPORT FROM COMPONENTS FOLDER
import Header from './components/header.jsx';
import Navbar from './components/navbar.jsx';
import Footer from './components/footer.jsx';
// This is my main component or "Parent component" function
function App() {
    return (
        <div>
            <Header />
            <Navbar />
            <Footer />
        </div>
    );
}

export default App;