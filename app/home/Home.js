"use client";

import React, { useState } from "react";
import HeroBanner from "../component/HeroBanner";
import SearchExercises from "../component/SearchExercises";
import Exercises from "../component/Exercises";

const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);

  return (
    <div>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercises={setExercises}
        exercises={exercises}
        bodyPart={bodyPart}
      />
    </div>
  );
};

export default Home;
