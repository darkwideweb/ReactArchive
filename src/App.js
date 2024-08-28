import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Lessons from './pages/Lesson';  
import QuizPage from './pages/QuizPage';
import Documentation from './components/Documentation';
import ComponentsGallery from './pages/ComponentsGallery';
import Quizzes from './pages/Quizzes';
import Resources from './pages/Resources';
import CodeEditorPage from './pages/CodeEditorPage';
import ProjectLabs from './components/ProjectLabs'; 
import CreativeChallenges from './components/CreativeChallenges';  
import darkTheme from './themes/darkTheme';
import lightTheme from './themes/lightTheme';

const App = () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  const [currentTheme, setCurrentTheme] = useState(savedTheme);

  useEffect(() => {
    localStorage.setItem('theme', currentTheme);
  }, [currentTheme]);

  const toggleTheme = () => {
    setCurrentTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <MuiThemeProvider theme={currentTheme === 'light' ? lightTheme : darkTheme}>
      <CssBaseline />
      <Router>
        <Navigation toggleTheme={toggleTheme} currentTheme={currentTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lessons" element={<Lessons currentTheme={currentTheme} />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/docs" element={<Documentation />} />
          <Route path="/components" element={<ComponentsGallery />} />
          <Route path="/quizzes" element={<Quizzes />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/code-editor" element={<CodeEditorPage />} />
          <Route path="/project-labs" element={<ProjectLabs />} />  
          <Route path="/creative-challenges" element={<CreativeChallenges />} />  
        </Routes>
      </Router>
    </MuiThemeProvider>
  );
};

export default App;
