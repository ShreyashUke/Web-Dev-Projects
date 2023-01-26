// import logo from './logo.svg';
import './App.css';
// import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './pages/home';
// import About from './pages/about';
import Footer from './footer';
// import Slider from './SliderLeft.js'

function App() {
  return (
    <>
    <Home/>
    {/* <Router>
      <Route path={'/page/'}>
        <Home />
      </Route>
      <Route path={'/page/about'}>
      <About />
      </Route>
    </Router> */}
    <Footer/>
    {/* <Slider/> */}
    </>
    

  );
}

export default App;
