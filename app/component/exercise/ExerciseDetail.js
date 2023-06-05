"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Box } from "@mui/material";
import { exerciseOptions, fetchData } from "@/app/utils/fetchData";
import Detail from ".";
import SimilarExercises from "../SimilarExercises";
import ExercisesVideos from "../ExercisesVideos";

const ExerciseDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [exerciseDetail, setExercisedetail] = useState({});

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const YoutubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";
      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExercisedetail(exerciseDetailData);
    };

    fetchExercisesData();
  }, [id]);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExercisesVideos />
      <SimilarExercises />
    </Box>
  );
};

export default ExerciseDetail;
