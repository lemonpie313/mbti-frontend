import React from "react";
import Box from "@mui/material/Box";
import { Button, LinearProgress, Paper, Typography } from "@mui/material";
import questions from "../data/questions.ts";
import { useState } from "react";

const Question = () => {
  const [currentQuestionId, setCurrentQuestionId] = useState(0);

  const currentQuestion = questions[currentQuestionId];

  const handleAnswer = (selected: string) => {
    console.log("선택한 답:", selected);
    if (currentQuestionId == 7) {
      console.log("끝")
      return;
    }
    setCurrentQuestionId(currentQuestionId + 1);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#FFDCDC",
        width: "100vw",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
      }}
    >
      <Box
        sx={{
          maxWidth: "375px",
          width: "100%",
          textAlign: "center",
        }}
      >
        {/* 프로필 원 */}
        <Box
          sx={{
            width: 120,
            height: 120,
            borderRadius: "50%",
            backgroundColor: "white",
            margin: "0 auto",
            mb: 4,
          }}
        />

        {/* 진행도 바 */}
        <Typography variant="body2" sx={{ textAlign: "left" }}>
          {currentQuestion.percent}
        </Typography>
        <LinearProgress
          variant="determinate"
          value={currentQuestion.percent}
          sx={{
            height: 10,
            borderRadius: 5,
            backgroundColor: "#fff",
            "& .MuiLinearProgress-bar": {
              backgroundColor: "#F4B183",
            },
            mb: 4,
          }}
        />

        {/* 제목 & 설명 */}
        <Paper
          elevation={0}
          sx={{
            backgroundColor: "#FFF3EC",
            borderRadius: 4,
            p: 3,
            textAlign: "left",
            mb: 3,
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            {currentQuestion.title}
          </Typography>
          <Typography variant="body2" mt={1}>
            {currentQuestion.description}
          </Typography>
        </Paper>

        {/* 객관식 선택지 */}
        <Paper
          elevation={0}
          sx={{
            backgroundColor: "#FFE2B9",
            borderRadius: 4,
            p: 2,
            textAlign: "left",
            mb: 2,
          }}
        >
          <Button
            sx={{
              width: "100%",
              justifyContent: "flex-start",
              textAlign: "left",
            }}
            onClick={() => handleAnswer(currentQuestion.choice_1)}
          >
            <Typography>{currentQuestion.choice_1}</Typography>
          </Button>
        </Paper>

        <Paper
          elevation={0}
          sx={{
            backgroundColor: "#FFE2B9",
            borderRadius: 4,
            p: 2,
            textAlign: "left",
          }}
        >
          <Button
            sx={{
              width: "100%",
              justifyContent: "flex-start",
              textAlign: "left",
            }}
            onClick={() => handleAnswer(currentQuestion.choice_2)}
          >
            <Typography>{currentQuestion.choice_2}</Typography>
          </Button>
        </Paper>
      </Box>
    </Box>
  );
};

export default Question;
