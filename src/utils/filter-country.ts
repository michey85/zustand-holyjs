import { Country, Region } from '../types';

export const filterCountries = (countries: Country[], search: string, region: Region | null) =>
    countries.filter((country) => filterCountry(country, search, region));

export const filterCountry = (country: Country, search: string, region: Region | null): boolean => {
    return country.name.toLowerCase().includes(search.toLowerCase()) && country.region.includes(region || '');
};
