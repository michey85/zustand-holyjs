import { IoSearch } from 'react-icons/io5';

type SearchProps = {
    setSearch: (value: string) => void;
    search: string;
};

export const Search = ({ setSearch, search }: SearchProps) => {
    return (
        <label>
            <IoSearch />
            <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} />
        </label>
    );
};
