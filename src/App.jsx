import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./page/Home";
import UserManagement from "./page/UserManagement";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/users" element={<UserManagement />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
