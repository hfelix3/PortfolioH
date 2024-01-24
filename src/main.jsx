// #1 STEP
// TODO: IMPORT 
// First its importing the ReactDOM package
import ReactDOM from 'react-dom/client'
// Then the component called App
import App from './App.jsx'
import './index.css'

// This is gonna hold the target "<div>" where we create our 'root' end.
ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)