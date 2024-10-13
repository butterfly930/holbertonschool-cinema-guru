import "./components.css"
import React from 'react';

const Activity = ({ activity }) => {
    return (
        <li className="activity">
            <p>{activity.message}</p> {/* Adjust this line based on your activity format */}
        </li>
    );
};

export default Activity;
