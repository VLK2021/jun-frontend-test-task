import {Route, Routes} from "react-router-dom";

import './App.css';
import Layout from "./Layout/Layout";
import Horses from "./pages/Horses/Horses";


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={''} element={<Layout/>}>
                    <Route index element={<Horses/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
