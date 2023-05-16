import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './pages/home';
// import All from './anagram/allAnagram';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Home/> */}
        <Routes>
          {/* <Route exact path="/allAnagram" element={<All/>} /> */}
          <Route exact path="/" element={<Home/>} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
