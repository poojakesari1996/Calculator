import Body from "./components/Body"
import React from 'react';
import ReactDOM from 'react-dom/client'
const App = () => {

    return (
        <>
            <Body/>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>);