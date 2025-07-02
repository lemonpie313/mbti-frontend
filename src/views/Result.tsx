import React from "react";
import Box from "@mui/material/Box";

const Result = () => {
  
  const answers = JSON.parse(localStorage.getItem('userAnswers') || '[]');
  localStorage.removeItem('userAnswers');

  return <Box>result</Box>;
};

export default Result;
