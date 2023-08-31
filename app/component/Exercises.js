"use client";

import React from "react";
import { useEffect, useState } from "react";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";
import { Pagination } from "@mui/material";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const exercisePerPage = 9;

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 500, behavior: "smooth" });
  };

  const indexOfLastExercise = currentPage * exercisePerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisePerPage;
  const currentExercises = exercises?.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];
      if (bodyPart === "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }

      setExercises(exercisesData);
    };
    fetchExercisesData();
  }, [bodyPart]);

  return (
    <section id="exercises" className="md:mx-[50px] text-black p-[20px]">
      <div className="text-3xl md:flex flex justify-center font-bold">
        Showing Result
      </div>
      <div className="flex justify-center items-center ">
        <div className="grid gap-x-[80px] md:grid-cols-3 ">
          {currentExercises.map((exercise, index) => (
            <ExerciseCard key={index} exercise={exercise} />
          ))}
        </div>
      </div>
      <nav className="flex justify-center  rounded-lg font-[Poppins]">
        {exercises.length > 9 && (
          <di v className="border-2  border-orange-200 rounded-lg ">
            <Pagination
              color="standard"
              shape="rounded"
              defaultPage={1}
              count={Math.ceil(exercises.length / exercisePerPage)}
              page={currentPage}
              onChange={paginate}
              size="small"
            />
          </di>
        )}
      </nav>
    </section>
  );
};

export default Exercises;
