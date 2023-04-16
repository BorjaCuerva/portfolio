import './scss/main.scss';
import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App () {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Experience />
      <Contact />
    </div>
  )
}

export default App
