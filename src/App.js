import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home.js';
import Company from './components/pages/Company.js';
import Contact from './components/pages/Contact.js';
import NewProject from './components/pages/NewProject.js';
import Projects from './components/pages/Projects.js';
import Project from './components/pages/Project.js';

import Container from './components/layout/Container.js';
import NavBar from './components/layout/NavBar.js';
import Footer from './components/layout/Footer.js';

function App() {
  return (
    <Router>
      <NavBar />
      <Container customClass="min-height">
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Projects" element={<Projects />} />
            <Route exact path="/Company" element={<Company />} />
            <Route exact path="/Contact" element={<Contact />} />
            <Route exact path="/NewProject" element={<NewProject />} />
            <Route exact path="/project/:id" element={<Project />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
