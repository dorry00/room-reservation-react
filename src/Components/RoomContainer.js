import React from "react";
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";

import { RoomConsumer } from "../Context";
import Loading from "./Loading";

export default function RoomContainer() {
  return (
    <RoomConsumer>
      {(value) => {
        console.log(value);
        const { loading, sortedRooms, rooms } = value;
        if (loading) {
          return <Loading />;
        } else {
          return (
            <div>
              <RoomFilter rooms={rooms} />
              <RoomList rooms={sortedRooms} />
            </div>
          );
        }
      }}
    </RoomConsumer>
  );
}
