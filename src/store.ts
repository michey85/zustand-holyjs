import { create } from 'zustand';
import { Country, Region } from './types';

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
    allCountries: Country[];
    setCountries: (val: Country[]) => void;
};

export const useCountries = create<CountiesSlice>((set) => ({
    allCountries: [],
    setCountries: (val) => set({ allCountries: val }),
}));
