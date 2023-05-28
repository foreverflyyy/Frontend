import React from "react";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

export default function PostFilter({ filter, setFilter }) {

  const options = [
    { value: "title", name: "By title" },
    { value: "description", name: "By description" },
  ];

  return (
    <div>
      <MySelect
        options={options}
        defaultValue={"Sort By"}
        value={filter.sort}
        onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
      />
      <MyInput
        placeholer="search"
        value={filter.query}
        onChange={(e) => setFilter({...filter, query: e.target.value})}
      />
    </div>
  );
}
