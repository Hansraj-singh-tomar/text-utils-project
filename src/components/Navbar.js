import React from 'react';
import PropTypes from 'prop-types'; // impt shortcut hai ye likhne ka
// import { Link } from 'react-router-dom';
export default function Navbar(props) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
                    <a className="navbar-brand" href="/">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                {/* <Link className="nav-link" to="/about">{props.aboutText}</Link> */}
                                <a className="nav-link" href="/about">{props.aboutText}</a>
                            </li>
                        </ul>
                        {/* <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                        {/* <div className="d-flex">
                            <div className="bg-primary rounded mx-2" onClick={() => { props.toggleMode('primary') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }} ></div>
                            <div className="bg-danger rounded mx-2" onClick={() => { props.toggleMode('danger') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }} ></div>
                            <div className="bg-success rounded mx-2" onClick={() => { props.toggleMode('success') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }} ></div>
                            <div className="bg-warning rounded mx-2" onClick={() => { props.toggleMode('warning') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }} ></div>
                        </div> */}
                        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                            {/* // Excercise-2 ka code */}
                            {/* <input className="form-check-input" onClick={() => { props.toggleMode(null) }} type="checkbox" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Toggle Mode</label> */}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

Navbar.prototypes = { // ye btate hai ki jo props hai uska type kya hai
    title: PropTypes.string.isRequired, // agar mene title="1234" pass kar diya to ye prototypes mujhe error de dega ki title of type is 'number' you need to write string over here
    aboutText: PropTypes.string,  // isRequired likhne par mujhe props pass karna hi padega nhi to ye error de dega agar defaultProps set hai tab error nhi dega
}
// Navbar.prototypes me p ko capital nhi karna hai


// what is default props value

Navbar.defaultProps = {
    title: 'set title here',
    aboutText: 'About'
};
// agar me title ot aboutText ki value pass na karu ya pass karna bhul jau tab ye defaultprops ki value pass ho jayegi


