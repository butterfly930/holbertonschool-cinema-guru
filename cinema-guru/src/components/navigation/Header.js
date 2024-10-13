import "./navigation.css";

const Header = ({ userUsername, setIsLoggedIn }) => {

    
    const logout = () => {
        localStorage.removeItem('accessToken'); 
        setIsLoggedIn(false); 
    };

    return(
        <nav className="header">
            <img src="https://picsum.photos/100/100" alt="User Avatar" className="header-avatar" />
            <p className="header-welcome">Welcome, {userUsername}!</p>
            <span className="header-logout" onClick={logout}>
                <i className="fas fa-sign-out-alt"></i> Logout
            </span>
        </nav>
    );
}
export default Header;