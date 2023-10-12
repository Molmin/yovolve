import type { Component } from 'solid-js'
import TopBar from './components/TopBar'
import Game from './components/Game'

const App: Component = () => {
    return (
        <>
            <TopBar />
            <Game />
        </>
    );
};

export default App;
