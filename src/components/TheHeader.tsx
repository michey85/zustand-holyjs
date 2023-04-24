import { useEffect } from 'react';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';

const TheHeader = () => {
    const theme = 'light';

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
                    <div className="switcher">
                        {theme === 'light' ? <IoMoonOutline size="14px" /> : <IoMoon size="14px" />}{' '}
                        <span>{theme} Theme</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export { TheHeader };
