
import './App.scss';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import More from './components/More/More';
import { CV } from './CV/CV';
import { useState } from 'react';

const { hero, education, experience, languajes, skills, about } = CV;

function App() {
  const [showEducation, setShowEducation] = useState(true);

  return (
    <div className="App">
      <Hero hero={hero} />
      <About about={about} />
      <div className="button-container">
        <button className='button' onClick={() => setShowEducation(true)}>Education</button>
        <button className='button' onClick={() => setShowEducation(false)}>Experience</button>
      </div>
      {showEducation ? <Education education={education} /> : <Experience experience={experience} />}

    </div>
  );
}

export default App;
