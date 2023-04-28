import React, { useContext } from 'react';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(result => { })
            .catch(error => {
                console.error(error);
            });
    };
    return (
        <nav className="h-20 bg-[#1C2B35] flex justify-between items-center px-28 w-full sticky top-0 z-10">
            <img src={logo} alt="" />
            <div className="text-[17px] leading-[20px] tracking-[0.005em] text-white space-x-8">
                <Link className="hover:text-amber-500" to="/">Shop</Link>
                <Link className="hover:text-amber-500" to="/orderPreview">Order Preview</Link>
                <Link className="hover:text-amber-500" to="/manageInventory">Manage Inventory</Link>
                {
                    !user && <>
                        <Link className="hover:text-amber-500" to="/login">Login</Link>
                        <Link className="hover:text-amber-500" to="/signup">Sign Up</Link>
                    </>
                }
                {
                    user && <span>{user.email} <button onClick={handleLogOut}>Sign Out</button></span>
                }
            </div>
        </nav>
    );
};

export default Header;