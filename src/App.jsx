import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import PokeList from './components/PokeList/PokeList';
import HeaderComponent from './components/Header/Header';
import { useState } from 'react';

function App() {
  const themes = {
    light: {
      light: true,
      color: '#333333',
      backgroundColor: '#5e5b5bad',
      cardBG: '#d8e3ec'
    },
    dark: {
      light: false,
      color: '#f5f5f5',
      backgroundColor: '#212121',
      cardBG: '#a8a8a8'
    }
  }

  const [theme, setTheme] = useState(themes.light); // Initial theme state

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme.light ? themes.dark : themes.light));
  };

  return (
    <ThemeProvider theme={theme}>
      <MainContainer toggleTheme={toggleTheme} /> {/* Pass the toggleTheme function */}
    </ThemeProvider>
  );
}

function MainContainer({ toggleTheme }) {
  return (
    <Body>
      <HeaderComponent toggleTheme={toggleTheme} /> {/* Pass the toggleTheme function */}
      <PokeList />
    </Body>
  );
}

export default App;

const Body = styled.div`
  font-family: 'Poppins', sans-serif;
  min-height: 100vh;
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.color};
  font-weight: bold;
`;
