import React from 'react';
import {Highlight} from "./components/Highlight/Highlight";
import {Button} from "./components/Button/Button";

function App() {
    return (
        <div className="App">
            Core UI
            <Highlight label="Text example" color="red"/>
            <Button prefix="Prefix" label="Button example" onClick={() => console.log("example")}/>
        </div>
    );
}

export default App;
