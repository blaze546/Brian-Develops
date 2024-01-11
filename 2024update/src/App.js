import React from 'react';
import './App.css';
import Header from './Components/Header.Js';
import WelcomeSection from './Components/WelcomeSection';
import './index.css';
import InfoSection from './Components/InfoSection';
import ServicesSection from './Components/ServicesSection';
import ProjectSection from './Components/ProjectSection';
import AboutSection from './Components/AboutSection';
import ContactSection from './Components/ContactSection';
import FooterSection from './Components/FooterSection';
import CustomFooter from './Components/CustomFooter';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <WelcomeSection />
      <InfoSection />
      <ServicesSection />
      <ProjectSection />
      <AboutSection />
      <ContactSection />
      <FooterSection />
      <CustomFooter />
      {/* Other sections and components */}
    </div>
  );
};

export default App;

