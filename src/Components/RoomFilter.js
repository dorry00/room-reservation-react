import React, { useContext } from "react";
import Title from "../Components/Title";
import { RoomContext } from "../Context";

const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

export default function RoomFilter({ rooms }) {
  const context = useContext(RoomContext);

  console.log(context);
  const {
    breakfast,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    maxSize,
    minSize,
    pets,
    handleChange,
  } = context;
  let types = getUnique(rooms, "type");

  types = ["all", ...types];

  types = types.map((type, index) => {
    return (
      <option key={index} value={type}>
        {type}
      </option>
    );
  });

  let people = getUnique(rooms, "capacity");
  people = people.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));

  return (
    <section className="filter-container">
      <Title title="Search Rooms" />
      <form className="filter-form" onSubmit={handleChange}>
        <div className="form-group">
          <label>select type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select
            name="capacity"
            id="capacity"
            onChange={handleChange}
            className="form-control"
            value={capacity}
          >
            {people}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="price">room price {price}</label>
          <input
            type="range"
            min={minPrice}
            max={maxPrice}
            value={price}
            onChange={handleChange}
            className="form-control"
            id="price"
            name="price"
          />
        </div>

        <div className="form-group">
          <label htmlFor="size">room size</label>
          <div className="size-inputs">
            <input
              type="number"
              onChange={handleChange}
              value={minSize}
              className="input-size"
              id="minSize"
              name="minSize"
            />
            <input
              type="number"
              onChange={handleChange}
              value={maxSize}
              className="input-size"
              id="maxSize"
              name="maxSize"
            />
          </div>
        </div>

        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">pets</label>
          </div>
        </div>
      </form>
    </section>
  );
}
