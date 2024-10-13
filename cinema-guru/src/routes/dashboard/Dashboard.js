// src/routes/dashboard/Dashboard.js
import React from 'react';
import './dashboard.css'; 
import Header from '../../components/navigation/Header'; 

const Dashboard = ({ userUsername, setIsLoggedIn }) => {
    return (
        <div className="dashboard">
            {}
            <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />

            {}
            <div className="dashboard-content">
                <h1>Dashboard</h1>
                <p>This is the dashboard view where you can add additional features later.</p>
            </div>
        </div>
    );
};

export default Dashboard;
