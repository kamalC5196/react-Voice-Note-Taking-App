import React from 'react';

export default function Navbar({ theme }) {
  return (
    <nav className={`navbar navbar-${theme} bg-${theme}`}>
      <a className="navbar-brand">Navbar</a>
      <form className="form-inline">
        <div className="row">
          <div className="col-sm-6">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </div>
          <div className="col-sm-6">
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </nav>
  );
}
