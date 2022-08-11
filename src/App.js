import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

function App() {
  return (
    <div className='App'>
      <div className='main-content'>
        <Navbar />
        <Main />
        <Projects />
      </div>
    </div>
  )
}

export default App;