import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/Pages/About';
import { Analytics } from './components/Analytics';
import { Newsletter } from './components/Newsletter';
import Cards from './components/Cards';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom'

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar/>
      <main>{children}</main>
      <Footer/>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <Hero/>
      <Analytics/>
      <Newsletter/>
      <Cards/>
    </div>
  );
};

// const About = () => {
//   return (
//     <About/>
//   );
// };
function App() {
  return (
      <div>
      <Routes>
        <Route path="/" element={<Layout><Home/></Layout>} /> 
        <Route path="/About" element={<Layout><About /></Layout>} /> {/* Add other routes here */}
      </Routes>
      </div>
  );
}

export default App;