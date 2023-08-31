"use client";

import React from "react";
import { useState, useEffect } from "react";
import { fetchData, exerciseOptions } from "../utils/fetchData";
import HorizontalScrollBar from "./HorizontalScrollBar";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );

      setBodyParts(["all", ...bodyPartsData]);
    };
    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      console.log(exercisesData);
      const searchedExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );
      setSearch("");
      setExercises(searchedExercises);
    }
  };

  return (
    <div className="px-5 py-8  bg-[#F9FCFC] md:px-5">
      <div className="font-bold mt-[35px] text-2xl md:text-4xl text-center text-black">
        <h1>
          Awesome Exercises You <br /> Should Know
        </h1>
      </div>
      <div className=" flex justify-center my-4">
        <input
          className="py-1 px-2 w-[280px] md:w-[450px] border border-red-200 rounded-l-sm focus:outline-none text-black font-medium "
          type="text"
          placeholder="search exercise"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
        <button
          className="bg-red-700 py-1 text-white px-2 hover:bg-red-800 font-semibold"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div className=" mx-20 relative py-4">
        <HorizontalScrollBar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
          isBodyParts
        />
      </div>
    </div>
  );
};

export default SearchExercises;
