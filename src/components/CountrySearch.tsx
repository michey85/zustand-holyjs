import { shallow } from 'zustand/shallow';
import { Search } from './Search';
import { useStore } from '../store';

const CountrySearch = () => {
    const [search, setSearch] = useStore((state) => [state.search, state.setSearch], shallow);

    return <Search search={search} setSearch={setSearch} />;
};

export { CountrySearch };
