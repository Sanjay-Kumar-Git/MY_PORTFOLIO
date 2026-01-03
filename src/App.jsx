import { useState, useEffect } from 'react';
import Context from './Context'; 
import Home from './components/Home';
import About from './components/About';
import { GlobalScrollbar } from './StyledComponents';
import {Routes,Route} from 'react-router-dom'
import ProjectsSection from './components/Projects'
import ContactSection from './components/Contact';

const App = () => {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme-mode');
    return savedTheme !== null ? JSON.parse(savedTheme) : false;
  });
  useEffect(() => {
    localStorage.setItem('theme-mode', JSON.stringify(isDark));
  }, [isDark]);

  const changeToDark = () => {
    setIsDark(prevDark => !prevDark); 
  };

  return (
    <Context.Provider value={{ 
        dark: isDark, 
        changeToDark: changeToDark 
    }}>
      <GlobalScrollbar $dark={isDark}/>
      <>
        <Routes>
          <Route exact path="/" Component={Home}/>
          <Route exact path="/about" Component={About}/>
          <Route exact path="/projects" Component={ProjectsSection}/>
          <Route exact path='/contact' Component={ContactSection}/>
        </Routes>
      </>
    </Context.Provider>
  );
};

export default App;