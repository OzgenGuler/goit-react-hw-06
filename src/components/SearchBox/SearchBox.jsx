import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  // const handleChange = (e) => {
  //   dispatch(changeFilter(e.target.value));
  // };

  return (
    <div
      style={{
        margin: "20px",
        border: "1px solid #ccc",
        padding: "50px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <label htmlFor="search">Find Contacts by Name</label>
      <input
        type="text"
        id="search"
        value={filter}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        placeholder="Search by name"
      />
    </div>
  );
};

export default SearchBox;
