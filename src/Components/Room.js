import React from "react";
import { Link } from "react-router-dom";

function Room({ room }) {
  const { name, images, price, description } = room;
  return (
    <article className="room"> 
      <div className="img-container" style={{ 
        backgroundImage:`url(${images[0]})`,
       
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain'
      }}>
        
      
      <div className="price-top">
        <h6>kes {price}</h6>
        <p>Per Night</p>
      </div>
      <Link to={`/src/Pages/Rooms/${name}`} className="btn-primary room-link">
        Features
      </Link>
      </div>
    </article>
  );
}

export default Room;
