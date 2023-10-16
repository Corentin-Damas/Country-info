# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca).

## Preview

![](./design/desktop-preview.jpg)

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode _(optional)_
- The country flags will be pulled from the [REST Countries API](https://restcountries.com)

### Screenshot

![](./screenshot.jpg)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- API calls
- [React](https://reactjs.org/) - JS library

### Possible optimization

In order to finish the Challenge in a short time i neglated some optimization:

- Small screen size not optimized
- Search by region or by name could be done in a fastes way, the Api provided a speciale URl for regional filter and single city search. I didn't use any of them to get a faster result, i used a "cheapest" way to do it in a React component, howerver it could make the app slower.
- Border Country is not done, each country should be a link to there on detail page.
