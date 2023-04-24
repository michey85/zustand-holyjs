import { Country } from '../types';

const BASE_URL = 'https://restcountries.com/v2/';

export const ALL_COUNTRIES = BASE_URL + 'all?fields=name,capital,flags,population,region';

export const fetchCountries = async (onSuccess: (list: Country[]) => void) => {
    const response = await fetch(ALL_COUNTRIES);

    if (!response.ok) throw new Error('Failed to fetch');

    const data: Country[] = await response.json();

    onSuccess(data);
};
