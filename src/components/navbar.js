import React from 'react'
import PropTypes from 'prop-types'

const Navbar = (props) => {

        const textColor =  props.mode==='dark'?'light':'dark';
    return (
        <>
            <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
                <div className="container-fluid">
                    <a className={`navbar-brand text-${textColor}`} href="/">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className={`nav-link active text-${textColor}`} aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link text-${textColor}`} href="/">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className={`nav-link dropdown-toggle text-${textColor}`} href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className={`dropdown-menu bg-${props.mode}`}>
                                    <li><a className={`dropdown-item text-${textColor}`} href="/">Action</a></li>
                                    <li><a className={`dropdown-item text-${textColor}`} href="/">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className={`dropdown-item text-${textColor}`} href="/">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link disabled text-${textColor}`}>Disabled</a>
                            </li>
                        </ul>
                        <div className="form-check form-switch me-3">
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
                            <label className={`form-check-label text-${textColor}`} for="flexSwitchCheckDefault">{props.mode==='light'?'Enable Light Mode':'Enable Dark Mode'}</label>
                        </div>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className={`btn btn-outline-success text-${textColor}`} type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
}

Navbar.defaultProps = {
    title: "Deafult Title",
}