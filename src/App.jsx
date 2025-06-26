import Header from './components/Header.jsx'
import Hero from "./components/Hero.jsx"
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Education from './components/Education.jsx'
import Certificates from './components/Certificate.jsx'
import ContactMe from './components/ContactMe.jsx'
import Footer from './components/Footer.jsx'
import Resume from './components/Resume.jsx'
import NotFound from './components/NotFound.jsx';
import { Routes,Route } from 'react-router-dom'
export default function App() 
{
  return (
     <>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Projects />
              <Education />
              <Certificates />
              <ContactMe />
              <Footer />
            </>
          }
        />
        <Route path="/resume" element={<Resume />} />
         <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}
