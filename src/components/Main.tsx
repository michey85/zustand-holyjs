import { PropsWithChildren } from 'react';

const Main: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <main>
            <div className="container">{children}</div>
        </main>
    );
};

export { Main };
