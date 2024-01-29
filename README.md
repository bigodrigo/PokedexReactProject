# Pokédex React Version
## (Last Update) - 29/01/2024
### This project is a significant milestone of a FullStack developer course, serving as the final challenge for Frontend development. Its purpose is to reinforce foundational principles and then upload the completed project to a GitHub repository.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Layout](#-layout)
  - [Links](#links)
- [My process](#my-process)
  - [Technologies](#-technologies)
  - [What I learned](#what-i-learned)
  - [Suggested Enhancements](#muscle-suggested-enhancements)
- [Author](#author)

## Overview

### The challenge

- [x] Develop a Home page featuring 10 pokemon and the functionality to fetch more through a button.
- [x] Create a second page that provides more detailed information about each pokemon, including their abilities and possible moves.
- [x] Build a Single Page Application (SPA).
- [x] Utilize Context API as a Theme Toggler.
- [x] Implement Styled-components for styling.
- [x] Utilize React-router-dom for routing.

:thought_balloon: Note worthy observation:

- This project closely resembles the initial experience I had with DevEmDobro. The intention was to create a website using all the skills we have acquired and enhance it compared to the first attempt. Therefore, I have chosen to design the layout as similar as possible to the original version, aiming to preserve the user experience while highlighting the key differences when transitioning from HTML/CSS/JS to React.


### 🔖 Layout

<div align="center">
    <p>Dark Theme Home Layout:</p>
    <img src="./design/dark-home.png">
</div>

<div align="center">
    <p>Light Theme Detailed Page Layout:</p>
    <img src="./design/light-detail.png">
</div>

### Links

- Solution URL: [GitHub Repo](https://github.com/bigodrigo/PokedexReactProject)
- Live Site URL: [GitHub Page](https://bigodrigo.github.io/PokedexReactProject)

## My process

### 🚀 Technologies

- React
- [PropTypes](https://legacy.reactjs.org/docs/typechecking-with-proptypes.html)
- [Styled-Components](https://styled-components.com)
- [ContextAPI](https://legacy.reactjs.org/docs/context.html)
- [React Router Dom](https://v5.reactrouter.com/web/guides/quick-start)

### What I learned

- Working with Styled-Components proved to be more challenging than I had initially anticipated. I am more familiar with Tailwind, Sass, or plain css, so some of my ideas required some workarounds.
- While I had prior experience with Context, integrating it with Styled-Components and a Theme required me to reevaluate and restructure my existing code, which was a valuable exercise in stepping out of my comfort zone.
- React Router was also an interesting addition. While not particularly challenging, working with routes was a new concept for me.
- One of the more difficult aspects was handling three different fetches and consolidating all the data into a single object. This was especially true for the abilities, as not all pokemon have a description for each ability, necessitating an additional URL.
- Text manipulation was also necessary. For instance, certain special characters like "\n" needed to be removed. Additionally, the abilities object contained varying languages, so I had to search for the appropriate prop (language: "en") in order to display the information in English.

```js
// Using localStorage to keep the theme on a second visit or from detail page to home
    const storedTheme = localStorage.getItem('theme');
    const initialTheme = storedTheme ? JSON.parse(storedTheme) : themes.light;

    const [theme, setTheme] = useState(initialTheme);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme.light ? themes.dark : themes.light));
    };

    useEffect(() => {
        localStorage.setItem('theme', JSON.stringify(theme));
    }, [theme]);
```

```js
// Passing info as props inside Styled-Components
    const Body = styled.div`
        font-family: 'Poppins', sans-serif;
        min-height: 100vh;
        background-color: ${props => props.theme.backgroundColor};
        color: ${props => props.theme.color};
        font-weight: bold;
    `;
```

```js
// Text manipulation codes
    export function getEnglishFlavorText(flavorTextEntries) {
        for (const entry of flavorTextEntries) {
            if (entry.language.name === 'en') {
                return entry.flavor_text;
            }
        }
        return '';
    }

    export function removeBarra(value) {
        const stringValue = value.toString();
        const replacedValue = stringValue.replaceAll('\n', ' ').replaceAll('\f', ' ');
        return replacedValue;
    }
```

### :muscle: Suggested Enhancements:

- [ ] Implement a skeleton animation for fetching data.
- [ ] Preserve the information on the context or localStorage.
- [ ] Develop an additional page or section dedicated to each region.
- [ ] Improve the styling by refactoring the type colors and scrollbar.
- [ ] Utilize classes and objects to enhance functionality.

## Author

- Portfolio - [Rodrigo](https://portfolio-bigodrigo.vercel.app/)
- GitHub - [bigodrigo](https://github.com/bigodrigo)
- Linkedin - [rodrigo-boquer](https://www.linkedin.com/in/rodrigo-boquer/)
