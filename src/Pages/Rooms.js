import React from 'react'
import Hero from '../Components/Hero';
import Banner from '../Components/Banner';
import {Link} from 'react-router-dom'

function Rooms() {
    return (
        <Hero hero="roomsHero">
            <Banner title="Our rooms">
                <Link to='/' className="btn-primary">return Home</Link>
            </Banner>
        </Hero>
    )
}

export default Rooms;
