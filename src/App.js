import { useState } from "react";
import './App.css';
import Header from './components/Header';
import Section from './components/Section';
import Footer from "./components/Footer";
import { toObjectArray } from "./utils/object-helpers";

const sectionData = toObjectArray([
  [ 'about', 'About me' ],
  [ 'portfolio', 'Portfolio' ],
  [ 'contact', 'Contact' ],
  [ 'resume', 'Résumé' ],
], 'name', 'title');

function App() {
  const [ sections ] = useState(sectionData);
  const [ currentSection, setCurrentSection ] = useState(sectionData[0]);

  return (
    <div className="App">
      <Header { ...{ currentSection, setCurrentSection, sections } }/>
      <Section currentSection={ currentSection }/>
      <Footer/>
    </div>
  );
}

export default App;
