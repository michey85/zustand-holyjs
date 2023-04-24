import { CustomSelect } from './CustomSelect';
import { Region } from '../types';

type RegionOption = {
    [RegKey in Region]: { value: RegKey; label: RegKey };
};

const optionsMap: RegionOption = {
    Africa: { value: 'Africa', label: 'Africa' },
    America: { value: 'America', label: 'America' },
    Asia: { value: 'Asia', label: 'Asia' },
    Europe: { value: 'Europe', label: 'Europe' },
    Oceania: { value: 'Oceania', label: 'Oceania' },
};
const options = Object.values(optionsMap);

const RegionSelect = () => {
    const region = null;

    return (
        <CustomSelect
            options={options}
            placeholder="Filter by Region"
            isClearable
            isSearchable={false}
            value={region ? optionsMap[region] : null}
        />
    );
};

export { RegionSelect };
