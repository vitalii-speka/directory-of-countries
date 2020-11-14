import './styles.css';
import countiesTpl from './templates/countries.hbs';
import FetchApiCountries from './fetchCountries';


const debounce = require('lodash.debounce');

console.log(`hw-12-countries`);

const fetchApiCounries = new FetchApiCountries();

const counriesContainer = document.querySelector('.countries');
const searchForm = document.querySelector('.js-search-form')

searchForm.addEventListener('input', debounce(onSearch, 1000));

function onSearch(e) {
    e.preventDefault();
    // console.log(e.currentTarget.elements.query.value);
    fetchApiCounries.query = e.target.value.trim();

    fetchApiCounries.fetchCountries().then(countriesMarkup);
}

function countriesMarkup(countries) {
    console.log('dddd');
    const markup = countiesTpl(countries[0]);
    if (countries.lenght === 1) {
        counriesContainer.insertAdjacentHTML('beforeend',markup);
        // counriesContainer.insertAdjacentHTML('beforeend', countiesTpl(countries));
    } else if (countries.lenght >= 2 && countries.lenght <= 10) {
        console.log('>2 && <10');
    } else if (countries.lenght > 10) {
        console.log('>10');
    }
    
}

// console.log(searchForm);
// console.log(countiesTpl);