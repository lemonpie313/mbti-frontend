import React from "react";
import Box from "@mui/material/Box";
import { LinearProgress, Paper, Typography } from "@mui/material";

const Question = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#FFDCDC',
        width: '100vw',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,
      }}
    >
      <Box
        sx={{
          maxWidth: '375px',
          width: '100%',
          textAlign: 'center',
        }}
      >
        {/* 프로필 원 */}
        <Box
          sx={{
            width: 120,
            height: 120,
            borderRadius: '50%',
            backgroundColor: 'white',
            margin: '0 auto',
            mb: 4,
          }}
        />

        {/* 진행도 바 */}
        <Typography variant="body2" sx={{ textAlign: 'left' }}>
          80%
        </Typography>
        <LinearProgress
          variant="determinate"
          value={80}
          sx={{
            height: 10,
            borderRadius: 5,
            backgroundColor: '#fff',
            '& .MuiLinearProgress-bar': {
              backgroundColor: '#F4B183',
            },
            mb: 4,
          }}
        />

        {/* 제목 & 설명 */}
        <Paper
          elevation={0}
          sx={{
            backgroundColor: '#FFF3EC',
            borderRadius: 4,
            p: 3,
            textAlign: 'left',
            mb: 3,
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            드디어 컴백날, 신곡이 나왔어!
          </Typography>
          <Typography variant="body2" mt={1}>
            이날만 손꼽아 기다렸어. <br />
            저녁 6시, 음원 사이트를 새로고침하니 익숙한 이름이 보이네. <br />
            떨리는 손으로 재생 버튼을 눌렀고, <br />
            그 찰나의 첫 소절이 귀에 들어오는 순간!
          </Typography>
        </Paper>

        {/* 감정 카드 1 */}
        <Paper
          elevation={0}
          sx={{
            backgroundColor: '#FFE2B9',
            borderRadius: 4,
            p: 2,
            textAlign: 'left',
            mb: 2,
          }}
        >
          <Typography>
            “말도 안돼.. 너무 좋잖아?? 이런 갓곡은 여기저기 알려야돼!!”
            <br />
            당장 인스타 스토리로 올리기
          </Typography>
        </Paper>

        {/* 감정 카드 2 */}
        <Paper
          elevation={0}
          sx={{
            backgroundColor: '#FFE2B9',
            borderRadius: 4,
            p: 2,
            textAlign: 'left',
          }}
        >
          <Typography>
            ‘우와… 너무좋다..//’ <br />
            속으론 난리나지만, 겉으론 조용히 티 내지 않고 혼자 좋아하는중
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default Question;
