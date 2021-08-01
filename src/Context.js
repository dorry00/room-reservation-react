import React, { Component } from "react";
import { data } from "./data";

export const RoomContext = React.createContext();

export default class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: "all",
    price: 0,
    capacity: 1,
    breakfast: false,
    pets: false,
    minPrice: 0,
    maxPrice: 0,
    maxSize: 0,
    minSize: 0,
  };
  componentDidMount() {
    let rooms = this.formatData(data);

    let featuredRooms = rooms.filter((room) => room.featured === true);
    let maxPrice = Math.max(...rooms.map((room) => room.price));
    let minPrice = Math.min(...rooms.map((room) => room.price));
    let maxSize = Math.max(...rooms.map((room) => room.size));
    let minSize = Math.min(...rooms.map((room) => room.size));
    let type = { ...rooms.map((room) => room.type) };

    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
      price: minPrice,
      maxPrice,
      minPrice,
      type,
      minSize,
      maxSize,
    });
  }

  // format the data from the data.js file
  formatData(data) {
    let mappedData = data.map((dataitem) => {
      let id = dataitem.sys.id;

      let images = dataitem.fields.images.map((image) => image.url);

      let room = { ...dataitem.fields, images, id };

      return room;
    });
    return mappedData;
  }

  //handleChange function
  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    console.log(target, name);

    this.setState(
      {
        [name]: value,
      },
      this.roomFilter
    );
  };

  //filter the rooms
  roomFilter = () => {
    let { rooms, type, capacity, maxSize, minSize, pets, breakfast, price } =
      this.state;
    let tempRooms = [...rooms];

    capacity = parseInt(capacity);
    price = parseInt(price);

    tempRooms = tempRooms.filter(
      (room) => room.size >= minSize && room.size <= maxSize
    );

   
    // filter by type

    if (type !== "all") {
      tempRooms = tempRooms.filter((room) => room.type === type);
    }

    if (capacity !== 1) {
      tempRooms = tempRooms.filter((room) => room.capacity >= capacity);
    }


    tempRooms = tempRooms.filter((room) => room.price >= price);

    //filter by price
    if (breakfast) {
      tempRooms = tempRooms.filter((room) => room.breakfast === true);
    }
    if (pets) {
      tempRooms = tempRooms.filter((room) => room.pets === true);
    }

    this.setState({
      sortedRooms: tempRooms,
    });
  };

  getRoom = (slug) => {
    let tempRooms = [...this.state.rooms];
    let room = tempRooms.find((room) => room.slug === slug);
    return room;
  };

  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer };
