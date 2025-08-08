import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { Avatar, Button, Paper, Typography } from "@mui/material";
import downloadIcon from "../assets/icons/download.png";
import twitterIcon from "../assets/icons/twitter.png";
import spotifyIcon from "../assets/icons/spotify.png";
import result, { ResultData } from "../data/results.ts";

import enfp from "../assets/mbti/enfp.png";
import infp from "../assets/mbti/infp.png";
import intj from "../assets/mbti/intj.png";
import intp from "../assets/mbti/intp.png";

const Result = () => {
  const [mbti, setMbti] = useState("");
  const [mbtiResult, setMbtiResult] = useState<ResultData | null>(null);

  const answers = JSON.parse(localStorage.getItem("userAnswers") || "[]");

  useEffect(() => {
    localStorage.removeItem("userAnswers");

    console.log(answers);
    const mbti_answer = [
      answers[0] + answers[4],
      answers[1] + answers[7],
      answers[2] + answers[5],
      answers[3] + answers[6],
    ];

    console.log(mbti_answer);

    const mbti = [
      ["E", "I"],
      ["S", "N"],
      ["T", "F"],
      ["J", "P"],
    ];

    const result_of_mbti = mbti_answer
      .map((ans, idx) => {
        if (ans > 3) return mbti[idx][1];
        if (ans < 3) return mbti[idx][0];
        return mbti[idx][Math.floor(Math.random() * 2)];
      })
      .join("");

    console.log("mbti:", result_of_mbti);
    setMbti(result_of_mbti);

    const foundResult = result.find((item) => item.mbti == result_of_mbti);
    if (foundResult) {
      setMbtiResult(foundResult);
    }
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "#FFDCDC",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        padding: 2,
      }}
    >
      <Box sx={{ width: "100%", maxWidth: 375 }}>
        {/* 프로필 원 */}
        <Box
          component="img"
          src={intp}
          alt=".."
          sx={{ width: "100%", borderRadius: 4, mb: 2 }}
        />

        {/* 제목 */}
        <Paper
          elevation={0}
          sx={{
            backgroundColor: "#FFF3EC",
            borderRadius: 4,
            p: 2,
            textAlign: "center",
            mb: 2,
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            {mbtiResult?.title}
          </Typography>

          {/* 추천 노래 리스트 */}
          <Box sx={{ mt: 2 }}>
            <iframe
              style={{ borderRadius: "12px" }} // ✅ JSX style 객체
              src="https://open.spotify.com/embed/track/6rdkCkjk6D12xRpdMXy0I2?utm_source=generator"
              width="100%"
              height="80"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Spotify Player"
            />
          </Box>
        </Paper>

        {/* 설명 */}
        <Paper
          elevation={0}
          sx={{
            backgroundColor: "#FFF3EC",
            borderRadius: 4,
            p: 2,
            mb: 2,
            fontSize: "0.9rem",
            lineHeight: 1.5,
          }}
        >
          {mbtiResult?.description}
        </Paper>

        {/* <Typography fontWeight="bold" mb={1}>
          나랑 잘 맞는 ??
        </Typography>
        <Paper
          elevation={0}
          sx={{ backgroundColor: "#FFF3EC", borderRadius: 4, p: 2, mb: 3 }}
        >
          여기 아직도 ui 디자인 못했음
        </Paper>

        <Typography fontWeight="bold" mb={1}>
          나랑 안 맞는 ??
        </Typography>
        <Paper
          elevation={0}
          sx={{ backgroundColor: "#FFF3EC", borderRadius: 4, p: 2, mb: 3 }}
        >
          여기 아직도 ui 디자인 못했음
        </Paper> */}

        {/* 공유 버튼들 */}
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "80%",
            }}
          >
            <Button
              sx={{
                width: "25%",
                aspectRatio: "1 / 1",
              }}
            >
              <Box
                component="img"
                src={downloadIcon}
                alt=".."
                sx={{ width: "100%" }}
              />
            </Button>
            <Button
              sx={{
                width: "25%",
                aspectRatio: "1 / 1",
              }}
            >
              <Box
                component="img"
                src={twitterIcon}
                alt=".."
                sx={{ width: "100%" }}
              />
            </Button>
            <Button
              sx={{
                width: "25%",
                aspectRatio: "1 / 1",
              }}
            >
              <Box
                component="img"
                src={spotifyIcon}
                alt=".."
                sx={{ width: "100%" }}
              />
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Result;
