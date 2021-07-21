import React from 'react'
import Hero from '../Components/Hero'
import Banner from '../Components/Banner';
import { Link } from 'react-router-dom';
import FeaturedRooms from '../Components/FeaturedRooms'


import Services from '../Components/Services';

export default function Home() {
    return (
        <>
       <Hero>
           <Banner title="Luxurious Rooms" subtitle="Delightful rooms starting from kes 10,000">
               <Link to='./Rooms' className="btn-primary">
                   Our Rooms
               </Link>


               

           </Banner>
          
       </Hero>

      
       <Services/>
       <FeaturedRooms/>
       </>
    )
}




