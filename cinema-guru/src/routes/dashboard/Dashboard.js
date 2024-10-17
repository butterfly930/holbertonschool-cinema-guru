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
                <div>
                    <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
                    <SideBar user={userUsername} />
                </div>
                        <Routes>
                            <Route path='/' element={<HomePage />} />
                            <Route path='/favorites' element={<Favorites />} />
                            <Route path='/watchlater' element={<WatchLater />} />
                            <Route path='*' element={<Navigate to="/" replace />} />
                        </Routes>
            </div>
        </BrowserRouter>
    );
};

export default Dashboard;
