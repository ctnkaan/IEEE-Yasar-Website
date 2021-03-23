import React from 'react';
import HeaderButton from './HeaderButton'
import { header } from './Profile'

const Header = () => {

    return (
        <div>
            <div className="Header">
                <h1>{ `${header.name}` }</h1>
            <p className="line-1 anim-typewriter">Bilim, Teknoloji, Araştırma</p>
            <HeaderButton/>
            </div>
        </div>
    )
    
}

export default Header;