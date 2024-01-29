import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import PokemonListPage from './components/PokemonListPage/PokemonListPage';
import HeaderComponent from './components/Header/Header';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PokemonDetailPage from './components/PokemonDetailPage/PokemonDetailPage';

function App() {
  const themes = {
    light: {
      light: true,
      color: '#333333',
      backgroundColor: '#5e5b5bad',
      cardBG: '#e0e4cc',
      titleBG: '#F38630'

    },
    dark: {
      light: false,
      color: '#f5f5f5',
      backgroundColor: '#212121',
      cardBG: '#a8a8a8',
      titleBG: '#FA6900'
    }
  }

  const storedTheme = localStorage.getItem('theme');
  const initialTheme = storedTheme ? JSON.parse(storedTheme) : themes.light;

  const [theme, setTheme] = useState(initialTheme);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme.light ? themes.dark : themes.light));
  };

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  return (
    <ThemeProvider theme={theme}>
      <Body>
        <HeaderComponent toggleTheme={toggleTheme} />
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<PokemonListPage />} />
            <Route path="/pokemon/:id" exact element={<PokemonDetailPage />} />
          </Routes>
        </BrowserRouter>
      </Body>
    </ThemeProvider>
  );
}

const Body = styled.div`
  font-family: 'Poppins', sans-serif;
  min-height: 100vh;
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.color};
  font-weight: bold;
`;

export default App;
