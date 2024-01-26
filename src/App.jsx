import './App.css'
import styled from 'styled-components';
import PokeList from './components/PokeList/PokeList'
import Header from './components/Header/Header';

function App() {


  return (
    <Body>
      <Header />
      <PokeList />
    </Body>
  )
}

export default App

const Body = styled.div`
  font-family: 'Poppins', sans-serif;
  min-height: 100vh;
  background-color: #5e5b5bad;
  color: #333333;
  font-weight: bold;

  &.modo-escuro {
    background-color: #212121;
    color: #f5f5f5;
  }
`;
