import React from 'react'
import Trollface from '../resources/images/trollface.png'

const Header: React.FC = () => {
    return (
        <header className='header'>
            <div className="header__title-logo">
                <img src={Trollface} alt="Trollface" className='header__logo'/>
                <h1 className="header__title">Meme Generator</h1>
            </div>
            <h2 className='header__subtitle'>Generate a meme and share it with your friends!</h2>
        </header>
    )
}

export default Header