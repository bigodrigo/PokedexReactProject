import PropTypes from 'prop-types';
import styled from 'styled-components';


function PokemonDetailCard({ pokemon }) {
    const { name, id, gif, types, description, abilities, moves } = pokemon;

    PokemonDetailCard.propTypes = {
        pokemon: PropTypes.shape({
            name: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
            gif: PropTypes.string.isRequired,
            types: PropTypes.arrayOf(PropTypes.string).isRequired,
            description: PropTypes.string.isRequired,
            abilities: PropTypes.arrayOf(
                PropTypes.shape({
                    name: PropTypes.string.isRequired,
                    description: PropTypes.string.isRequired,
                })
            ).isRequired,
            moves: PropTypes.arrayOf(PropTypes.string).isRequired,
        }).isRequired,
    };

    return (
        <Card>
            <Infos>
                <SectionTitle>
                    <Title>{name}</Title>
                    <Title>#{id.toString().padStart(3, '0')}</Title>
                </SectionTitle>
                <StyledWrapper>
                    <StyledFirstView>
                        <Gif src={gif} alt={name} />
                    </StyledFirstView>
                    <div>
                        <Description>{description}</Description>
                        <Types>
                            {types.map((type, index) => (
                                <Type key={index} className={`tipo ${type}`}>
                                    {type}
                                </Type>
                            ))}
                        </Types>
                    </div>
                </StyledWrapper>
            </Infos>
            <AbilitiesWrapper>
                <SectionTitle>Abilities</SectionTitle>
                {abilities.map((ability, index) => (
                    <div key={index}>
                        <AbilityName>{ability.name}</AbilityName>
                        <AbilityDescription>{ability.description}</AbilityDescription>
                    </div>
                ))}
            </AbilitiesWrapper>
            <MovesWrapper>
                <SectionTitle>Moves</SectionTitle>
                <MoveParagraph>{moves.join(', ')}</MoveParagraph>
            </MovesWrapper>
        </Card>
    );
}

const Card = styled.div`
    background-color: ${props => props.theme.cardBG};
    width: 800px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    border-radius: 15px;
    transition: 0.2s ease-in-out;
`;

const StyledWrapper = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
`;

const StyledFirstView = styled.div`
    width: 100%;
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
`;

const Infos = styled.div`
    width: 100%;
    padding: 10px 20px;
`;

const Title = styled.span`
    text-transform: uppercase;
`;

const Gif = styled.img`
    margin: 0 auto;
    width: 200px;
    height: 200px;
`;

const Types = styled.ul`
    display: flex;
    gap: 10px;
    list-style: none;
    justify-content: center
`;

const Type = styled.li`
    padding: 5px 10px;
    border-radius: 10px;
    text-transform: capitalize;

    &.bug {
        background-color: #a7ba00;
    }

    &.dark {
        background-color: #6f5846;
    }

    &.dragon {
        background-color: #6f29fd;
    }

    &.electric {
        background-color: #fad105;
    }

    &.fairy {
        background-color: #f198ac;
    }

    &.fighting {
        background-color: #c22e22;
    }

    &.fire {
        background-color: #f17f1d;
    }

    &.flying {
        background-color: #a88ef2;
    }

    &.ghost {
        background-color: #72559d;
    }

    &.grass {
        background-color: #74c948;
    }

    &.ground {
        background-color: #e2c162;
    }

    &.ice {
        background-color: #95d8d9;
    }

    &.normal {
        background-color: #a9a975;
    }

    &.poison {
        background-color: #a13aa3;
    }

    &.psychic {
        background-color: #fb5587;
    }

    &.rock {
        background-color: #b9a02c;
    }

    &.steel {
        background-color: #b8b8d0;
    }

    &.water {
        background-color: #678ef3;
    }
`

const Description = styled.p`
    font-size: 14px;
    margin-bottom: 20px;
`;

const AbilitiesWrapper = styled.div`
    width: 100%;
    padding: 10px 20px;
`;

const AbilityName = styled.h4`
    margin: 10px 20px 0;
    text-transform: uppercase;
`;

const AbilityDescription = styled.p`
    margin: 10px 20px 0;
`;

const MovesWrapper = styled.div`
    width: 100%;
    padding: 10px 20px;
`;

const MoveParagraph = styled.p`
    margin: 10px 20px;
    text-transform: uppercase;
    max-height: 160px;
    overflow-y: scroll;
    font-size: 14px;
    padding-right: 10px;
`;

const SectionTitle = styled.h2`
    text-align: center;
    border: 1px solid #333333;
    border-radius: 10px;
    background-color: ${props => props.theme.titleBG};
`;

export default PokemonDetailCard