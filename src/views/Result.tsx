import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { Avatar, Button, Paper, Typography } from "@mui/material";

import result, { ResultData } from "../data/results.ts";
import Playlist from "../components/Playlist.tsx";

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
          당신의 성향은...
          <Typography variant="h6" fontWeight="bold" mt="10px">
            {mbtiResult?.title}
          </Typography>
        </Paper>
        {/* 추천 노래 */}
        <Box sx={{ my: 2 }}>
          <iframe
            style={{ borderRadius: "12px" }}
            src={`https://open.spotify.com/embed/track/${mbtiResult?.trackId}?utm_source=generator`}
            width="100%"
            height="80"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Spotify Player"
          />
        </Box>

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
          <Typography variant="h6" fontWeight="bold" mb="10px">
            추천하는 아이돌 - {mbtiResult?.artistName}
          </Typography>
          {mbtiResult?.recommendation}
        </Paper>
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
          <Typography variant="h6" fontWeight="bold" mb="10px">
            {mbtiResult?.artistName} 의 대표곡
          </Typography>
          <Playlist
            artistId={mbtiResult?.artistId || ""}
            token={
              "BQB8qsElXNnrdHigfgr6kJpZ8cCrj5vazW-oJkM2P60x0rqbUHkcoSTAC-44f12WDAarnFc8zrNksbe8gyjINhnXVtcWYQnP1GZW9zIHCOObJxtKvo7yi5pwNCVxx9coRIQy-zoCDWA"
            }
          />
        </Paper>

        {/* 공유 버튼들 */}
        {/* <Box sx={{ display: "flex", justifyContent: "center" }}>
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
        </Box> */}
      </Box>
    </Box>
  );
};

export default Result;
