import logo from './logo.svg';
import './App.css';
import styled from "styled-components";

import Header from "./components/molecules/Header";
import Footer from "./components/molecules/Footer";
import Main from "./components/molecules/Main";

const StyledContainer = styled.div`
    width: 100%;
    max-width: 640px;
    display: block;
    margin: auto;
`


function App() {
  return (
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
      <StyledContainer>
        <Header />
        <Main />
        <Footer />
      </StyledContainer>
  );
}

export default App;
