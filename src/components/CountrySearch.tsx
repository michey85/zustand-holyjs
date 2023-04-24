import { shallow } from 'zustand/shallow';
import { Search } from './Search';
import { useSearch } from '../store';

const CountrySearch = () => {
    const [search, setSearch] = useSearch((state) => [state.search, state.setRegion], shallow);

    return <Search search={search} setSearch={setSearch} />;
};

export { CountrySearch };
