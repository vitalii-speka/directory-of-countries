import './styles.css';
import countiesTpl from './templates/countries.hbs';
import FetchApiCountries from './fetchCountries';


const debounce = require('lodash.debounce');

console.log(`hw-12-countries`);

const fetchApiCounries = new FetchApiCountries();

const countriesContainer = document.querySelector('.js-countries-container');
const searchForm = document.querySelector('.js-search-form')

searchForm.addEventListener('input', debounce(onSearch, 1000));

function onSearch(e) {
    e.preventDefault();
    // console.log(e.currentTarget.elements.query.value);
    fetchApiCounries.query = e.target.value.trim();

    // fetchApiCounries.fetchCountries().then(countries => {
    //     countriesContainer.innerHTML = countiesTpl(countries);
    // }

            
    fetchApiCounries.fetchCountries().then(countries => {
        if (countries.length === 1) {
            console.log('===1');
            countriesContainer.innerHTML = countiesTpl(countries);
        } else if (countries.length >= 2 && countries.length <= 10) {
            console.log('>2 && <10');
        } else if (countries.length > 10) {
            console.log('>10');
        }
        }  
        );
}

function countriesMarkupNew (countries) {
}

function countriesMarkup(countries) {
    counriesContainer.insertAdjacentHTML('beforeend', countiesTpl(countries));
    // if (countries.length === 1) {
    //     counriesContainer.insertAdjacentHTML('beforeend', markup);
    //     // counriesContainer.insertAdjacentHTML('beforeend', countiesTpl(countries));
    //      console.log('===1');
    // } else if (countries.length >= 2 && countries.length <= 10) {
    //     console.log('>2 && <10');
    // } else if (countries.length > 10) {
    //     console.log('>10');
    // }
}

// console.log(searchForm);
// console.log(countiesTpl);