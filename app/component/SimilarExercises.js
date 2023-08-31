"use client";
import React from "react";
import HorizontalScrollBar from "./HorizontalScrollBar";
import Loader from "./Loader";

const SimilarExercises = ({
  targetMuscleExercises,
  equipmentMuscleExercises,
}) => {
  return (
    <div className="mx-7 mt-[80px] ">
      <p className="  font-semibold text-center text-2xl ml-6">
        The exercise that target with same muscle group
      </p>
      <div>
        {targetMuscleExercises.length ? (
          <HorizontalScrollBar data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </div>
      <p className="mb-4 text-center font-semibold text-2xl ml-6">
        The exercise that use the same equipment
      </p>
      <div>
        {equipmentMuscleExercises.length ? (
          <HorizontalScrollBar data={equipmentMuscleExercises} />
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default SimilarExercises;
