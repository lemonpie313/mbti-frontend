export type ResultData = {
  mbti: string;
  title: string;
  description: string;
  trackId: string;
  artistId: string;
  artistName: string;
  recommendation: string;
};

const results: ResultData[] = [
  {
    mbti: "ENFP",
    title: "무대 위 자유로운 영혼",
    description:
      "에너지가 넘치고 새로운 걸 시도하는 걸 즐겨요. 음악을 들을 때 장르를 가리지 않고, 기분이 이끄는 대로 곡을 고르는 편이에요. 한 곡을 여러 번 반복하기보다 다양한 노래를 골고루 들어요. 공연에 가면 처음 듣는 곡이라도 금방 리듬에 맞춰 몸을 움직여요. 음악을 들으면 자유롭게 상상하고, 그 순간의 감정을 솔직하게 표현하는 걸 좋아해요.",
    trackId: "3F4lHPNHlvr3RpO4tpVOIs",
    artistId: "7cjg7EkeZy3OI5o9Qthc6n",
    artistName: "ZEROBASEONE",
    recommendation:
      "다채로운 콘셉트와 무대 에너지가 강해서, 새로운 것을 시도하는 성향과 잘 맞아요. 항상 색다른 퍼포먼스로 신선한 자극을 줄 수 있어요.",
  },
  {
    mbti: "ENFJ",
    title: "메시지를 전하는 리더형 팬",
    description:
      "음악에서 전달되는 의미와 이야기를 중요하게 생각해요. 가사에 담긴 감정을 느끼고, 그 분위기를 다른 사람과 나누는 걸 즐겨요. 공연이나 음원 속에서 아티스트가 어떤 마음으로 노래했는지를 상상하며 감상해요. 분위기를 이끌고 사람들과 함께하는 순간에 큰 보람을 느껴요. 음악을 통해 좋은 에너지를 전하는 걸 소중하게 여겨요.",
    trackId: "4ndxCrtl74lgOdF6Lz7bIq",
    artistId: "2jOm3cYujQx6o1dxuiuqaX",
    artistName: "RIIZE",
    recommendation:
      "따뜻한 메시지와 공감 가는 가사로 사람들을 끌어당겨서, 주변에 긍정적인 영향을 주는 성향과 잘 어울려요.",
  },
  {
    mbti: "ENTP",
    title: "신곡 탐험가",
    description:
      "새로운 음악을 찾고 시도하는 데 주저함이 없어요. 익숙한 곡보다는 신선하고 예상치 못한 전개가 있는 노래를 좋아해요. 친구들에게 새로운 곡을 소개하고, 반응을 보는 것도 즐거워해요. 음악을 들을 때는 장르나 콘셉트의 경계를 두지 않아요. 매번 다른 분위기의 곡을 경험하면서 스스로 영감을 얻어요.",
    trackId: "7twsZBhfSJFeaDp2rFHP1d",
    artistId: "4hnHLgMSOiqERWBL4jINP1",
    artistName: "BOYNEXTDOOR",
    recommendation:
      "신선하고 개성 넘치는 음악 스타일이 많아서, 변화를 즐기고 다양한 시도를 좋아하는 성향에게 잘 맞아요.",
  },
  {
    mbti: "ENTJ",
    title: "기획자 마인드의 플레이리스트 설계자",
    description:
      "음악을 들을 때 흐름과 구조를 함께 보는 편이에요. 곡의 시작과 끝, 전환 부분까지 신경 쓰며 듣는 걸 좋아해요. 플레이리스트를 만들 때도 분위기와 속도를 계획적으로 배치해요. 한 곡을 들으면서도 전체 앨범 속 위치나 연결성을 생각해요. 음악을 체계적으로 즐기고, 완성도 있는 구성을 선호해요.",
    trackId: "0vaxYDAuAO1nPolC6bQp7V",
    artistId: "4TEK9tIkcoxib4GxT3O4ky",
    artistName: "KISS OF LIFE",
    recommendation:
      "완성도 높은 퍼포먼스와 치밀한 곡 구성이 많아서, 계획적으로 음악을 즐기는 취향에 잘 맞아요.",
  },
  {
    mbti: "ESFP",
    title: "흥폭발 콘서트 요정",
    description:
      "음악만 들려도 몸이 먼저 반응해요. 밝고 신나는 리듬과 빠른 전개에 금방 기분이 업돼요. 사람들과 함께 즐길 수 있는 순간을 특히 좋아해요. 공연장이나 페스티벌처럼 열기가 가득한 공간에서 에너지를 발산해요. 음악이 주는 즐거움을 온몸으로 느끼고 표현하는 걸 좋아해요.",
    trackId: "5EoV2HmAlkqN1XvsIjOBZZ",
    artistId: "1ZLU77nRzQIaP23mVSYpCQ",
    artistName: "Hearts2Hearts",
    recommendation:
      "무대 위에서 에너지가 폭발하는 스타일이라, 현장의 분위기를 즐기는 성향과 찰떡이에요.",
  },
  {
    mbti: "ESFJ",
    title: "다 같이 즐기는 음악이 최고!",
    description:
      "함께 들을 때 더 행복한 타입이에요. 가사나 멜로디를 같이 따라 부를 수 있는 노래를 좋아해요. 음악을 들으면 주변 사람들과 자연스럽게 공감대를 만들어요. 분위기를 따뜻하게 하고, 모두가 즐길 수 있는 곡을 찾는 데 관심이 많아요. 음악이 사람을 이어주는 순간을 소중하게 생각해요.",
    trackId: "646UF6MvpT5PbnLosjfX34",
    artistId: "7n2Ycct7Beij7Dj7meI4X0",
    artistName: "TWICE",
    recommendation:
      "따뜻하고 모두가 따라 부를 수 있는 곡이 많아, 함께 즐기는 순간을 좋아하는 성향과 잘 맞아요.",
  },
  {
    mbti: "ESTP",
    title: "무대 직캠 수집가",
    description:
      "무대를 생생하게 느낄 수 있는 순간을 좋아해요. 라이브 공연이나 직캠에서 아티스트의 표정과 움직임을 보는 걸 즐겨요. 음악 속 리듬과 에너지를 직관적으로 느끼고, 그 감정을 바로 반응으로 옮겨요. 빠른 템포와 강한 비트에 끌리는 경향이 있어요. 음악을 듣는 즉시 몰입하는 스타일이에요.",
    trackId: "2YmfV4lAjrAQvuggKCUX6m",
    artistId: "5t5FqBwTcgKTaWmfEbwQY9",
    artistName: "ENHYPEN",
    recommendation:
      "강한 비트와 화려한 퍼포먼스가 많아서, 즉각적인 몰입을 즐기는 성향과 잘 어울려요.",
  },
  {
    mbti: "ESTJ",
    title: "믿고 듣는 명곡 큐레이터",
    description:
      "검증된 곡과 완성도 높은 음악을 선호해요. 오래 들어도 질리지 않는 노래를 플레이리스트에 오랫동안 담아두는 편이에요. 처음 듣는 곡도 안정적인 구성과 깔끔한 사운드라면 금방 마음에 들어요. 음악을 들을 때 흐트러짐 없이 정돈된 느낌을 좋아해요. 꾸준히 들을 수 있는 음악에 가치를 둬요.",
    trackId: "1Yb4Wl4xXGffDPHAoYzqLb",
    artistId: "4FqmqIspLaUGtxAFFLsZxc",
    artistName: "NCT WISH",
    recommendation:
      "안정적인 실력과 탄탄한 사운드를 보여줘서, 완성도를 중시하는 성향에 잘 맞아요.",
  },
  {
    mbti: "INFP",
    title: "가사 속에 사는 감성러",
    description:
      "노래 속 가사 한 줄에 오래 머무는 편이에요. 음악을 들으면서 그 장면과 감정을 마음속에서 여러 번 되새겨요. 잔잔한 멜로디나 부드러운 보컬에 쉽게 빠져들어요. 플레이리스트를 들을 때 그날의 기분이나 날씨와 연결해서 선택해요. 음악을 통해 자신의 감정을 표현하고 위로받아요.",
    trackId: "1aKvZDoLGkNMxoRYgkckZG",
    artistId: "36cgvBn0aadzOijnjjwqMN",
    artistName: "ILLIT",
    recommendation: "",
  },
  {
    mbti: "INFJ",
    title: "고요하지만 깊은 팬심",
    description:
      "겉으로는 조용하지만 음악에 대한 애정은 깊어요. 곡의 분위기와 흐름을 천천히 느끼고, 그 안에 담긴 의미를 곱씹어요. 한 번 좋아하게 된 음악은 오래 듣는 편이에요. 가사 속 숨은 메시지를 찾아내고, 멜로디에 담긴 감정을 섬세하게 느껴요. 음악이 주는 여운을 소중히 간직해요.",
    trackId: "6qmfxmtoNEzqucF1FWeXl8",
    artistId: "7cjg7EkeZy3OI5o9Qthc6n",
    artistName: "ZEROBASEONE",
    recommendation: "",
  },
  {
    mbti: "INTP",
    title: "뮤직비디오 분석러",
    description:
      "노래뿐만 아니라 뮤직비디오와 음향 구조까지 세심하게 봐요. 음악 속 변주와 예상치 못한 전개에 흥미를 느껴요. 플레이리스트를 들을 때 곡이 가진 콘셉트나 제작 의도를 함께 생각해요. 다양한 장르를 시도하면서 새로운 패턴을 발견하는 걸 즐겨요. 음악을 분석하며 듣는 시간이 재미있어요.",
    trackId: "5eWcGfUCrVFMoYskyfkEPE",
    artistId: "7cjg7EkeZy3OI5o9Qthc6n",
    artistName: "ZEROBASEONE",
    recommendation: "",
  },
  {
    mbti: "INTJ",
    title: "셋리스트 설계의 달인",
    description:
      "음악을 들을 때 전체적인 구성과 방향성을 함께 생각해요. 앨범 안에서 곡이 어떻게 배치됐는지, 어떤 흐름으로 이어지는지를 살펴봐요. 완성도 있는 사운드와 치밀한 구성을 좋아해요. 새로운 곡을 들어도 금방 구조를 파악하고 흐름을 즐겨요. 음악을 체계적으로 감상하는 편이에요.",
    trackId: "1rqb2FCXVn2HNL1afJEnTr",
    artistId: "7cjg7EkeZy3OI5o9Qthc6n",
    artistName: "ZEROBASEONE",
    recommendation: "",
  },
  {
    mbti: "ISFP",
    title: "감성으로 물드는 밤",
    description:
      "조용한 시간에 이어폰을 끼고 음악에 몰입하는 걸 좋아해요. 멜로디와 목소리의 분위기에 집중하면서 감정을 느껴요. 듣는 순간의 공기나 빛, 감정이 오래 기억에 남아요. 부드럽고 잔잔한 곡을 들으며 마음을 가라앉혀요. 음악이 주는 편안함을 소중히 여겨요.",
    trackId: "0hfgdZKMICdgW84SUk3jfT",
    artistId: "7cjg7EkeZy3OI5o9Qthc6n",
    artistName: "ZEROBASEONE",
    recommendation: "",
  },
  {
    mbti: "ISFJ",
    title: "아티스트를 돌보는 마음",
    description:
      "음악을 들을 때 안정감과 따뜻함을 느끼는 걸 중요하게 생각해요. 밝은 멜로디나 편안한 사운드에서 위로를 받아요. 한 번 마음에 든 곡은 오랫동안 들어요. 주변 사람들과 좋은 음악을 나누며 기분 좋은 시간을 만들어요. 음악이 주는 따뜻한 기운을 좋아해요.",
    trackId: "7egcmrxRDee6C5M3AtXZ7L",
    artistId: "7cjg7EkeZy3OI5o9Qthc6n",
    artistName: "ZEROBASEONE",
    recommendation: "",
  },
  {
    mbti: "ISTP",
    title: "몰입력 갑 음악 감상러",
    description:
      "음악을 들을 때 주변에 신경 쓰지 않고 소리에 집중해요. 리듬과 비트, 편곡 같은 세부 요소를 주의 깊게 들어요. 새로운 장르나 독특한 사운드에 도전하는 걸 즐겨요. 음악을 분석하는 동시에 감각적으로 받아들이는 스타일이에요. 듣는 순간 음악 속으로 깊이 빠져들어요.",
    trackId: "5qrFeNSIrwIc0B6Elp16Dl",
    artistId: "7cjg7EkeZy3OI5o9Qthc6n",
    artistName: "ZEROBASEONE",
    recommendation: "",
  },
  {
    mbti: "ISTJ",
    title: "클래식 is the best",
    description:
      "안정적이고 완성도 높은 음악을 좋아해요. 한 번 좋아하면 오래 듣는 편이에요. 구조가 단정하고 흐름이 매끄러운 곡에 끌려요. 플레이리스트를 자주 바꾸지 않고, 익숙한 곡을 반복해서 들어요. 음악을 통해 편안함과 익숙함을 느끼는 걸 좋아해요.",
    trackId: "3BMAWsBp4jc35mCmebC3WT",
    artistId: "7cjg7EkeZy3OI5o9Qthc6n",
    artistName: "ZEROBASEONE",
    recommendation: "",
  },
];

export default results;
