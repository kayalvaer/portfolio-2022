import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faAddressBook, faFileWord, faPhoneVolume, faUser, faRss, faMouse } from '@fortawesome/free-solid-svg-icons'
import { faBehance, faDribbble, faFacebook, faGithub, faPinterest, faTwitter, faWordpress, faWpexplorer } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="container-fluid bg-dark h-30 mt-5">
        <div className="row d-flex justify-content-center flex-row text-secondary">
            <div className="col-lg-8 col-md-10 mx-auto">
                <ul className="list-inline text-center py-5">
                    <li className="list-inline-item">
                        <Link href="https://www.facebook.com" target="_blank">
                            <a className="fa-stack fa-lg">
                                <FontAwesomeIcon icon={faFacebook} className="fa-stack-2x fa-inverse" />
                            </a>
                        </Link>
                    </li>
                    <li className="list-inline-item">
                        <Link href="http://userstory.com" target="_blank">
                            <a className="fa-stack fa-lg">
                                <FontAwesomeIcon icon={faWordpress} className="fa-stack-2x fa-inverse" />
                            </a>
                        </Link>
                    </li>
                    <li className="list-inline-item">
                        <Link href="https://github.com" target="_blank">
                            <a className="fa-stack fa-lg">
                                <FontAwesomeIcon icon={faGithub} className="fa-stack-2x fa-inverse" />
                            </a>
                        </Link>
                    </li>
                </ul>
                <p className="copyright text-secondary d-flex justify-content-center align-center">
                    Copyright &copy;
                    <Link className="text-muted" href="https://github.com" target="_blank"> ❤️ Kay Alvaer</Link>
                </p>
            </div>
        </div>
      </footer>
  )
}