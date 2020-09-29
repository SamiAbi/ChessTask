import React from 'react';
import { render } from 'react-dom';
import Board from "./Components/Board"
const App = () => {
    return <Board />;
};
render(<App />, document.getElementById('root'));