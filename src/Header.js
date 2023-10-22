import React from "react";
import Logo from './equigoLogo.svg'
import './Header.css'

function Header() {
    return (
        <div className = "header__wrapper">
            {/*logo */}
            <div className = "header__Logo">
                <img src = {Logo} width ={25} />
            </div> 
            {/*search */}
            <div className = "header__search">
                <div className = "header__searchContainer">
                    <input placeholder="Search" type = "text" />

                </div>
            </div>
            {/*menu*/}
            <div className = "header__menuItems">
                <a href = "#">Free Stocks</a>
                <a href = "#">Portfolio</a>
                <a href = "#">Account</a>
            </div>
        </div>
    )
}

export default Header
