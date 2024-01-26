import { useState } from 'react';
import styled from 'styled-components';

function HeaderComponent() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    return (
        <StyledHeader isDarkMode={isDarkMode}>
            <nav>
                <StyledLink href="./index.html">
                    <StyledLogo src="./pokeball2.png" alt="pokeball" />
                </StyledLink>
                <StyledLink href="./src/pages/kanto.html">
                    <StyledLogo src="./premier.png" alt="pokeball" />
                </StyledLink>
                <StyledLink href="./src/pages/jhoto.html">
                    <StyledLogo src="./great.png" alt="pokeball" />
                </StyledLink>
            </nav>
            <StyledButton id="botao-alterar-tema" onClick={toggleTheme}>
                <StyledImgButton
                    src={isDarkMode ? "./moon.png" : "./sun.png"}
                    alt={isDarkMode ? "lua" : "sol"}
                    className="imagem-botao"
                />
            </StyledButton>
        </StyledHeader>
    );
}

export default HeaderComponent;

const StyledHeader = styled.header`
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 25px;
    position: sticky;
    top: 0;
    background-color: ${({ isDarkMode }) => (isDarkMode ? '#333' : '#5e5b5b')};
    z-index: 999; /* Add a high z-index to ensure the header is displayed above the content */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add a subtle box shadow for visual separation */
    border-radius: 0 0 15px 15px; /* Add rounded borders to the bottom of the header */
    
    .logo,
    .imagem-botao {
        width: 30px;
        transition: 0.2s ease-in-out;
    }
    
    #botao-alterar-tema {
        background: none;
        border: none;
    }
    
    .logo:hover,
    .imagem-botao:hover {}
`;

const StyledLink = styled.a`
/* Add padding to the buttons in the header to create space */
    padding: 10px 15px;

    &:not(:last-child) {margin-right: 10px;}

    &:link,
    &:visited,
    &:hover,
    &:active {
        text-decoration: none;
    }
`;

const StyledLogo = styled.img`
    width: 30px;
    transition: 0.2s ease-in-out;

    &:hover {
        transform: scale(1.1);
        cursor: pointer;
    }
`;

const StyledButton = styled.button`
    padding: 0;
    
    &:#botao-alterar-tema {
        background: none;
        border: none;
    }
`;

const StyledImgButton = styled.img`
    width: 30px;
    transition: 0.2s ease-in-out;

    &:hover {
        transform: scale(1.1);
        cursor: pointer;
    }
`;