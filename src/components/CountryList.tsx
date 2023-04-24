import { useEffect } from 'react';
import { shallow } from 'zustand/shallow';
import countries from '../../data/countries.json';
import { Country } from '../types';
import { prepareCountry } from '../utils/prepare-country';
import { Card } from './Card';
import { useCountries, useRegion, useSearch } from '../store';
import { filterCountries } from '../utils/filter-country';

const CountryList = () => {
    const search = useSearch((state) => state.search);
    const region = useRegion((state) => state.region);

    const [allCountries, setCountries] = useCountries((state) => [state.allCountries, state.setCountries], shallow);
    const currentCountries = filterCountries(allCountries, search, region);

    useEffect(() => {
        setCountries(countries as unknown as Country[]);
    }, [setCountries]);

    return (
        <div className="countries">
            {currentCountries.length ? (
                currentCountries.map((country) => {
                    const countryInfo = prepareCountry(country);

                    return <Card key={country.name} {...countryInfo} />;
                })
            ) : (
                <h2>There is no countries were found</h2>
            )}
        </div>
    );
};

export { CountryList };
