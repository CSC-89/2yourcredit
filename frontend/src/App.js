import React, { useState } from "react";
import Main from "./components/main/Main";
import WordList from "./components/WordList/Wordlist";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";

import "./App.css";

function App() {
    const [data, setData] = useState(null);

    React.useEffect(() => {
        fetch("/api")
            .then((res) => res.json())
            .then((data) => setData(data.message))
            .catch((e) => console.log(e));
    }, []);

    console.log("data:", data);
    return (
        <>
            <Router>
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<Navigate to="/NO" replace />}
                    />
                    <Route exact path="/NO" element={<Main />} />
                    <Route exact path="/ordliste" element={<WordList />} />
                    <Route
                        path="*"
                        element={<h3>Error 404: Site not Found</h3>}
                    />
                </Routes>
            </Router>
        </>
    );
}

export default App;
