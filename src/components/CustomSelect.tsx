import Select, { Props } from 'react-select';
import { Region } from '../types';

export type CountryOption =
    | {
          label: Region;
          value: Region;
      }
    | '';

const CustomSelect = (props: Props<CountryOption, false>) => {
    return (
        <Select
            className="react-select-container"
            styles={{
                control: (provided) => ({
                    ...provided,
                    backgroundColor: 'var(--colors-ui-base)',
                    color: 'var(--colors-text)',
                    borderRadius: 'var(--radii)',
                    padding: '0.25rem',
                    border: 'none',
                    boxShadow: 'var(--shadow)',
                    height: '50px',
                }),
                option: (provided, state) => ({
                    ...provided,
                    cursor: 'pointer',
                    color: 'var(--colors-text)',
                    backgroundColor: state.isSelected ? 'var(--colors-bg)' : 'var(--colors-ui-base)',
                }),
            }}
            {...props}
        />
    );
};

export { CustomSelect };
