import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';

import { AuthorContext } from './context/AuthorContext';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Home from './pages/Home';

function App() {
    const { user } = useContext(AuthorContext);
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={user ? <Home /> : <Login />} />
                    <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
                    <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
                    <Route path="/profile/:userName" element={<Profile />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
