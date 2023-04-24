import { TheHeader } from './components/TheHeader';
import { Main } from './components/Main';
import { Controls } from './components/Controls';
import { CountryList } from './components/CountryList';

function App() {
    return (
        <>
            <TheHeader />
            <Main>
                <Controls />
                <CountryList />
            </Main>
        </>
    );
}

export default App;
