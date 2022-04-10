import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Cover from './components/Cover';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Home from './components/Home';

function App() {
  return (
   <>
    <Home></Home>
    <Cover></Cover>
    <Projects></Projects>
    <Contact></Contact>
   </>
  );
}

export default App;
