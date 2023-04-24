import { useEffect } from 'react';
import { shallow } from 'zustand/shallow';

import { prepareCountry } from '../utils/prepare-country';
import { useStore } from '../store';
import { filterCountries } from '../utils/filter-country';
import { Card } from './Card';

const CountryList = () => {
    const search = useStore((state) => state.search);
    const region = useStore((state) => state.region);

    // const allCountries = useCountries.use.allCountries();
    // const status = useCountries.use.status();
    // const loadCountries = useCountries.use.loadCountries();
    const [allCountries, status, loadCountries] = useStore(
        (state) => [state.allCountries, state.status, state.loadCountries],
        shallow,
    );
    const currentCountries = filterCountries(allCountries, search, region);

    useEffect(() => {
        loadCountries();
    }, [loadCountries]);

    if (status === 'loading') {
        return (
            <div className="countries">
                <h2>Loading...</h2>
            </div>
        );
    }

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
