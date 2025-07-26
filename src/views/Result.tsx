import React from "react";
import Box from "@mui/material/Box";
import { Avatar, Button, Paper, Typography } from "@mui/material";
import downloadIcon from "../assets/icons/download.png";
import twitterIcon from "../assets/icons/twitter.png";
import spotifyIcon from "../assets/icons/spotify.png";

import enfp from "../assets/mbti/enfp.png";
import infp from "../assets/mbti/infp.png";
import intj from "../assets/mbti/intj.png";
import intp from "../assets/mbti/intp.png";


const Result = () => {
  const answers = JSON.parse(localStorage.getItem("userAnswers") || "[]");
  console.log(answers);
  localStorage.removeItem("userAnswers");

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
            일단 임의로 채워넣긴 했는데 플리 api 써야지..
          </Typography>

          {/* 추천 노래 리스트 */}
          <Box sx={{ mt: 2 }}>
            {[
              {
                title: "그냥 괴물을 살려두면 안되는걸까",
                artist: "투모로우바이투게더",
                image: "/img1.png",
              },
              {
                title: "The Chase",
                artist: "하츠투하츠(Hearts2Hearts)",
                image: "/img2.png",
              },
              {
                title: "Royal",
                artist: "아이브(IVE)",
                image: "/img3.png",
              },
              {
                title: "Cosmic",
                artist: "레드벨벳",
                image: "/img4.png",
              },
            ].map((song, idx) => (
              <Box
                key={idx}
                sx={{ display: "flex", alignItems: "center", mb: 1 }}
              >
                <Avatar
                  variant="square"
                  src={song.image}
                  sx={{ width: 48, height: 48, mr: 1 }}
                />
                <Box sx={{ textAlign: "left" }}>
                  <Typography fontSize="0.9rem">{song.title}</Typography>
                  <Typography fontSize="0.75rem" color="text.secondary">
                    {song.artist}
                  </Typography>
                </Box>
              </Box>
            ))}
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
          대충 이건 텍스트임 아몰라 이거 텍스트 맞음 대충 쓰고있음 뭘 넣어야
          할지 몰라서 일단 쓰고보자
          <br /> <br />
          텍스트 길이 늘리기 얍...늘어나라 늘어나라 늘어나라고!!
        </Paper>

        {/* 나랑 잘 맞는 / 안 맞는 */}
        <Typography fontWeight="bold" mb={1}>
          나랑 잘 맞는 ??
        </Typography>
        <Paper
          elevation={0}
          sx={{ backgroundColor: "#FFF3EC", borderRadius: 4, p: 2, mb: 3 }}
        >
          {/* 내용 넣기 */}
          여기 아직도 ui 디자인 못했음
        </Paper>

        <Typography fontWeight="bold" mb={1}>
          나랑 안 맞는 ??
        </Typography>
        <Paper
          elevation={0}
          sx={{ backgroundColor: "#FFF3EC", borderRadius: 4, p: 2, mb: 3 }}
        >
          {/* 내용 넣기 */}
          여기 아직도 ui 디자인 못했음
        </Paper>

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
