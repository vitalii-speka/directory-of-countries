import './styles.css';
import countiesOneTpl from './templates/countries-one.hbs';
import countiesManyTpl from './templates/countries-many.hbs';
import FetchApiCountries from './fetchCountries';
import '@pnotify/core/dist/BrightTheme.css';

const { error } = require('@pnotify/core');
const debounce = require('lodash.debounce');
const fetchApiCounries = new FetchApiCountries();

const countriesContainer = document.querySelector('.js-countries-container');
const searchForm = document.querySelector('.js-search-form')

searchForm.addEventListener('input', debounce(onSearch, 500));


function onSearch(e) {
    e.preventDefault();
    clearCountriesContainer();

    fetchApiCounries.query = e.target.value.trim();

    if (fetchApiCounries.query.length === 0) {
        return
    } else {
        fetchApiCounries.fetchCountries().then(countries => {
        if (e.target.value === 0) {
            return
        }
        else if (countries.length > 10) {
            error({
                text: "Более 10 стран. Пожалуйста, уточните запрос(1)!",
                delay: 1000,
            });
        } else if (countries.status === 404) {
            error({
            text: "Страна не найдена. Пожалуйста, уточните запрос(404)!"
        });
        } else if (countries.length === 1) {
            countriesContainer.innerHTML = countiesOneTpl(countries);
        // (countries.length >= 2 && countries.length <= 10)
        } else if (countries.length <= 10) {
            countriesContainer.innerHTML = countiesManyTpl(countries);
        }
        })
        .catch(Error => {
            Error({
                text: "+catch+ You must enter query parameters!",
                delay: 3000
            });
            console.log(Error)
        })
    }
}

function clearCountriesContainer() {
    countriesContainer.innerHTML = '';
}