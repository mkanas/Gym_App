"use client";

import React, { useState } from "react";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import HeroBanner from "../component/HeroBanner";
import SearchExercises from "../component/SearchExercises";
import Exercises from "../component/Exercises";

const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);

  return (
    <div>
      <Navbar />
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
      <Footer />
    </div>
  );
};

export default Home;
