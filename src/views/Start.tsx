import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { Paper } from "@mui/material";

const Start = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        backgroundColor: "#FFDCDC",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Typography variant="h4" fontWeight="bold">
        MBTI 음악 테스트
      </Typography>
      <Paper
        elevation={0}
        sx={{
          backgroundColor: "#F4B183",
          borderRadius: 4,
          px: 2,
          textAlign: "left",
        }}
      >
        <Button
          onClick={() => navigate("/question")}
          sx={{
            backgroundColor: "transparent",
            width: "100%",
            justifyContent: "flex-start",
            textAlign: "left",
            color: "black"
          }}
        >
          시작하기
        </Button>
      </Paper>
    </Box>
  );
};

export default Start;
