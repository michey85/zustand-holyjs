import { RegionSelect } from './RegionSelect';
import { CountrySearch } from './CountrySearch';

const Controls = () => {
    return (
        <div className="controls">
            <CountrySearch />
            <RegionSelect />
        </div>
    );
};

export { Controls };
