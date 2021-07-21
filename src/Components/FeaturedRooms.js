import React, { Component } from 'react'
import Loading from './Loading'
import { RoomContext } from '../Context'
import Title from './Title'
import Room from './Room'


export class FeaturedRooms extends Component {
    static contextType = RoomContext;
   
    render() {
        let { featuredRooms: rooms , loading} = this.context;
        rooms = rooms.map(room=>{
           return <Room key={room.id} room={room}/>
       })
       
        return (
            <section className="featured-rooms">
                <Title  title="Featured Rooms"/>
                <div className="featured-rooms-center">
                    {loading?<Loading/>:rooms}
                   </div>          
            </section>
        )
    }
}

export default FeaturedRooms
