import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StrictMode } from "react";
import SearchParams from "./SearchParams";
import Details from "./Details";

const App = () => {
    return (
        <StrictMode>
            <BrowserRouter>
                <h1>Adopt Me!</h1>
                <Routes>
                    <Route path="/" element={<SearchParams />} />
                    <Route path="/details/:id" element={<Details />} />
                </Routes>
            </BrowserRouter>
        </StrictMode>
    )
};

render(<App />, document.getElementById("root"));
