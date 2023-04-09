import './scss/main.scss';
import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import Learning from './components/Learning';

function App () {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Experience />
      <Learning />
    </div>
  )
}

export default App
