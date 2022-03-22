import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { Home } from "./routes/Home";
import {Projects} from "./routes/Projects";
import {Layout} from "./routes/Layout";
import {KarnaughMap} from "./routes/projects/KarnaughMap";

function App() {

    return (
        <Routes>
            <Route path={'/'} element={<Layout />}>
                <Route index element={<Home />} />
                <Route path={'projects'}>
                    <Route index element={<Projects />} />
                    <Route path={'karnaugh_map'} element={<KarnaughMap />} />
                </Route>
            </Route>
        </Routes>
    );
}

export default App
