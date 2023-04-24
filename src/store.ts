import { create, StateCreator } from 'zustand';
import { persist } from 'zustand/middleware';
import { mountStoreDevtool } from 'simple-zustand-devtools';
import { Country, Region } from './types';
import { fetchCountries } from './services/countries';

type ThemeSlice = {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
};
type SearchSlice = {
    search: string;
    setSearch: (val: string) => void;
};
type RegionSlice = {
    region: Region | null;
    setRegion: (val: Region | null) => void;
};
type CountriesSlice = {
    status: 'idle' | 'loading';
    allCountries: Country[];
    loadCountries: () => void;
    setCountries: (val: Country[]) => void;
};
type Store = ThemeSlice & SearchSlice & RegionSlice & CountriesSlice;

const themeSlice: StateCreator<ThemeSlice> = (set, get) => ({
    theme: 'light',
    toggleTheme: () => set({ theme: get().theme === 'light' ? 'dark' : 'light' }),
});

const searchSlice: StateCreator<SearchSlice> = (set) => ({
    search: '',
    setSearch: (val) => set({ search: val }),
});

const regionSlice: StateCreator<RegionSlice> = (set) => ({
    region: null,
    setRegion: (val) => set({ region: val }),
});

const countriesSlice: StateCreator<Store, [], [], CountriesSlice> = (set, get) => ({
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
});

export const useStore = create<Store>()(
    persist(
        (...a) => ({
            ...themeSlice(...a),
            ...searchSlice(...a),
            ...regionSlice(...a),
            ...countriesSlice(...a),
        }),
        { name: 'store', partialize: (state) => ({ allCountries: state.allCountries, theme: state.theme }) },
    ),
);

if (import.meta.env.MODE === 'development') {
    mountStoreDevtool('Countries', useStore);
    // mountStoreDevtool('Theme', useTheme);
}
