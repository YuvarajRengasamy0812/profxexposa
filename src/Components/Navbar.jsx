import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <div>
      <div className="collapse navbar-collapse justify-content-center" id="bs-example-navbar-collapse-1">
        <ul className="navbar-nav align-items-center" id="responsive-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link px-2 my-4 py-0 text-white">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/About" className="nav-link px-2 my-4 py-0 text-white">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/Eventlists" className="nav-link px-2 my-4 py-0 text-white">Agenda</Link>
          </li>
          {/* <li className="nav-item">
            <Link to="/Speakerlists" className="nav-link px-2 my-4 py-0 text-white">Speaker</Link>
          </li> */}
          <li className="nav-item">
            <Link to="/pricing" className="nav-link px-2 my-4 py-0 text-white">Tickets</Link>
          </li>
          <li className="nav-item">
            <Link to="/Exhibitors" className="nav-link px-2 my-4 py-0 text-white"> Exhibitors</Link>
          </li>
          <li className="nav-item">
            <Link to="/Sponsers" className="nav-link px-2 my-4 py-0 text-white"> Sponsors</Link>
          </li>
          <li className="nav-item dropdown">
            <a href=''
              className="dropdown-toggle nav-link px-2 my-4 py-0 text-white"
              id="pagesDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Company</a>
            <ul className="dropdown-menu bg-lightgrey p-0 rounded" aria-labelledby="pagesDropdown">
              <li><Link className="dropdown-item py-3 px-6 text-capitalize black border-0" to="/Contact">Contact</Link></li>
              <li><Link className="dropdown-item py-3 px-6 text-capitalize black border-0" to="/Ourgallery">Gallery</Link></li>
              <li><Link className="dropdown-item py-3 px-6 text-capitalize black border-0" to="/Faq">Faq</Link></li>
              <li><Link className="dropdown-item py-3 px-6 text-capitalize black border-0" to="/Bloglists">Blogs</Link></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
