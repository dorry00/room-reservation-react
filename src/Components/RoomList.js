import React from 'react'
import Room from './Room'

function RoomList({rooms}) {

    if(rooms.length === 0){
        return (
            <div className="empty-search">
                <h3>Unfortunately no rooms matched your search parameters</h3>
            </div>
        );
    } 
    return (
        <section className="room-list">
            <div className="room-list-center">
                {rooms.map( room=>{
                    return <Room key={room.id} room={room}/>
                })
            }
            </div>
            
        </section>
    )
}

export default RoomList

