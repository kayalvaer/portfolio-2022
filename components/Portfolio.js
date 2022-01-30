import { Navbar, Container, Nav, Row, Col, Column, NavDropdown } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faAddressBook, faFileWord, faPhoneVolume, faUser, faRss, faMouse, faDownload, faDesktop, faPhone, faBroadcastTower } from '@fortawesome/free-solid-svg-icons'
import { faBehance, faDribbble, faFacebook, faGithub, faInstagram, faLinkedinIn, faPinterest, faTwitter, faWordpress, faWpexplorer } from '@fortawesome/free-brands-svg-icons';
import styles from '../styles/Main.module.css';
import about from '../styles/About.module.css';

export default function Portfolio() {
  return (
    <div className="container portfolio-wrap h-50 p-5" id="Portfolio">

            <div className="title text-white">
                <h3>What I do ?</h3>
            </div>

            <div className="row d-flex justify-content-around">

                <div className="border border-light p-3 ml-4 col-lg-4 serv animateInLeft">
                    <div className="box1">
                        <a href="#home" data-toggle="tooltip" data-animation="58" data-goto="1">
                            <span className="fa-stack ">
                                <FontAwesomeIcon icon={faPhone} className="fa-stack-2x"/>
                            </span>
                        </a>
                        <div className="port-content text-white mt-5">
                            <h5>Web Design</h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt doloremque excepturi sit odit impedit, voluptas. Vel, facere nobis, beatae inventore maxime veniam!
                            </p>
                            <Link href="https://xd.adobe.com/view/895e5434-a851-43af-93aa-d77b347c80f3-dc0d" >
                                <button className="btn-warning p-2">
                                    View projects
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="border border-light p-3 col-lg-4 serv bounceInUp">
                    <div className="box1">
                        <a href="#home" data-toggle="tooltip" data-animation="58" data-goto="1">
                            <span className="fa-stack ">
                                <FontAwesomeIcon icon={faDesktop} className="fa-stack-2x"/>
                            </span>
                        </a>
                        <div className="content text-white pt-5">
                            <h5>Web Development</h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt doloremque excepturi sit odit impedit, voluptas. Vel, facere nobis, beatae inventore maxime veniam!
                            </p>
                            <Link href= "https://flowerpowersite.vercel.app/</div>">
                                <button className="btn-warning p-2">
                                    View projects
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="border border-light p-3 col-lg-4 serv bounceInRight">
                    <div className="box1">
                        <a href="#home" data-toggle="tooltip" data-animation="58" data-goto="1">
                            <span className="fa-stack ">
                                <FontAwesomeIcon icon={faBroadcastTower} className="fa-stack-2x"/>
                            </span>
                        </a>
                        <div className="port-content text-white mt-5">
                            <h5>Project Management</h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt doloremque excepturi sit odit impedit, voluptas. Vel, facere nobis, beatae inventore maxime veniam!
                            </p>
                            <Link href="https://xd.adobe.com/view/0394cb37-8758-4bdb-b4c4-c905cbce73f2-56c7/screen/2f4d2cf4-d2b7-448d-9768-6557955cdf0f" >
                                <button className="btn-warning p-2">
                                    View projects
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

        </div>

    </div>
  )
}
