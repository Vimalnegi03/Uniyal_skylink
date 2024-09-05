import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Members from './components/Members';
import Plans from './components/Plans';
import ContactForm from './components/Contact_us';
import MapComponent from './components/Geographical';
import Header from './components/Header';

function App() {
  return (
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
  );
}

export default App;
