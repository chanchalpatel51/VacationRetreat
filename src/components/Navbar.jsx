import React from 'react';

function Navbar({ brand, links }) {
  return (

    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold text-uppercase" href="#">{brand}</a>
          <button
            className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-center justify-content-around" id="navbarNav">
            <ul className="navbar-nav">
              {links.map((link) => {
                return (
                  <>
                    <li className="nav-item">
                      <a className="nav-link" href={link.href}>
                        {link.label}
                      </a>
                    </li>
                  </>
                )
              }
              )

              }


            </ul>
          </div>
        </div>
      </nav>

    </>
  );
}

export default Navbar;