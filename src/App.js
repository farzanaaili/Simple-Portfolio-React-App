import Home from './Componant/Home/Home';
import Project from "./Componant/Project/Project"
import Pricing from "./Componant/Pricing-Area/Pricing"
import About from  "./Componant/About/About"
import Contact from "./Componant/Contact-Area/Contact"
import Footer from "./Componant/Footer/Footer"
import { BrowserRouter } from 'react-router-dom';
import './index.css';

function App() {
  return (
    <>
    <BrowserRouter>
        <Home />
        <Project />
        <Pricing />
        <About />
        <Contact />
        <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
