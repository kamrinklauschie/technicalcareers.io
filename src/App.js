import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import IndexPage from "./modules/IndexPage";
import CareerPage from "./modules/CareerPage";
import AboutPage from "./modules/AboutPage";

function App() {
  return (
  <Router>
    <Route path="/" exact component={IndexPage} />
    <Route path="/about" component={AboutPage} />
    <Route path="/career" component={CareerPage} />
  </Router>
  );
}

export default App;
