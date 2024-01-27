import PropTypes from 'prop-types';
import styled from 'styled-components';


function PokemonDetailCard({ pokemon }) {
    const { name, id, gif, types, description, abilities } = pokemon;

    console.log(abilities)
    PokemonDetailCard.propTypes = {
        pokemon: PropTypes.shape({
            name: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
            gif: PropTypes.string.isRequired,
            types: PropTypes.arrayOf(PropTypes.string).isRequired,
            description: PropTypes.string.isRequired,
            abilities: PropTypes.string.isRequired,
        }).isRequired,
    };

    return (
        <Card>
            <Infos className="informacoes">
                <Title>{name}</Title>
                <Title>#{id.toString().padStart(3, '0')}</Title>
            </Infos>
            <Gif src={gif} alt={name} />
            <Types>
                {types.map((type, index) => (
                    <Type key={index} className={`tipo ${type}`}>
                        {type}
                    </Type>
                ))}
            </Types>
            <Description>{description}</Description>
            {/* <h3>{abilities}</h3> */}
        </Card>
    );
}

const Card = styled.li`
    background-color: ${props => props.theme.cardBG};
    width: 600px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    border-radius: 15px;
    transition: 0.2s ease-in-out;

    &:hover {
        background-color: #96d9d6;
        transform: scale(1.1);
        cursor: pointer;
    }
`;

const Infos = styled.div`
    display: flex;
    justify-content: space-between;
    border: 1px solid #333333;
    border-radius: 10px;
`;

const Title = styled.span`
    padding: 5px;
    text-transform: uppercase;
    font-size: 17px;
`;

const Gif = styled.img`
    width: 180px;
    height: 180px;
`;

const Types = styled.ul`
    display: flex;
    gap: 15px;
    list-style: none;
`;

const Type = styled.li`
    padding: 8px;
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
    max-height: 80px;
    overflow-y: scroll;
    font-size: 14px;
    padding-right: 10px;
`;

export default PokemonDetailCard