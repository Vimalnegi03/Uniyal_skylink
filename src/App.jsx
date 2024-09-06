import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet'; // Import Helmet for meta tags
import Members from './components/Members';
import Plans from './components/Plans';
import ContactForm from './components/Contact_us';
import MapComponent from './components/Geographical';
import Header from './components/Header';

function App() {
  return (
    <>
      <Helmet>
        <title>UniSkyLink - Wi-Fi, Fiber Plans & Members</title>
        <meta name="description" content="Explore UniSkyLink's Fiber plans, Wi-Fi connections, team members, and contact details for high-speed internet services." />
        <meta name="keywords" content="UniSkyLink, BSNL Fiber, Wi-Fi Connections, Contact Us, Members, Internet Service" />
        <meta name="author" content="Vimal Negi" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta property="og:title" content="UniSkyLink - High-Speed Internet & Fiber Plans" />
        <meta property="og:description" content="Check out the best internet services and plans available with UniSkyLink." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Plans />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/members" element={<Members />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/connections" element={<MapComponent />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
