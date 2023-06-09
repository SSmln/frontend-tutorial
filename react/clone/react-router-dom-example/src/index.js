import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter , Route , Switch  , Link} from 'react-router-dom';



function Home() {
  return(
      <div>
        <h2>Home</h2> 
          Home ...

      </div>
  )
}

function Topics() {
  return(
      <div>
        <h2>Topics</h2> 
          Topics ...
      </div>
  )
}
function Contact() {
  return(
      <div>
        <h2>Contact</h2> 
          Contact ..
      </div>
  )
}

function App() {
  return (
    <div>
      <h1>React Router Dom exmple</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/topics">Topics</Link></li>
        <li><Link to="/contact">Contact</Link></li>

      </ul>
      <Switch>
        <Route exact path= "/"><Home></Home></Route>
        <Route path = "/topics"><Topics></Topics></Route>
        <Route path= "/contact"><Contact></Contact></Route>
        <Route path= "/">Not found</Route>
      </Switch>
    
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
