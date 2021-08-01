import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Room({ room }) {
  const { name, images, price, slug } = room;
  return (
    <article className="room">
      <div
        className="img-container"
        style={{
          backgroundImage: `url(${images[0]})`,

          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      >
        <div className="price-top">
          <h6>kes {price}</h6>
          <p>Per Night</p>
        </div>
        <Link to={`/rooms/${slug}`} className="btn-primary room-link">
          Features
        </Link>
        <p className="room-info">{name}</p>
      </div>
    </article>
  );
}

export default Room;

Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  }),
};
