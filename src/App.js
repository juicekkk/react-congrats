import './App.css';
import './Default.css';
import styled from "styled-components";

import Header from "./components/molecules/Header";
import Footer from "./components/molecules/Footer";
import Main from "./components/molecules/Main";
import Music from "./components/atoms/Music";
import React from "react";

const StyledContainer = styled.div`
    width: 100%;
    max-width: 640px;
    display: block;
    margin: auto;
`

function App() {

    const COLORS = ["#ffc6e5", "#ffdd8d", "#599c63", "#f75757", "#ff5397", "#8784cc"];
    const PARTICLES_NUMBER = 50;

    function createParticle(x, y) {
        const element = document.createElement("div");
        element.style.width = "5px";
        element.style.height = "5px";
        // The elements are in absolute position
        element.style.position = "fixed";
        element.style.top = `${y}px`;
        element.style.left = `${x}px`;
        // We want our cursor to be centered in the square
        element.style.transform = "translate(-50%, -50%)";
        // Get a color randomly
        element.style.backgroundColor =
            COLORS[Math.floor(Math.random() * COLORS.length)];

        const animation = element.animate(
            [
                {
                    // Math.random() - 0.5 returns integer between -0.5 and 0.5
                    transform: `translate(${(Math.random() - 0.5) * 500}px, ${
                        (Math.random() - 0.5) * 400
                    }px) rotate(${Math.random() * 520}deg)`,
                    // We want to reduce the opacity until 0
                    opacity: 0
                }
            ],
            1000
        );

        // Remove the particle at the end of animation
        animation.finished.then(() => element.remove());
        document.body.appendChild(element);
    }

    function handleClick(e) {
        const { clientX: x, clientY: y } = e;

        // Create multiple particles
        for (let i = 0; i < PARTICLES_NUMBER; i++) {
            createParticle(x, y);
        }
    }

  return (
        <StyledContainer onClick={handleClick}>
            <Music />
            <Header />
            <Main />
            <Footer />
        </StyledContainer>
  );
}

export default App;
