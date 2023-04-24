import { useEffect } from 'react';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import { shallow } from 'zustand/shallow';
import { useTheme } from '../store';

const TheHeader = () => {
    const [theme, toggleTheme] = useTheme((state) => [state.theme, state.toggleTheme], shallow);

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <header>
            <div className="container">
                <div className="wrapper">
                    <a href="/" className="title">
                        Where is the world?
                    </a>
                    <div className="switcher" onClick={toggleTheme}>
                        {theme === 'light' ? <IoMoonOutline size="14px" /> : <IoMoon size="14px" />}{' '}
                        <span>{theme} Theme</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export { TheHeader };
