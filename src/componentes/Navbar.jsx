import React from 'react'

const Navbar = () => {
  return (
    <nav>
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
        Superheroes
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Marvel</a>
 {/*          <Link className="nav-link" to="/movies">
                Movies
              </Link>  */}
            </li>
            <li className="nav-item">
     {/*    <Link className="nav-link" to="/search">
                Search
              </Link> */}
              <a className="nav-link active" aria-current="page" href="#">Search</a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <span className="nav-item nav-link text-info">
              William Benavides
            </span>
            <button className="btn btn-outline-success" type="submit">OnLogout</button>

         {/*      <button
                className="nav-item nav-link btn"
                onClick={handleLogout}
              >
                Logout
              </button>  */}
          </ul>
        </div>
      </div>
    </nav>
  </nav>

  )
}

export default Navbar