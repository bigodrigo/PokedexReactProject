import { useContext } from 'react';
import { ThemeContext } from 'styled-components'
import styled from 'styled-components';
import PropTypes from 'prop-types';

function HeaderComponent({ toggleTheme }) { // Receive toggleTheme as a prop
    const theme = useContext(ThemeContext);

    HeaderComponent.propTypes = {
        toggleTheme: PropTypes.func.isRequired,
    };

    // const baseUrl = 'http://localhost:5173/PokedexReactProject/' //dev
    const baseUrl = 'https://bigodrigo.github.io/PokedexReactProject/' //prod

    return (
        <StyledHeader>
            <nav>
                <StyledLink href={baseUrl}>
                    {/* Use baseUrl to make the href relative */}
                    <StyledLogo src={`${baseUrl}pokeball2.png`} alt="pokeball" />
                </StyledLink>
            </nav>
            <StyledButton id="botao-alterar-tema" onClick={toggleTheme}>
                {/* Use baseUrl to make the src relative */}
                <StyledImgButton
                    src={`${baseUrl}${theme.light ? 'sun.png' : 'moon.png'}`}
                    alt={theme.light ? 'sol' : 'lua'}
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
    z-index: 999; 
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
    border-radius: 0 0 15px 15px;
    
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