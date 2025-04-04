// #3 STEP

// These components are small organized isolated parts of an app
// Here we would have a child component from the parent in Apps.jsx

function Header() {
    const headerName = 'Hector Felix';

    return (
        <header className='header'>
            
            <h1>{headerName}</h1>
            
        </header>
    );
}

// exporting to the NextComponent file
export default Header;