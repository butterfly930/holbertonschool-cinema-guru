import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './dashboard.css';
import Header from '../../components/navigation/Header';
import SideBar from '../../components/navigation/SideBar';

const HomePage = () => <div>Home Page</div>;
const Favorites = () => <div>Favorites Page</div>;
const WatchLater = () => <div>Watch Later Page</div>;

const Dashboard = ({ userUsername, setIsLoggedIn }) => {
    return (
        <BrowserRouter>
            <div className="dashboard">
                <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
                <div className="dashboard-layout">
                    <SideBar />
                    <div className="dashboard-content">
                        {/* Define the Routes */}
                        <Routes>
                            <Route path="/home" element={<HomePage />} />
                            <Route path="/favorites" element={<Favorites />} />
                            <Route path="/watchlater" element={<WatchLater />} />
                            {/* Redirect all other routes to /home */}
                            <Route path="*" element={<Navigate to="/home" />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default Dashboard;
