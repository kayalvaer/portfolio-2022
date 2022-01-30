import { Navbar, Container, Nav, Row, Col, Column, NavDropdown } from 'react-bootstrap';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faAddressBook, faFileWord, faPhoneVolume, faUser, faRss, faMouse } from '@fortawesome/free-solid-svg-icons'
import { faBehance, faDribbble, faFacebook, faGithub, faPinterest, faTwitter, faWordpress, faWpexplorer } from '@fortawesome/free-brands-svg-icons';
import styles from '@/styles/Main.module.css';

export default function SideFooter() {
  return (
    <header>
        <div className="brand-header p-3 display-none position-fixed pt-0 w-100 d-none d-md-block d-lg-none">
          <div className="d-flex d-none d-lg-block d-xl-none">
            <div className="navbar-brand">
              <span className="text-bolder logo">
                     KAY ALVÆR
              </span>
            </div>
          </div>
        </div>
       

        <section className="menu-wrap d-none d-lg-block" id="basic-navbar-nav">
          <div className="nav-top d-flex align-center ">
            <a href="#" className="text-white pt-2 text-center">
                <span className="fa-stack ">
                  <FontAwesomeIcon icon={faMouse} className="fa-stack-2x" />
                </span>
                
              </a>
          </div>

         
          <section id="basic-navbar-nav navbar.collapse "> 
            <ul className="nav nav-menu list-group pt-5 pb-2">
                <li>
                  <a href="#home" className="nav-link active " data-toggle="tooltip" title="HOME" data-animation="58" data-goto="1">
                    <span className="fa-stack ">
                      <FontAwesomeIcon icon={faUser} className="fa-stack-2x" />
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#about" className="nav-link " data-toggle="tooltip" title="ABOUT">
                    <span className="fa-stack ">
                      <FontAwesomeIcon icon={faAddressBook} className="fa-stack-2x" />
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#service" className="nav-link " data-toggle="tooltip" title="RESUME">
                    <span className="fa-stack ">
                      <FontAwesomeIcon icon={faFileWord} className="fa-stack-2x" />
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#works" className="nav-link " data-toggle="tooltip" title="WORK">
                    <span className="fa-stack">
                      <FontAwesomeIcon icon={faWpexplorer} className="fa-stack-2x " />
                    </span>       
                  </a>
                </li>
                <li>
                  <a href="#blog" className="nav-link " data-toggle="tooltip" title="BLOG">
                    <span className="fa-stack">
                      <FontAwesomeIcon icon={faRss} className="fa-stack-2x " />
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#contact" className="nav-link " data-toggle="tooltip" title="CONTACT">
                    <span className="fa-stack">
                      <FontAwesomeIcon icon={faPhoneVolume} className="fa-stack-2x" />
                    </span>       
                  </a>
                </li>
            </ul>
          
          </section>
        </section>
      </header>
  )
}




