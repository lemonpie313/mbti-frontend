export type QuestionData = {
  percent: number;
  title: string;
  description: string;
  choice_1: string;
  choice_2: string;
};

const questions: QuestionData[] = [
  {
    percent: 0,
    title: "관심있던 가수의 컴백 소식이 떴다!",
    description: "너무 설레잖아!! 주변 사람들한테 공유할까?",
    choice_1: "\“헐 미쳤어!!\” 바로 인스타 스토리 올림",
    choice_2: "속으론 난리지만 겉으론 조용히 티 안 내고 음… 기대된다 생각만 함",
  },
  {
    percent: 12,
    title: "드디어 신곡이 나왔어! 첫 감상은 어땠어?",
    description: "신곡을 처음 들을 땐 어떻게 감상하는 편이야?",
    choice_1: "듣기 좋으면 끝이지 뭐! 노래 좋다~ 정도로 감상함",
    choice_2: "가사 분석+스토리 과몰입 ON.",
  },
  {
    percent: 25,
    title: "노래가 너무 좋아서 얘기 좀 해야겠다.",
    description: "어떤 점에서 마음에들어?",
    choice_1: "이런 구성 맘에 들어~ 곡 전개가 탄탄해!",
    choice_2: "이 부분 감정 미쳤다… 그냥 마음이 쿵 내려앉음",
  },
  {
    percent: 38,
    title: "이 노래, 자주 들을것 같아! 플레이리스트에 저장해야지!",
    description: "플레이리스트를 어떻게 정리하는게 좋을까?",
    choice_1: "나름대로의 플리 기준이 있음. 정리해서 넣자.",
    choice_2: "좋은 거 생기면 일단 넣고 보자! 테마는 나중에 생각할래",
  },
  {
    percent: 50,
    title: "친구랑 같이 카페에 앉아있는데, 갑자기 스피커에서 그 노래가 나온다?!",
    description: "순간 어떻게 해?",
    choice_1: "\“엥 이게 왜나와? 이 노래 그 노래야\”",
    choice_2: "속으로 \‘오… 그 노래다\’ 하면서 말 없이 흐뭇해하기",
  },
  {
    percent: 62,
    title: "너무 좋았던 이 노래, 친구한테도 추천하고 싶어졌어!",
    description: "어떻게 설명할래?",
    choice_1: "\“하우스 장르인데, 3절 브릿지 신스 사운드가 독특하지 않아?\”",
    choice_2: "\“가사를 봐. 어떻게 이런 말을 노래에 담을 수 있어? 나 눈물 날 뻔했어.\”",
  },
  {
    percent: 75,
    title: "안되겠다… 이건 무조건 콘서트 가야 해.",
    description: "티켓팅까지 며칠 안남았는데, 어떻게 할거야?",
    choice_1: "일정 비우고 기차표부터 예매하자. 나중에 무슨 변수가 생길지 모르니까!!",
    choice_2: "일단 가는게 중요해. 일단 표부터 잡고 일정 조절하자!",
  },
  {
    percent: 88,
    title: "티켓팅 성공! 이제 기다리는 일만 남았어.",
    description: "너 지금 무슨 생각 들어?",
    choice_1: "그냥 가서 즐기면 됐지~ 딱히 상상은 안 함",
    choice_2: "어떤 곡 먼저 할까? 엔딩곡은 뭘까? 혼자서 세트리스트까지 짜고있음",
  },
];

export default questions;
