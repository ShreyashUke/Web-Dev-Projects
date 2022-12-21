import './App.css';
import './index.css'
import './Card.css'
import './footer.css'
import profile from './profile.png'

let name = "<b>Amey<b>";
function App() {
  return(
    <>
  
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
  
    <a className="navbar-brand" href="/">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Favorite</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Feedback</a></li>
            <li><a className="dropdown-item" href="/">Report</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
        <button className="btn-outline-success" type="submit">Search</button>
      </form>
      
          <a className="login" aria-current="page" href="/">Login</a>
          <a className="signin" aria-current="page" href="/">Sign in</a>

        <div className='profile'>
          <img src={profile} alt="profile" />
        </div>
    </div>
  </div>
</nav>

{/* Footer */}
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
    // </>
  );
}

export default App;
