// import logo from './logo.svg';
import './App.css';
import './Card.js'
import './index.css'
function App() {
  return (
    <><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
    <><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/fontawesome.min.css" integrity="sha512-giQeaPns4lQTBMRpOOHsYnGw1tGVzbAIHUyHRgn7+6FmiEgGGjaG0T2LZJmAPMzRCl+Cug0ItQ2xDZpTmEc+CQ==" crossorigin="anonymous" referrerpolicy="no-referrer" /></>

    <div className="content">
      <img src="cyan.jpg" alt="bg" />
    </div>
   <footer className="bg-dark text-white">
    <div className="container text-center text-md-left">
          <h5 className="text-uppercase  font-weight-bold text-warning">Debugg</h5>
          <p className="one"> All rigths reserved | &copy; Copyright 2022</p>
          <p className="two">Follow us on</p>
          <div className="photo">
          <a href="https://facebook.com"><img src="facebook.png" alt="Facebook"/></a>
          </div>
    </div>
      
   </footer>
   </>
  );
}

export default App;
