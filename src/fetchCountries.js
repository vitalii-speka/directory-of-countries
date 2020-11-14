
export default class FetchApiCountries {
    constructor() { }
    
    fetchCountries() {
        return fetch(`https://restcountries.eu/rest/v2/name/${this.searchQuery}`)
        .then(response => response.json())
        .then(countries => { return countries})
        .catch(error => { console.log(error) });
    }

    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }

}