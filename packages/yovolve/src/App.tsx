import type { Component } from 'solid-js'
import TopBar from './components/topbar'
import Game from './components/game'

const App: Component = () => {
    return (
        <>
            <TopBar />
            <Game />
        </>
    );
};

export default App;
