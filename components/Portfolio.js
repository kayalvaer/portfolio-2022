import { Navbar, Container, Nav, Row, Col, Column, NavDropdown } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faAddressBook, faFileWord, faPhoneVolume, faUser, faRss, faMouse, faDownload } from '@fortawesome/free-solid-svg-icons'
import { faBehance, faDribbble, faFacebook, faGithub, faInstagram, faLinkedinIn, faPinterest, faTwitter, faWordpress, faWpexplorer } from '@fortawesome/free-brands-svg-icons';
import styles from '../styles/Main.module.css';
import about from '../styles/About.module.css';

export default function Portfolio() {
  return (
    <div class="container portfolio-wrap h-50 p-5" id="Portfolio">

            <div class="title text-white">
                <h3>What I do ?</h3>
            </div>

            <div class="row">
                <div class="col-lg-4 serv animateInLeft">
                    <div class="box1">
                        <i class="icon phone-icon"></i>
                        <div class="port-content text-white mt-5">
                            <h5>Web Design</h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt doloremque excepturi sit odit impedit, voluptas. Vel, facere nobis, beatae inventore maxime veniam!
                            </p>
                        </div>
                    </div>
                </div>


                <div class="col-lg-4 serv bounceInUp">
                    <div class="box1">
                        <i class="icon icon-desktop"></i>
                        <div class="content text-white pt-5">
                            <h5>Web Development</h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt doloremque excepturi sit odit impedit, voluptas. Vel, facere nobis, beatae inventore maxime veniam!
                            </p>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 serv bounceInRight">
                    <div class="box1">
                        <i class="icon icon-target"></i>
                        <div class="port-content text-white mt-5">
                            <h5>Project Management</h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt doloremque excepturi sit odit impedit, voluptas. Vel, facere nobis, beatae inventore maxime veniam!
                            </p>
                        </div>
                    </div>
                </div>

        </div>

    </div>
  )
}
