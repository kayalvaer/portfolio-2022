import { Navbar, Container, Nav, Row, Col, Column, NavDropdown } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faAddressBook, faFileWord, faPhoneVolume, faUser, faRss, faMouse, faDownload } from '@fortawesome/free-solid-svg-icons'
import { faBehance, faDribbble, faFacebook, faGithub, faPinterest, faTwitter, faWordpress, faWpexplorer } from '@fortawesome/free-brands-svg-icons';
import styles from '@/styles/Main.module.css';
import about from '@/styles/About.module.css';

export default function Main() {
  return (
    <main>
        <section className="bg-black text-lght p-5 h-50">
          <div className="container main-wrapper d-flex justify-content-around ">

            <div className="d-sm-flex font-monospace">

              <div className="abt-content m-5 mr-5 mb-5">
                <h3 className="text-white mt-3 fw-bolder">I am a</h3>
                <h1 className="text-warning mb-4 display-4">Designer, Developer and Project leader </h1>
              
              </div>
            
            
                <div href='/'>
                    <a className='kay-img position-relative opacity-1' > 
                        <Image src="/port-imgs/kay2.png"
                        width="550px"
                        height="550px"
                        alt="kay img"
                        className="rounded-circle"
                        />
                    </a>
                </div>

                
            </div>

          </div>
        </section>
      </main>
  )
}



