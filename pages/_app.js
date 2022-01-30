// KindaCode.com source
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
   useEffect(() => {
   }, []);

   return <Component {...pageProps} />; 
}

export default MyApp;

// import 'bootstrap/dist/css/bootstrap.css';
// import '../styles/globals.css';
// import { useEffect } from "react";

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }

// export default MyApp;