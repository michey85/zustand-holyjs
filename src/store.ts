import { create, StoreApi, UseBoundStore } from 'zustand';
import { persist, devtools } from 'zustand/middleware';
import { mountStoreDevtool } from 'simple-zustand-devtools';
import { Country, Region } from './types';
import { fetchCountries } from './services/countries';

type WithSelectors<S> = S extends { getState: () => infer T } ? S & { use: { [K in keyof T]: () => T[K] } } : never;

const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(_store: S) => {
    const store = _store as WithSelectors<typeof _store>;
    store.use = {};
    for (const k of Object.keys(store.getState())) {
        (store.use as any)[k] = () => store((s) => s[k as keyof typeof s]);
    }

    return store;
};

type ThemeSlice = {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
};

export const useTheme = create<ThemeSlice>()(
    persist(
        (set, get) => ({
            theme: 'light',
            toggleTheme: () => set({ theme: get().theme === 'light' ? 'dark' : 'light' }),
        }),
        {
            name: 'theme',
        },
    ),
);

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

type CountriesSlice = {
    status: 'idle' | 'loading';
    allCountries: Country[];
    loadCountries: () => void;
    setCountries: (val: Country[]) => void;
};

const useCountriesBase = create<CountriesSlice>()(
    persist(
        devtools(
            (set, get) => ({
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
            }),
            { enabled: true },
        ),
        { name: 'countries' },
    ),
);

export const useCountries = createSelectors(useCountriesBase);

if (import.meta.env.MODE === 'development') {
    mountStoreDevtool('Countries', useCountriesBase);
    mountStoreDevtool('Theme', useTheme);
}
