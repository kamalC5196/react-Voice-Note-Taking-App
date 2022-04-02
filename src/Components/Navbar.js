import React from 'react';

export default function Navbar({ theme }) {
  return (
    <nav className={`navbar navbar-${theme} bg-${theme}`}>
      <a className="navbar-brand">Navbar</a>
      <form className="form-inline">
        <div className="row">
          <div className="col-sm-12">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search Notes..."
              aria-label="Search"
            />
          </div>
        </div>
      </form>
    </nav>
  );
}
