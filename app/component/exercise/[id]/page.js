import React from "react";

import ExerciseDetail from "../ExerciseDetail";

const DetailPage = (params) => {
  const { id } = params.params;

  return (
    <div>
      <ExerciseDetail exerciseId={id} />
    </div>
  );
};

export default DetailPage;
