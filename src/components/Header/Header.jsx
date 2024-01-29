import { useContext } from 'react';
import { ThemeContext } from 'styled-components'
import styled from 'styled-components';
import PropTypes from 'prop-types';

function HeaderComponent({ toggleTheme }) { // Receive toggleTheme as a prop
    const theme = useContext(ThemeContext);

    HeaderComponent.propTypes = {
        toggleTheme: PropTypes.func.isRequired,
    };

    return (
        <StyledHeader>
            <nav>
                <StyledLink href="/">
                    <StyledLogo src="/pokeball2.png" alt="pokeball" />
                </StyledLink>
            </nav>
            <StyledButton id="botao-alterar-tema" onClick={toggleTheme}> {/* Use toggleTheme */}
                <StyledImgButton
                    src={theme.light ? "/sun.png" : "/moon.png"}
                    alt={theme.light ? "sol" : "lua"}
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
    background-color: #5e5b5bad;
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