import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Home from './components/Home';
import NavSection from './components/Nav';
import TechnicalSkills from './components/Skills';
import $ from 'jquery';

function App() {
  return (
   <>
    <NavSection></NavSection>
    <Home></Home>
    <About></About>
    <TechnicalSkills></TechnicalSkills>
    <Projects></Projects>
    {/* <Contact></Contact> */}
   </>
  );
}

export default App;
