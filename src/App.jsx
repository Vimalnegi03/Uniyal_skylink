import { useState } from 'react'
import Members from './components/Members'
import Plans from './components/Plans'
import ContactForm from './components/Contact_us'
import MapComponent from './components/Geographical'
import Header from './components/Header'
import { Link,Router,Routes,Route } from 'react-router-dom'
function App() {
  
  return (
    <>
   
   <Header/>
   <Routes>
        <Route path="/" element={<Plans />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/members" element={<Members />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/connections" element={<MapComponent/>} />
      </Routes>
    </>
   
  )
}

export default App
