import { Country, CountryInfo } from '../types';

export const prepareCountry = (country: Country): CountryInfo => ({
    img: country.flags.png,
    name: country.name,
    info: [
        {
            title: 'Population',
            description: country.population.toLocaleString(),
        },
        {
            title: 'Region',
            description: country.region,
        },
        {
            title: 'Capital',
            description: country.capital,
        },
    ],
});
