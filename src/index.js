import './styles.css';
import countiesTpl from './templates/countries.hbs';
import FetchApiCountries from './fetchCountries';

const debounce = require('lodash.debounce');

console.log(`hw-12-countries`);

const fetchApiCounries = mew FetchApiCountries();

const counriesContainer = document.querySelector('.countries');
const searchForm = document.querySelector('.js-search-form')

searchForm.addEventListener('input', debounce(onSearch, 500));

function onSearch(e) {
    e.preventDefault();
    // console.log(e.currentTarget.elements.query.value);
    fetchApiCounries.query = e.target.value;
    
    
    // const searchQuery = e.target.value;
    // const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;
    // console.log(searchQuery);
    // fetch(url)
    // .then(response => response.json())
    //     .then(countries => {
    //         const markup = countiesTpl(countries);
    //         counriesContainer.insertAdjacentHTML('beforeend', markup);
    // })
    // .catch(error => { console.log(error) });
}

// console.log(searchForm);
// counriesContainer.insertAdjacentHTML('beforeend', countiesTpl);
// counriesContainer.innerHTML = countiesTpl;
// console.log(countiesTpl);