import React, { Component } from 'react'
import {FaHiking,FaShuttleVan,FaBeer,FaCocktail} from 'react-icons/fa';
import Title from './Title';

export class Services extends Component {

    state = {
       services : [
            {
                icon:<FaHiking/>,
                title:'Free hiking',
                info:'some lorem ipsum goes here to define what this is '
            },
            {
                icon:<FaShuttleVan/>,
                title:'Shuttle',
                info:'some lorem ipsum goes here to define what this is can you believe i dont have 10 words '
            },
            {
                icon:<FaCocktail/>,
                title:'Free cock tail',
                info:'some lorem ipsum goes here to define what this is can you believe i dont have 10 words '
            },
            {
                icon:<FaBeer/>,
                title:'Strongest Beer',
                info:'some lorem ipsum goes here to define what this is '
            },
           
        ]
       
    }
    
    render() {
        return (
            <section className="services"> 
                <Title title="services"/>
                <div className="services-center">
                         
                {this.state.services.map((service,index)=>{
                       return <article key={index} className="service">
                           <span>{service.icon}</span>
                           <h6>{service.title}</h6>
                           <p>{service.info}</p>
                       </article>
                   })
                    }
                </div>
                
            </section>
        )
    }
}

export default Services
