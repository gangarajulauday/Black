import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/Pages/About';
import Services from './components/Pages/Services';
import Products from './components/Pages/Products';
import ContactUs from './components/Pages/ContactUs';
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
        <Route path="/About" element={<Layout><About /></Layout>} />
        <Route path="/Services" element={<Layout><Services /></Layout>} />
        <Route path="/Products" element={<Layout><Products /></Layout>} />
        <Route path="/ContactUs" element={<Layout><ContactUs /></Layout>} />
         {/* Add other routes here */}
      </Routes>
      </div>
  );
}

export default App;