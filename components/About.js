import { Navbar, Container, Nav, Row, Col, Column, NavDropdown } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faAddressBook, faFileWord, faPhoneVolume, faUser, faRss, faMouse, faDownload } from '@fortawesome/free-solid-svg-icons'
import { faBehance, faDribbble, faFacebook, faGithub, faInstagram, faLinkedinIn, faPinterest, faTwitter, faWordpress, faWpexplorer } from '@fortawesome/free-brands-svg-icons';
import styles from '../styles/Main.module.css';
import about from '../styles/About.module.css';

export default function About() {
  return (
    <main>
        <section className="bg-light text-dark p-5 h-50" id="abt-info">
          <div className="container main-wrapper d-flex justify-content-around">

            <div className="d-sm-flex ">

                <div className="abt-content m-5 mr-5 ">
                    <div className="abt-img">
                        <a className='kay-img position-relative ' > 
                            <Image src="/port-imgs/yellowkay.png"
                            width="800px"
                            height="800px"
                            alt="kay img"
                            className="rounded-circle border border-white border-5"
                            />
                        </a>
                    </div>
                    <div className="nav social-icons text-danger position-absolute">
                        <a href="#home" data-toggle="tooltip" data-animation="58" data-goto="1">
                            <span className="fa-stack ">
                                <FontAwesomeIcon icon={faFacebook} />
                            </span>
                        </a>
                        <a href="#home" data-toggle="tooltip" data-animation="58" data-goto="1">
                            <span className="fa-stack ">
                                <FontAwesomeIcon icon={faTwitter} />
                            </span>
                        </a>
                        <a href="#home" data-toggle="tooltip" data-animation="58" data-goto="1">
                            <span className="fa-stack ">
                                <FontAwesomeIcon icon={faInstagram} />
                            </span>
                        </a>
                        <a href="#home" data-toggle="tooltip" data-animation="58" data-goto="1">
                            <span className="fa-stack ">
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </span>
                        </a>
                        <a href="#home" data-toggle="tooltip" data-animation="58" data-goto="1">
                            <span className="fa-stack ">
                                <FontAwesomeIcon icon={faBehance} />
                            </span>
                        </a>
                        <a href="#home" data-toggle="tooltip" data-animation="58" data-goto="1">
                            <span className="fa-stack ">
                                <FontAwesomeIcon icon={faDribbble}  />
                            </span>
                        </a>
                    </div>
                </div>

              <div className="abt-content m-5 mr-5">
                <h1><span className="text-warning mb-4 display-5 fw-bold">About Me</span> </h1>
                <p className="desc my-5 fw-bolder">
                  With a background in psychology, a penchant for user centered design, I manage projects efficiently and am Agile. Otherwise, she enjoys tours in natural environments. Has high hopes for diversity & inclusion in the Nordic and the rest f the world.
                </p >
                  <a href="#" className="abt-cv text-danger mt-6 pt-5">
                    <span className="px-4">
                        <FontAwesomeIcon icon={faDownload}  />
                    </span>Download CV
                  </a>
                  <div className="content-list ">
                      <div className="row mt-5">
                      <div className="col-sm-6">
                                    <ul>
                                        <li>
                                            <label>Name:</label>
                                            <span>Kay Alvær</span>
                                        </li>

                                        <li>
                                            <label>Birthday:</label>
                                            <span>05 May 1981</span>
                                        </li>

                                        <li>
                                            <label>Age:</label>
                                            <span>40 Years</span>
                                        </li>

                                        <li>
                                            <label>Location:</label>
                                            <span>Oslo</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-sm-6">
                                    <ul>
                                        <li>
                                            <label>Phone:</label>
                                            <span>(+47) 91146992</span>
                                        </li>


                                        <li>
                                            <label>Email:</label>
                                            <span>keatlaretse30@gmail.com</span>
                                        </li>


                                        <li>
                                            <label>Skype:</label>
                                            <span>keatlaretse1</span>
                                        </li>



                                        <li>
                                            <label>Freelance:</label>
                                            <span>Available</span>
                                        </li>
                                    </ul>
                                </div>
                      </div>
                  </div>
              </div>
                            
            </div>

          </div>
        </section>
      </main>
  )
}