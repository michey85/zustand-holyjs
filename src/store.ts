import { create } from 'zustand';
import { Country, Region } from './types';
import { fetchCountries } from './services/countries';

type ThemeSlice = {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
};

export const useTheme = create<ThemeSlice>((set, get) => ({
    theme: 'light',
    toggleTheme: () => set({ theme: get().theme === 'light' ? 'dark' : 'light' }),
}));

type SearchSlice = {
    search: string;
    setRegion: (val: string) => void;
};

export const useSearch = create<SearchSlice>((set) => ({
    search: '',
    setRegion: (val) => set({ search: val }),
}));

type RegionSlice = {
    region: Region | null;
    setRegion: (val: Region | null) => void;
};

export const useRegion = create<RegionSlice>((set) => ({
    region: null,
    setRegion: (val) => set({ region: val }),
}));

type CountiesSlice = {
    status: 'idle' | 'loading';
    allCountries: Country[];
    loadCountries: () => void;
    setCountries: (val: Country[]) => void;
};

export const useCountries = create<CountiesSlice>((set, get) => ({
    status: 'idle',
    allCountries: [],
    setCountries: (val) => set({ allCountries: val }),
    loadCountries: async () => {
        const isEmpty = get().allCountries.length === 0;

        if (isEmpty) {
            set({ status: 'loading' });

            await fetchCountries((countries) => set({ allCountries: countries, status: 'idle' }));
        }
    },
}));
