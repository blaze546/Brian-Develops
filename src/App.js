import './App.css';
import CollapsibleExample from './Components/Navbar';
import WelcomeSection from './Components/WelcomeSection';
import InfoSection from './Components/InfoSection';
import ServicesSection from './Components/ServicesSection';
import AboutSection from './Components/AboutSection';
import IndividualIntervalsExample from './Components/ProjectSection';
import ContactSection from './Components/ContactSection';
import CustomFooter from './Components/CustomFooter';
import FooterSection from './Components/FooterSection';

function App() {
  return (
    <div className="App">
      <CollapsibleExample />
      <WelcomeSection />
      <InfoSection />
      <ServicesSection />
      <IndividualIntervalsExample />
      <AboutSection />
      <ContactSection />
      <FooterSection />
      <CustomFooter />
    </div>
  );
}

export default App;
