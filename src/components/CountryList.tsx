import countries from '../../data/countries.json';
import { Country } from '../types';
import { prepareCountry } from '../utils/prepare-country';
import { Card } from './Card';

const CountryList = () => {
    const currentCountries = countries as unknown as Country[];

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
