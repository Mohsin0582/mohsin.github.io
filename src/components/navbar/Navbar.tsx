// import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FiDownload } from 'react-icons/fi';
import Contact from '../../components/contact/Contact.tsx';
import { ContactContext } from '../../components/contextProviders/Contexts.tsx';
import './Navbar.css';

const Navbar: React.FC = () => {
  const { close, handleContact } = useContext(ContactContext);
  // const [close, setClose] = useState<boolean>(false);

  // const handleContact = () => {
  //   setClose((prevClose) => !prevClose);
  // };

  // useEffect(() => {}, [close]);

  return (
    <>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost sm:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 nav-mid-links">
              <li>
                <NavLink to="/" className="">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="about" className="">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="work" className="">
                  Work
                </NavLink>
              </li>
              <li>
                <NavLink to="contact" className="">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <Link to="/" className="navbar-logo">
            <img
              src="/svg/mms-logo.svg"
              width="80"
              height="auto"
              alt="mms-logo"
            />
          </Link>
        </div>
        <div className="navbar-center hidden sm:flex">
          <ul className="menu menu-horizontal px-1 nav-mid-links">
            <li>
              <NavLink to="/" className="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="about">About</NavLink>
            </li>
            <li>
              <NavLink to="work">Work</NavLink>
            </li>
            <li>
              <button onClick={handleContact} className="contact-nav-link">
                Contact
              </button>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link
            className="download-resume"
            to="/pdf/mohsin-resume.pdf"
            download
          >
            Resume
            <FiDownload />
          </Link>
        </div>
      </div>

      <div className={close ? 'flex' : 'hidden'}>
        <Contact />
      </div>
    </>
  );
};

export default Navbar;
