import React from 'react';
import './App.css';
import Top from './Components/Top.Js';
import WelcomeSection from './Components/WelcomeSection';
import './index.css';
import InfoSection from './Components/InfoSection';
import ServicesSection from './Components/ServicesSection';
import ProjectSection from './Components/ProjectSection';
import AboutSection from './Components/AboutSection';
import ContactSection from './Components/ContactSection';
import FooterSection from './Components/FooterSection';
import CustomFooter from './Components/CustomFooter';
import CollapsibleExample from './Components/Top.Js';

const App = () => {
  return (
    <div className='App'>
      <Top />
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

