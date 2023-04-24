import { Country, Region } from '../types';

export const filterCountry = (country: Country, search: string, region: Region | null): boolean => {
    return country.name.toLowerCase().includes(search.toLowerCase()) && country.region.includes(region || '');
};
