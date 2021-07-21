import React, { Component } from "react";
import { data } from "./data";
export const RoomContext = React.createContext();

export default class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
  };
  componentDidMount() {
    let rooms = this.formatData(data);
    console.log(rooms);
    let featuredRooms = rooms.filter((room) => room.featured === true);

    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
    });
    console.log(featuredRooms);
  }
  formatData(data) {
    let mappedData = data.map((dataitem) => {

      let id = dataitem.sys.id;

      let images = dataitem.fields.images.map((image) => image.url);

      let room = { ...dataitem.fields, images, id };
      
      return room;
    });
    return mappedData;
  }
  render() {
    return (
      <RoomContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer };
