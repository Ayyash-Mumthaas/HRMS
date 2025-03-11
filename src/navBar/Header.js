import React from "react"
import ICSTlogo from '../img/IcstLogo.png'
import './Header.css'




import { Link } from "react-router-dom";

function Header(){
    return(
        <header className="header">
            <nav>
                <div className="heroSection">
                    <img src={ICSTlogo} alt="" />
                    <p>HR System</p>
                </div>
                <div className="navLinks">
                    <ul>
                        <li>Dashboard</li>
                        <li>Manage Employees</li>
                        <li>Attendance Management</li>
                        <li>Leave Management</li>
                        <li><Link to="Payroll">Payroll Management</Link></li>
                        {/* <li><Link to="/payroll">Payroll Management</Link></li> */}
                        <li>User Roles</li>
                        <li>Reports & Analytics</li>
                        <li>Settings</li>
                    </ul>
                </div>
                <div className="logout">
                    <a>Logout</a>
                </div>
            </nav>
        </header>
    )
}

export default Header;