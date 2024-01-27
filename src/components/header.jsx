// #3 STEP
import Header from '../components/header.jsx';

// These components are small organized isolated parts of an app
// Here we would have a child component from the parent in Apps.jsx

function header() {
    const name = 'Hector';

    return (
        <header className='header'>
            
            <h1>{name}</h1>
            
            <Header />
        </header>
    )
}

// exporting to the NextComponent file
export default header;