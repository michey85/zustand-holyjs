import { useState } from 'react';
import { Search } from './Search';

const CountrySearch = () => {
    const [search, setSearch] = useState('');

    return <Search search={search} setSearch={setSearch} />;
};

export { CountrySearch };
