import React from "react";
import Box from "@mui/material/Box";
import { Button, LinearProgress, Paper, Typography } from "@mui/material";
import questions from "../data/questions.ts";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Question = () => {
  const [currentQuestionId, setCurrentQuestionId] = useState(0);
  const currentQuestion = questions[currentQuestionId];
  const navigate = useNavigate();

  const handleAnswer = (selected: number) => {
    console.log("선택한 답:", selected);
    localStorage.setItem(
      "userAnswers",
      JSON.stringify([
        ...JSON.parse(localStorage.getItem("userAnswers") || "[]"),
        selected,
      ])
    );

    if (currentQuestionId === 7) {
      navigate("/result");
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
        flexDirection: "column", // 세로 방향 배치
        alignItems: "center", // 가로 중앙
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
        {/* <Box
          sx={{
            width: 120,
            height: 120,
            borderRadius: "50%",
            backgroundColor: "white",
            margin: "0 auto",
            mb: 4,
          }}
        /> */}
        {/* 제목 */}
        <Paper
          elevation={0}
          sx={{
            backgroundColor: "transparent",
            borderRadius: 4,
            pt: 2,
            textAlign: "center",
            mb: 2,
          }}
        >
          IDOL 심리테스트
          <Typography variant="h6" fontWeight="bold" mt="10px">
            당신에게 맞는 아이돌을 추천해드려요~
          </Typography>
        </Paper>

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
            onClick={() => handleAnswer(1)}
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
            onClick={() => handleAnswer(2)}
          >
            <Typography>{currentQuestion.choice_2}</Typography>
          </Button>
        </Paper>
      </Box>
    </Box>
  );
};

export default Question;
