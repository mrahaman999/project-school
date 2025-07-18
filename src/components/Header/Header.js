import React from 'react';
import logo from './images/school-logo.png';
import './Header.css';

const Header = () => {
    return (
        
            <header className="header">
                
                <img src={logo} alt="logo"/>
                
                <h2>Sreefaltola Secondary Girls School</h2>
               
                <nav className='navbar'>
                    <a href="/home">Home</a>
                    <a href="/about-us">About Us</a>
                    <a href="/administration">Administration</a>
                    <a href="/academic">Academic</a>
                    <a href="/facilities">Facilities</a>
                    <a href="/events">Events</a>
                    <a href="/achivements">Achivements</a>
                    <a href="/admission">Admission</a>
                    <a href="/gallery">Gallery</a>
                    <a href="/contact-us">Contact Us</a>
                </nav>

            </header>
            
        
                
          
       
    );
};

export default Header;