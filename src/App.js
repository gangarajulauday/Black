import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { 
  About,
  Services,
  Products,
  ContactUs,
  ItInfrastructurePlanning,
  CloudSolutions,
  ConsultingServices,
  ItSupport,
  ProjectScoping,
  Technology,
  Marketing,
  Commerce,
  Insights,
  AnalyticsPage,
  Blog,
  Careers,
  Jobs,
  Press,
  Claim,
  Policy,
  Terms
 } from './Pages';
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

function App() {
  return (
      <div>
      <Routes>
        <Route path="/" element={<Layout><Home/></Layout>} /> 
        <Route path="/About" element={<Layout><About /></Layout>} />
        <Route path="/Services" element={<Layout><Services /></Layout>} />
        <Route path="/Products" element={<Layout><Products /></Layout>} />
        <Route path="/ContactUs" element={<Layout><ContactUs /></Layout>} />

        <Route path="/it-infrastructure-planning" element={<Layout><ItInfrastructurePlanning /></Layout>} />
        <Route path="/cloud-solutions" element={<Layout><CloudSolutions /></Layout>} />
        <Route path="/consulting-services" element={<Layout><ConsultingServices /></Layout>} />
        <Route path="/it-support" element={<Layout><ItSupport /></Layout>} />
        <Route path="/project-scoping" element={<Layout><ProjectScoping /></Layout>} />
        <Route path="/technology" element={<Layout><Technology /></Layout>} />

        <Route path="/analytics" element={<Layout><AnalyticsPage /></Layout>} />
        <Route path="/marketing" element={<Layout><Marketing /></Layout>} />
        <Route path="/commerce" element={<Layout><Commerce /></Layout>} />
        <Route path="/insights" element={<Layout><Insights /></Layout>} />

        <Route path="/blog" element={<Layout><Blog /></Layout>} />
        <Route path="/careers" element={<Layout><Careers /></Layout>} />
        <Route path="/jobs" element={<Layout><Jobs /></Layout>} />
        <Route path="/press" element={<Layout><Press /></Layout>} />

        <Route path="/claim" element={<Layout><Claim /></Layout>} />
        <Route path="/policy" element={<Layout><Policy /></Layout>} />
        <Route path="/terms" element={<Layout><Terms /></Layout>} />
        
         {/* Add other routes here */}
      </Routes>
      </div>
  );
}

export default App;