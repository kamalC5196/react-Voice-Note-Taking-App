import React from "react";

export default function Navbar({ theme, setSearch }) {
  function handleSearch(e) {
    setSearch(e.target.value);
  }
  return (
    <nav className={`navbar navbar-${theme} bg-${theme} fixed-top`}>
      <a className="navbar-brand">NOTEBOOK</a>
      <form className="form-inline">
        <div className="row">
          <div className="col-sm-12">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search Notes..."
              aria-label="Search"
              onChange={handleSearch}
            />
          </div>
        </div>
      </form>
    </nav>
  );
}
