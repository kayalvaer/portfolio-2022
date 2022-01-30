import Head from 'next/head';
import Layout from '../components/Layout';
import Image from 'next/image';
import Footer from '../components/Footer';
import TopFooter from '../components/TopFooter';
import SideFooter from '../components/SideFooter';
import Main from '../components/Main';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Row, Col, Column, NavDropdown } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faAddressBook, faFileWord, faPhoneVolume, faUser, faRss, faMouse } from '@fortawesome/free-solid-svg-icons'
import { faBehance, faDribbble, faFacebook, faGithub, faPinterest, faTwitter, faWordpress, faWpexplorer } from '@fortawesome/free-brands-svg-icons';
import styles from '../styles/Main.module.css';

export default function Home() {
  return (
    <Layout>
      

      <TopFooter />

      <SideFooter />

      <Main />

      <About />

      <Portfolio />

      <Footer />
    </Layout>
  )
}
