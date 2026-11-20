// 1일차 알렉산드리아 상세 가이드
// 사진: Wikimedia Commons (각 사진의 저작자·라이선스 표기 포함)

export type Photo = { src: string; caption: string; credit: string; page: string }
export type Spot = {
  id: string
  name: string
  short?: string
  en: string
  ar: string
  tagline: string
  hero: Photo
  facts: { k: string; v: string }[]
  story: { title: string; body: string[] }[]
  look: { title: string; desc: string }[]
  photos: Photo[]
  tips: string[]
  kids: string[]
  quiz?: { q: string; a: string }
}

const W = 'https://thumb.wikimedia.org/wikipedia/commons/thumb'
const C = 'https://commons.wikimedia.org/wiki/File:'

export const ALEX_INTRO = {
  title: '알렉산드리아, 지중해의 진주',
  lead: '알렉산더 대왕이 세우고 클레오파트라가 다스렸던, 이집트에서 가장 "그리스·로마스러운" 도시입니다. 피라미드의 이집트와는 완전히 다른 얼굴을 첫날 만나게 됩니다.',
  hero: {
    src: `${W}/0/09/Alexandria_Corniche_at_Dusk.jpg/1280px-Alexandria_Corniche_at_Dusk.jpg`,
    caption: '해 질 녘 알렉산드리아 코니시(해안도로). 동쪽 항구를 따라 약 15km 이어집니다.',
    credit: 'Slyronit · CC BY-SA 4.0',
    page: `${C}Alexandria_Corniche_at_Dusk.jpg`,
  } as Photo,
  points: [
    { icon: '🏛', title: '개념', text: '기원전 331년 알렉산더 대왕이 세운 항구 도시. 이후 300년간 프톨레마이오스 왕조(그리스계 파라오)의 수도였습니다.' },
    { icon: '📚', title: '예시', text: '고대 세계 최대의 알렉산드리아 도서관, 7대 불가사의 파로스 등대, 클레오파트라와 카이사르·안토니우스의 이야기가 모두 이 도시에서 일어났습니다.' },
    { icon: '🧭', title: '여행자에게 의미', text: '그래서 오늘 볼 유적은 "이집트 + 그리스 + 로마"가 섞인 독특한 모습. 이 관점으로 보면 훨씬 재미있습니다.' },
  ],
  timeline: [
    { y: 'BC 331', t: '알렉산더 대왕, 도시 건설' },
    { y: 'BC 280년경', t: '파로스 등대 완공 (7대 불가사의)' },
    { y: 'BC 3세기', t: '세라피스 신전(세라페움) 건립' },
    { y: 'BC 30', t: '클레오파트라 7세 사망 → 로마 지배 시작' },
    { y: 'AD 2세기', t: '콤 엘 쇼카파 카타콤 조성' },
    { y: 'AD 298~302', t: '디오클레티아누스 기념주(폼페이우스 기둥) 건립' },
    { y: 'AD 391', t: '세라페움 파괴' },
    { y: '1303 · 1323', t: '대지진으로 파로스 등대 완전 붕괴' },
    { y: '1477~1479', t: '등대 터에 카이트베이 요새 건설' },
    { y: '1900', t: '당나귀가 구멍에 빠지며 카타콤 재발견' },
  ],
}

export const SPOTS: Spot[] = [
  {
    id: 'catacomb',
    name: '콤 엘 쇼카파 카타콤',
    short: '카타콤',
    en: 'Catacombs of Kom El Shoqafa',
    ar: 'مقابر كوم الشقافة',
    tagline: '이집트 신이 로마 갑옷을 입은, 세 문명이 섞인 지하 무덤',
    hero: {
      src: `${W}/4/46/Murals_in_the_Catacombs_of_Kom_El_Shoqafa.jpg/1280px-Murals_in_the_Catacombs_of_Kom_El_Shoqafa.jpg`,
      caption: '카타콤 내부의 채색 벽화. 이집트 신화의 장면을 그리스·로마풍 화법으로 그렸습니다.',
      credit: 'Slyronit · CC BY-SA 4.0',
      page: `${C}Murals_in_the_Catacombs_of_Kom_El_Shoqafa.jpg`,
    },
    facts: [
      { k: '뜻', v: '"도자기 파편의 언덕"' },
      { k: '시대', v: 'AD 2세기 (로마 시대)' },
      { k: '사용', v: '2~4세기 무덤으로 사용' },
      { k: '구조', v: '암반을 깎은 지하 3개 층' },
      { k: '발견', v: '1900년, 당나귀가 구멍에 빠지면서' },
      { k: '별칭', v: '중세 7대 불가사의' },
    ],
    story: [
      {
        title: '이름의 비밀: 왜 "파편 언덕"일까?',
        body: [
          '옛 사람들은 무덤에 음식과 포도주를 들고 와 고인과 함께 식사했습니다. 그런데 "죽음의 장소"에서 쓴 그릇을 집에 가져가길 꺼려 그 자리에서 깨뜨렸어요.',
          '그 깨진 토기 조각이 산처럼 쌓여서 "콤(언덕) 엘 쇼카파(파편)"라는 이름이 붙었습니다.',
        ],
      },
      {
        title: '당나귀가 찾아낸 무덤',
        body: [
          '1,500년 넘게 잊혀 있던 이 무덤은 1900년, 짐을 나르던 당나귀가 땅속 수직 통로로 빠지면서 우연히 다시 발견되었습니다.',
          '원래는 한 부유한 가문의 무덤이었으나 점차 확장되어 수백 명이 묻힌 공동묘지가 되었습니다.',
        ],
      },
      {
        title: '세 문명의 칵테일',
        body: [
          '알렉산드리아는 이집트인, 그리스인, 로마인이 함께 살던 국제도시였습니다. 그래서 무덤도 "짬뽕"입니다.',
          '몸은 이집트식으로 뻣뻣하게 서 있는데 얼굴은 그리스식으로 생생하고, 머리 모양은 로마식인 조각상이 대표적인 예입니다.',
        ],
      },
      {
        title: '카라칼라의 방 — 섬뜩한 전설',
        body: [
          '1층의 한 구역에서는 말과 사람의 뼈가 함께 발견되어 "카라칼라의 방"이라 불립니다.',
          '215년 로마 황제 카라칼라가 자신을 조롱한 알렉산드리아 청년들을 학살했다는 기록과 연결된 전설이 전해집니다.',
        ],
      },
    ],
    look: [
      { title: '① 원형 계단과 중앙 통로', desc: '가운데가 뚫린 나선형 계단. 시신을 밧줄로 이 통로에 내려보냈습니다. 위를 올려다보며 사진 한 장!' },
      { title: '② 트리클리니움 (장례 연회장)', desc: '입구 왼쪽, 돌 침상이 ㄷ자로 놓인 방. 가족이 쿠션을 깔고 누워 고인을 기리며 식사하던 곳입니다.' },
      { title: '③ 주 무덤 입구의 뱀 수호신', desc: '문 양옆의 큰 뱀(아가토다이몬). 이집트 왕관 + 그리스 지팡이 + 로마 메두사 방패를 한 몸에 가진, 이곳의 상징입니다.' },
      { title: '④ 로마 갑옷을 입은 아누비스', desc: '자칼 머리의 이집트 저승신 아누비스가 로마 군인 복장을 하고 서 있습니다. 이곳에서 가장 유명한 장면.' },
      { title: '⑤ 미라를 만드는 아누비스 부조', desc: '석관 위 벽면에 사자 모양 침대에 누운 미라와 이를 돌보는 아누비스가 새겨져 있습니다.' },
      { title: '⑥ 수백 개의 벽감(로쿨리)', desc: '복도 벽에 사물함처럼 파인 칸 하나하나가 시신을 안치하던 자리입니다.' },
    ],
    photos: [
      {
        src: `${W}/c/ca/Anubis_mummifying_a_body_in_the_Catacombs_of_Kom_El_Shoqafa.jpg/1280px-Anubis_mummifying_a_body_in_the_Catacombs_of_Kom_El_Shoqafa.jpg`,
        caption: '주 무덤 석관 위 부조: 사자 침대 위 미라와 아누비스. 순수한 이집트식 장면이지만 주변 장식은 그리스·로마풍입니다.',
        credit: 'Slyronit · CC BY-SA 4.0',
        page: `${C}Anubis_mummifying_a_body_in_the_Catacombs_of_Kom_El_Shoqafa.jpg`,
      },
      {
        src: `${W}/4/4c/Agathosdaimon_Catacombs_of_Kom_El_Shoqafa%2C_Alexandria%2C_Egypt.jpg/1280px-Agathosdaimon_Catacombs_of_Kom_El_Shoqafa%2C_Alexandria%2C_Egypt.jpg`,
        caption: '수호신 뱀 아가토다이몬. 이집트 이중왕관을 쓰고 그리스 신의 지팡이를 감고 있습니다.',
        credit: 'Carole Raddato · CC BY-SA 2.0',
        page: `${C}Agathosdaimon_Catacombs_of_Kom_El_Shoqafa,_Alexandria,_Egypt.jpg`,
      },
      {
        src: `${W}/4/45/Level_1_of_the_Catacombs_of_Kom_El_Shoqafa.jpg/1280px-Level_1_of_the_Catacombs_of_Kom_El_Shoqafa.jpg`,
        caption: '지하 1층 중앙 원형 통로(로툰다). 시신을 내려보내던 수직 통로입니다.',
        credit: 'Slyronit · CC BY-SA 4.0',
        page: `${C}Level_1_of_the_Catacombs_of_Kom_El_Shoqafa.jpg`,
      },
      {
        src: `${W}/e/ea/Stairs_of_the_Catacombs_of_Kom_El_Shoqafa.jpg/1280px-Stairs_of_the_Catacombs_of_Kom_El_Shoqafa.jpg`,
        caption: '지하로 내려가는 나선형 계단. 계단이 꽤 많으니 운동화 필수!',
        credit: 'Slyronit · CC BY-SA 4.0',
        page: `${C}Stairs_of_the_Catacombs_of_Kom_El_Shoqafa.jpg`,
      },
      {
        src: `${W}/d/da/Catacombs_of_Kom_El_Shoqafa_08.jpg/1280px-Catacombs_of_Kom_El_Shoqafa_08.jpg`,
        caption: '시신을 안치하던 벽감(로쿨리)이 줄지어 있는 복도.',
        credit: 'Slyronit · CC BY-SA 4.0',
        page: `${C}Catacombs_of_Kom_El_Shoqafa_08.jpg`,
      },
      {
        src: `${W}/4/4e/Outside_the_Catacombs_of_Kom_El_Shoqafa_12.jpg/1280px-Outside_the_Catacombs_of_Kom_El_Shoqafa_12.jpg`,
        caption: '카타콤 입구 앞 야외 정원. 주변에서 옮겨온 석관과 석재들이 전시되어 있습니다.',
        credit: 'Slyronit · CC BY-SA 4.0',
        page: `${C}Outside_the_Catacombs_of_Kom_El_Shoqafa_12.jpg`,
      },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/85/113KOM_EL_SHOQAFA_CATACOMBS.jpg/1280px-113KOM_EL_SHOQAFA_CATACOMBS.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", caption: "주 무덤 전실. 양쪽 벽에 이집트식 몸과 그리스식 얼굴을 한 부부 조각상이 서 있고, 안쪽에 석관이 보입니다.", credit: "Jerrye & Roy Klotz, MD · CC BY-SA 3.0", page: "https://commons.wikimedia.org/wiki/File:113KOM_EL_SHOQAFA_CATACOMBS.jpg" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cc/The_Tomb_from_Tigrane_Pasha_Street%2C_central_niche_with_a_mummy_lying_on_a_bed_between_the_two_deities_%28Isis_and_Nephthys%29%2C_Catacombs_of_Kom_El_Shoqafa%2C_Alexandria%2C_Egypt.jpg/1280px-thumbnail.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", caption: "\"티그란 파샤 무덤\"의 채색 벽화: 침대 위 미라와 양옆의 이시스·네프티스 여신, 위에는 날개 달린 태양. 시내에서 이곳으로 옮겨 온 무덤입니다.", credit: "Following Hadrian · CC BY-SA 2.0", page: "https://commons.wikimedia.org/wiki/File:The_Tomb_from_Tigrane_Pasha_Street,_central_niche_with_a_mummy_lying_on_a_bed_between_the_two_deities_(Isis_and_Nephthys),_Catacombs_of_Kom_El_Shoqafa,_Alexandria,_Egypt.jpg" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c4/The_Tomb_from_Tigrane_Pasha_Street%2C_male_grasping_two_palm_fronds_flanked_by_seated_jackals_and_winged_figures%2C_Catacombs_of_Kom_El_Shoqafa%2C_Alexandria%2C_Egypt.jpg/1280px-thumbnail.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", caption: "같은 무덤의 다른 벽화. 이집트 신화 장면을 그리스·로마풍 붓질로 그렸습니다.", credit: "Following Hadrian · CC BY-SA 2.0", page: "https://commons.wikimedia.org/wiki/File:The_Tomb_from_Tigrane_Pasha_Street,_male_grasping_two_palm_fronds_flanked_by_seated_jackals_and_winged_figures,_Catacombs_of_Kom_El_Shoqafa,_Alexandria,_Egypt.jpg" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e2/The_Tomb_from_Tigrane_Pasha_Street%2C_Apis_Bull_bull_from_right_wall_of_entrance%2C_Catacombs_of_Kom_El_Shoqafa%2C_Alexandria%2C_Egypt.jpg/1280px-The_Tomb_from_Tigrane_Pasha_Street%2C_Apis_Bull_bull_from_right_wall_of_entrance%2C_Catacombs_of_Kom_El_Shoqafa%2C_Alexandria%2C_Egypt.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", caption: "티그란 파샤 무덤 입구 벽의 신성한 황소 아피스 그림.", credit: "Following Hadrian · CC BY-SA 2.0", page: "https://commons.wikimedia.org/wiki/File:The_Tomb_from_Tigrane_Pasha_Street,_Apis_Bull_bull_from_right_wall_of_entrance,_Catacombs_of_Kom_El_Shoqafa,_Alexandria,_Egypt.jpg" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ea/Catacombs_de_Kom_al_Shogafa_1.jpg/1280px-Catacombs_de_Kom_al_Shogafa_1.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", caption: "원형 통로를 위에서 내려다본 모습. 바로 이 구멍으로 1900년 당나귀가 빠졌습니다!", credit: "Leon petrosyan · CC BY-SA 4.0", page: "https://commons.wikimedia.org/wiki/File:Catacombs_de_Kom_al_Shogafa_1.jpg" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/94/A_woman%27s_statue_in_the_Catacombs_of_Kom_El_Shoqafa.jpg/1280px-A_woman%27s_statue_in_the_Catacombs_of_Kom_El_Shoqafa.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", caption: "로마식 머리 모양을 한 여인 조각상 — 이집트식 자세 + 로마식 헤어스타일의 대표 예.", credit: "Slyronit · CC BY-SA 4.0", page: "https://commons.wikimedia.org/wiki/File:A_woman%27s_statue_in_the_Catacombs_of_Kom_El_Shoqafa.jpg" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d7/Catacombs_of_Kom_al-Shoqafa.jpg/1280px-Catacombs_of_Kom_al-Shoqafa.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", caption: "카타콤에서 발견된 사실적인 인물 두상. 이집트 조각과 다른 그리스·로마식 얼굴 표현입니다.", credit: "Mohamedsamah88 · CC BY-SA 4.0", page: "https://commons.wikimedia.org/wiki/File:Catacombs_of_Kom_al-Shoqafa.jpg" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e0/.....A_Roman_coffin.Catacombs_of_Kom_al_Shugafa.jpg/1280px-.....A_Roman_coffin.Catacombs_of_Kom_al_Shugafa.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", caption: "메두사 얼굴과 화환으로 장식한 로마식 석관.", credit: "Bilal Detailz · CC BY-SA 4.0", page: "https://commons.wikimedia.org/wiki/File:.....A_Roman_coffin.Catacombs_of_Kom_al_Shugafa.jpg" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/54/Catacombs_of_Kom_al_Shugafa_3.jpg/1280px-Catacombs_of_Kom_al_Shugafa_3.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", caption: "주 무덤 벽면의 이집트식 부조.", credit: "Leon petrosyan · CC BY-SA 4.0", page: "https://commons.wikimedia.org/wiki/File:Catacombs_of_Kom_al_Shugafa_3.jpg" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4b/Bones_of_The_Caracalla_Hall_CaracallA.jpg/1280px-Bones_of_The_Caracalla_Hall_CaracallA.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", caption: "\"카라칼라의 방\"에서 나온 뼈들. 말과 사람의 뼈가 함께 발견되었습니다.", credit: "Bilal Detailz · CC BY-SA 4.0", page: "https://commons.wikimedia.org/wiki/File:Bones_of_The_Caracalla_Hall_CaracallA.jpg" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ec/Catacombs_of_Kom_El_Shoqafa%2C_Alexandria%2C_Egypt_%2850851883113%29.jpg/1280px-Catacombs_of_Kom_El_Shoqafa%2C_Alexandria%2C_Egypt_%2850851883113%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", caption: "카타콤 입구. 원형 수직 통로 위에 원뿔형 지붕을 씌워 두었습니다.", credit: "Carole Raddato from FRANKFURT, Germany · CC BY-SA 2.0", page: "https://commons.wikimedia.org/wiki/File:Catacombs_of_Kom_El_Shoqafa,_Alexandria,_Egypt_(50851883113).jpg" },
    ],
    tips: [
      '계단이 가파르고 바닥이 미끄러울 수 있어요. 무릎이 약한 가족은 난간을 꼭 잡고 천천히.',
      '지하라 서늘하고 습합니다. 카메라 렌즈에 김이 서리면 잠시 기다렸다 찍으세요.',
      '가장 깊은 3층은 지하수에 잠겨 있어 보통 들어갈 수 없습니다.',
      '조명이 어두워 휴대폰 야간 모드가 유용합니다. 플래시는 벽화 보호를 위해 자제!',
      '내부 촬영 규정은 수시로 바뀌니 현장 안내를 따르세요.',
      '입구 앞 야외 정원의 석관들도 놓치지 말고 둘러보세요.',
    ],
    kids: [
      '🐍 숨은 뱀 찾기: 문 양쪽 큰 뱀이 쓴 "왕관"과 들고 있는 "지팡이"를 찾아보자!',
      '🐺 로마 군인 옷을 입은 개(자칼) 머리 신을 먼저 찾는 사람이 승리!',
      '🫏 "이 무덤을 처음 발견한 건 누구?" — 정답: 당나귀!',
    ],
    quiz: { q: '이곳 이름 "쇼카파"는 무엇을 뜻할까요?', a: '깨진 도자기 파편! 성묘객들이 쓴 그릇을 깨뜨려 버린 것이 언덕처럼 쌓였답니다.' },
  },
  {
    id: 'pillar',
    name: '폼페이우스 기둥',
    en: "Pompey's Pillar",
    ar: 'عمود السواري',
    tagline: '이름은 폼페이우스, 주인공은 디오클레티아누스 — 오해가 낳은 거대 기둥',
    hero: {
      src: `${W}/e/e6/Pompey%27s_Pillar_Alexandria.jpg/1280px-Pompey%27s_Pillar_Alexandria.jpg`,
      caption: '폼페이우스 기둥과 양옆의 스핑크스. 옛 세라피스 신전 언덕 위에 서 있습니다.',
      credit: 'Ahmed Yousry Mahfouz · CC BY-SA 4.0',
      page: `${C}Pompey%27s_Pillar_Alexandria.jpg`,
    },
    facts: [
      { k: '높이', v: '26.85m (아파트 약 9층)' },
      { k: '기둥 몸통', v: '통돌 1개, 20.46m' },
      { k: '무게', v: '약 285톤' },
      { k: '재료', v: '아스완산 붉은 화강암' },
      { k: '건립', v: 'AD 298~302년' },
      { k: '현지 이름', v: '아무드 엘 사와리' },
    ],
    story: [
      {
        title: '사실 폼페이우스와는 상관없다!',
        body: [
          '로마 장군 폼페이우스는 기원전 48년 이집트에서 살해당했지만, 이 기둥은 그보다 약 350년 뒤에 세워졌습니다.',
          '받침대에 새겨진 그리스어 비문의 "푸블리오스(Publius, 기둥을 바친 이집트 총독)"를 중세 유럽 여행자들이 "폼페이오스"로 잘못 읽으면서 이름이 굳어졌어요.',
        ],
      },
      {
        title: '진짜 주인공: 디오클레티아누스 황제',
        body: [
          '297년 알렉산드리아에서 반란이 일어나자 로마 황제 디오클레티아누스가 긴 포위 끝에 도시를 되찾았습니다.',
          '이후 황제가 도시에 곡물을 나눠주자 총독이 감사의 뜻으로 이 기둥을 세웠고, 꼭대기에는 갑옷 입은 황제의 거대 석상(약 7m)이 있었다고 합니다.',
        ],
      },
      {
        title: '사라진 세라페움과 "딸 도서관"',
        body: [
          '기둥이 선 언덕은 원래 그리스·이집트 혼합 신 세라피스를 모신 거대한 신전, 세라페움이 있던 자리입니다.',
          '이곳에는 알렉산드리아 대도서관의 분관("딸 도서관")이 있었다고 전해지며, 391년 파괴되었습니다. 언덕 아래 남아 있는 지하 회랑이 그 흔적입니다.',
        ],
      },
      {
        title: '알렉산드리아에서 유일하게 "제자리"에 남은 고대 기념물',
        body: [
          '수많은 지진과 전쟁 속에서도 원래 위치에 그대로 서 있는 유일한 고대 기념물입니다.',
          '조각을 이어 붙이지 않은 통돌 기둥 가운데 세계에서 가장 큰 것 중 하나로, 1,000km 떨어진 아스완에서 나일강으로 운반해 왔습니다.',
        ],
      },
    ],
    look: [
      { title: '① 기둥 몸통', desc: '이음매가 없는 통돌인지 직접 확인해 보세요. 3일차에 갈 아스완 채석장 출신입니다.' },
      { title: '② 코린트식 기둥머리', desc: '꼭대기의 잎사귀 장식. 여기에 황제 석상이 서 있었습니다.' },
      { title: '③ 화강암 스핑크스 한 쌍', desc: '기둥 옆을 지키는 프톨레마이오스 시대 스핑크스. 2일차 기자의 대스핑크스와 비교해 보세요.' },
      { title: '④ 세라페움 유적과 지하 회랑', desc: '언덕 곳곳의 유적, 그리고 도서관 흔적으로 알려진 지하 통로(개방 여부는 현장 상황에 따라 다름).' },
      { title: '⑤ 받침대의 그리스어 비문', desc: '"폼페이우스" 오해를 만든 바로 그 글자. 기둥 서쪽 받침대에서 찾아보세요.' },
    ],
    photos: [
      {
        src: `${W}/7/76/Sphinxes_at_the_Serapeum_of_Alexandria_%28II%29.jpg/1280px-Sphinxes_at_the_Serapeum_of_Alexandria_%28II%29.jpg`,
        caption: '세라페움 언덕의 화강암 스핑크스. 기자의 대스핑크스보다 훨씬 작지만 표정이 또렷합니다.',
        credit: 'Institute for the Study of the Ancient World · CC BY 2.0',
        page: `${C}Sphinxes_at_the_Serapeum_of_Alexandria_(II).jpg`,
      },
      {
        src: `${W}/f/f2/Roman_Pompey%27s_Pillar%2C_Alexandria_-_panoramio.jpg/1280px-Roman_Pompey%27s_Pillar%2C_Alexandria_-_panoramio.jpg`,
        caption: '기둥 아래 펼쳐진 세라페움 신전 터. 지금은 기초와 일부 유적만 남아 있습니다.',
        credit: 'Maris Teteris · CC BY 3.0',
        page: `${C}Roman_Pompey%27s_Pillar,_Alexandria_-_panoramio.jpg`,
      },
      {
        src: `${W}/0/07/Pompey%E2%80%99s_Column%2C_Alexandri_-_MET_DP-13897-113.jpg/1280px-Pompey%E2%80%99s_Column%2C_Alexandri_-_MET_DP-13897-113.jpg`,
        caption: '1840년대 초 프랑스 사진가 지로 드 프랑제가 찍은 기둥 — 초창기 사진 기술로 남긴 귀한 기록입니다.',
        credit: 'Joseph-Philibert Girault de Prangey · The Met · CC0',
        page: `${C}Pompey%E2%80%99s_Column,_Alexandri_-_MET_DP-13897-113.jpg`,
      },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/52/Pompey%27s_Pillar_with_Sphinx.jpg/1280px-Pompey%27s_Pillar_with_Sphinx.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", caption: "기둥과 스핑크스를 함께 담은 정면 모습. 기둥 높이가 스핑크스의 약 10배입니다.", credit: "Shivani Singh04 · CC BY-SA 4.0", page: "https://commons.wikimedia.org/wiki/File:Pompey%27s_Pillar_with_Sphinx.jpg" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/49/Diocletian_column.jpg/1280px-Diocletian_column.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", caption: "기둥 받침대 부분. 이 받침대에 \"폼페이우스\" 오해를 만든 그리스어 비문이 있습니다.", credit: "Ahmed Yousry Mahfouz · CC BY-SA 4.0", page: "https://commons.wikimedia.org/wiki/File:Diocletian_column.jpg" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0a/Sphinx_in_Pompey%27s_Pillar_area.jpg/1280px-Sphinx_in_Pompey%27s_Pillar_area.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", caption: "기둥 옆의 화강암 스핑크스 클로즈업.", credit: "Ahmed Yousry Mahfouz · CC BY-SA 4.0", page: "https://commons.wikimedia.org/wiki/File:Sphinx_in_Pompey%27s_Pillar_area.jpg" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/17/%D8%B9%D9%85%D9%88%D8%AF_%D8%A7%D9%84%D8%B3%D9%88%D8%A7%D8%B1%D9%8A_2016_03.jpg/1280px-%D8%B9%D9%85%D9%88%D8%AF_%D8%A7%D9%84%D8%B3%D9%88%D8%A7%D8%B1%D9%8A_2016_03.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", caption: "세라페움 언덕에 흩어져 있는 석재와 쓰러진 기둥 조각들.", credit: "Fawzi.Ali.Ahmed · CC BY-SA 4.0", page: "https://commons.wikimedia.org/wiki/File:%D8%B9%D9%85%D9%88%D8%AF_%D8%A7%D9%84%D8%B3%D9%88%D8%A7%D8%B1%D9%8A_2016_03.jpg" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bb/Pompey%27s_Pillar_%28Archaeological_site_in_Alexandria_in_2017%29_%2C_photo_by_Hatem_Moushir_18.jpg/1280px-Pompey%27s_Pillar_%28Archaeological_site_in_Alexandria_in_2017%29_%2C_photo_by_Hatem_Moushir_18.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", caption: "유적지 너머로 보이는 현대 알렉산드리아의 아파트들 — 고대와 현대가 붙어 있는 도시.", credit: "Hatem Moushir · CC BY-SA 4.0", page: "https://commons.wikimedia.org/wiki/File:Pompey%27s_Pillar_(Archaeological_site_in_Alexandria_in_2017)_,_photo_by_Hatem_Moushir_18.jpg" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e1/%D0%A1%D1%80%D0%B0%D0%B2%D0%BD%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F_%D0%B2%D1%8B%D1%81%D0%BE%D1%82%D0%B0_%D0%BA%D0%BE%D0%BB%D0%BE%D0%BD%D0%BD_%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D0%B0_I%2C_%D0%9D%D0%B0%D0%BF%D0%BE%D0%BB%D0%B5%D0%BE%D0%BD%D0%B0%2C_%D0%A2%D1%80%D0%B0%D1%8F%D0%BD%D0%B0%2C_%D0%9F%D0%BE%D0%BC%D0%BF%D0%B5%D1%8F_%D0%B8_%D0%90%D0%BD%D1%82%D0%BE%D0%BD%D0%B8%D0%BD%D0%B0%2C1836%D0%B3_%D0%93%D0%98%D0%9C.jpg/1280px-thumbnail.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", caption: "1836년 판화: 세계의 유명 기념주 높이 비교 (알렉산드르 기둥, 방돔 기둥, 트라야누스 기둥, 폼페이우스 기둥, 안토니누스 기둥).", credit: "Müller G. · Public domain", page: "https://commons.wikimedia.org/wiki/File:%D0%A1%D1%80%D0%B0%D0%B2%D0%BD%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F_%D0%B2%D1%8B%D1%81%D0%BE%D1%82%D0%B0_%D0%BA%D0%BE%D0%BB%D0%BE%D0%BD%D0%BD_%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D0%B0_I,_%D0%9D%D0%B0%D0%BF%D0%BE%D0%BB%D0%B5%D0%BE%D0%BD%D0%B0,_%D0%A2%D1%80%D0%B0%D1%8F%D0%BD%D0%B0,_%D0%9F%D0%BE%D0%BC%D0%BF%D0%B5%D1%8F_%D0%B8_%D0%90%D0%BD%D1%82%D0%BE%D0%BD%D0%B8%D0%BD%D0%B0,1836%D0%B3_%D0%93%D0%98%D0%9C.jpg" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dd/Egypt%2C_Pompey%27s_Pillar%2C_Alexandria_%281%29.jpg/1280px-Egypt%2C_Pompey%27s_Pillar%2C_Alexandria_%281%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", caption: "옛 유리 슬라이드에 손으로 색을 입힌 기둥 사진 (브루클린 박물관 소장).", credit: "Brooklyn Museum · No restrictions", page: "https://commons.wikimedia.org/wiki/File:Egypt,_Pompey%27s_Pillar,_Alexandria_(1).jpg" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/de/Alexandrie._Colonne_de_Pomp%C3%A9e_-_btv1b101149075_%281_of_2%29.jpg/1280px-Alexandrie._Colonne_de_Pomp%C3%A9e_-_btv1b101149075_%281_of_2%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", caption: "20세기 초 프랑스어 엽서 \"폼페이우스 기둥\". 그때도 알렉산드리아 대표 명소였습니다.", credit: "Unknown · Public domain", page: "https://commons.wikimedia.org/wiki/File:Alexandrie._Colonne_de_Pomp%C3%A9e_-_btv1b101149075_(1_of_2).jpg" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c0/Illustration_by_David_Roberts%2C_digitally_enhanced_by_rawpixel-com_3.jpg/1280px-Illustration_by_David_Roberts%2C_digitally_enhanced_by_rawpixel-com_3.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", caption: "19세기 화가 데이비드 로버츠의 그림 속 폼페이우스 기둥.", credit: "Rawpixel · CC BY-SA 4.0", page: "https://commons.wikimedia.org/wiki/File:Illustration_by_David_Roberts,_digitally_enhanced_by_rawpixel-com_3.jpg" },
    ],
    tips: [
      '그늘이 거의 없는 언덕이라 모자·선글라스 필수. 관람 시간은 비교적 짧습니다.',
      '기둥 전체를 담으려면 스핑크스 뒤쪽으로 멀리 물러나 세로로 찍으세요. 사람을 앞에 세우면 크기가 실감 나요.',
      '바닥이 울퉁불퉁한 돌과 흙이라 발목 조심.',
      '주변에서 사진 찍어주겠다는 사람에게는 팁 요구가 따를 수 있어요. 필요 없으면 "라 슈크란".',
      '3일차 아스완의 미완성 오벨리스크를 보면 "이런 돌을 어떻게 캤는지" 연결되어 더 재미있습니다.',
    ],
    kids: [
      '📏 기둥 높이 26.85m는 아파트 약 9층! 가족이 손잡고 기둥 둘레를 재보자 (지름 2.7m라 둘레는 약 8.5m).',
      '🕵️ "이름이 틀린 기둥" — 진짜 주인공이 누구인지 맞혀보기.',
      '🦁 스핑크스는 몸은 사자, 머리는 사람! 오늘 본 스핑크스와 내일 볼 대스핑크스의 크기를 비교해 보자.',
    ],
    quiz: { q: '이 기둥은 어디에서 캐 온 돌로 만들었을까요?', a: '약 1,000km 남쪽 아스완! 3일차에 그 채석장(미완성 오벨리스크)을 직접 가요.' },
  },
  {
    id: 'qaitbay',
    name: '카이트베이 요새',
    en: 'Citadel of Qaitbay',
    ar: 'قلعة قايتباي',
    tagline: '7대 불가사의 파로스 등대가 서 있던 바로 그 자리',
    hero: {
      src: `${W}/7/7a/Citadel_of_Qaitbay%2C_Alexandria%2C_Egypt.jpg/1280px-Citadel_of_Qaitbay%2C_Alexandria%2C_Egypt.jpg`,
      caption: '카이트베이 요새 정면. 이번 일정은 외관 관람입니다.',
      credit: 'Vyacheslav Argenberg · CC BY 2.0',
      page: `${C}Citadel_of_Qaitbay,_Alexandria,_Egypt.jpg`,
    },
    facts: [
      { k: '건설', v: '1477~1479년 (약 2년)' },
      { k: '건설자', v: '맘루크 술탄 카이트베이' },
      { k: '목적', v: '오스만 제국 해상 방어' },
      { k: '위치', v: '옛 파로스섬 동쪽 끝, 동항 입구' },
      { k: '자리', v: '파로스 등대 터' },
      { k: '관람', v: '외관만 (내부 미포함)' },
    ],
    story: [
      {
        title: '사라진 불가사의, 파로스 등대',
        body: [
          '기원전 280년경 프톨레마이오스 왕조가 세운 파로스 등대는 높이가 100m를 넘었던 것으로 추정되는 고대 세계 7대 불가사의 중 하나입니다.',
          '밤에는 불을 피우고 낮에는 거울로 햇빛을 반사해 멀리서도 항구를 찾을 수 있게 했다고 전해집니다.',
          '"파로스"라는 이름은 지금도 프랑스어 phare, 이탈리아·스페인어 faro처럼 "등대"라는 단어로 남아 있습니다.',
        ],
      },
      {
        title: '지진으로 무너지고, 요새로 다시 태어나다',
        body: [
          '등대는 1,500년 넘게 버텼지만 1303년과 1323년의 대지진으로 완전히 무너졌습니다.',
          '약 150년 뒤 술탄 카이트베이가 그 터에 요새를 쌓았는데, 무너진 등대의 돌 일부를 재활용한 것으로 알려져 있습니다. 즉, 요새 벽 어딘가에 불가사의의 조각이 박혀 있는 셈이죠.',
        ],
      },
      {
        title: '포격과 복원',
        body: [
          '요새는 맘루크·오스만 시대 내내 알렉산드리아를 지켰지만, 1882년 영국 해군의 알렉산드리아 포격 때 큰 피해를 입었습니다.',
          '20세기 들어 여러 차례 복원되어 지금은 알렉산드리아를 대표하는 풍경이 되었습니다.',
        ],
      },
      {
        title: '바다 밑에 잠든 등대',
        body: [
          '1990년대 이후 요새 앞바다에서 등대의 잔해로 보이는 거대 석재와 조각상들이 수중 발굴되었습니다.',
          '눈앞의 푸른 바다 아래에 불가사의의 흔적이 잠들어 있다고 생각하며 바라보세요.',
        ],
      },
    ],
    look: [
      { title: '① 정면 성채와 4개의 둥근 탑', desc: '네모난 중앙 성채 모서리의 원통형 탑. 맘루크 군사 건축의 전형입니다.' },
      { title: '② 아치형 성문', desc: '성문 아치 안에 요새를 액자처럼 넣어 찍는 것이 인기 구도입니다.' },
      { title: '③ 방파제와 지중해', desc: '요새 옆 방파제에서 바라보는 지중해. 날씨가 좋으면 물빛이 에메랄드색이에요.' },
      { title: '④ 동항의 알록달록 어선', desc: '요새에서 코니시 쪽으로 보이는 항구의 파랑·노랑 어선들.' },
      { title: '⑤ 코니시 전경', desc: '반달 모양으로 휘어진 해안도로와 유럽풍 건물들. 알렉산드리아가 "지중해의 신부"라 불리는 이유입니다.' },
    ],
    photos: [
      {
        src: `${W}/c/cc/Pharos_of_Alexandria%2C_reconstruction_2021.jpg/1280px-Pharos_of_Alexandria%2C_reconstruction_2021.jpg`,
        caption: '파로스 등대 복원 상상도. 지금의 요새 자리에 이런 등대가 서 있었습니다.',
        credit: 'Віщун · CC BY-SA 4.0',
        page: `${C}Pharos_of_Alexandria,_reconstruction_2021.jpg`,
      },
      {
        src: `${W}/b/bd/Citadel_of_Qaitbay_alexandria.jpg/1280px-Citadel_of_Qaitbay_alexandria.jpg`,
        caption: '아치 성문 너머로 보이는 요새 — 가족사진 명당 구도.',
        credit: 'Aya Mahmoud Naguib Ibrahim · CC BY-SA 4.0',
        page: `${C}Citadel_of_Qaitbay_alexandria.jpg`,
      },
      {
        src: `${W}/b/bd/A_view_of_Alexandria_from_the_Citadel_of_Qaitbay.jpg/1280px-A_view_of_Alexandria_from_the_Citadel_of_Qaitbay.jpg`,
        caption: '요새 쪽에서 바라본 방파제와 알렉산드리아 시내.',
        credit: 'Slyronit · CC BY-SA 4.0',
        page: `${C}A_view_of_Alexandria_from_the_Citadel_of_Qaitbay.jpg`,
      },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/34/Front_View_of_Citadel_of_Qaitbay_in_Alexandria_%D9%85%D9%86%D8%B8%D8%B1_%D8%A3%D9%85%D8%A7%D9%85%D9%89_%D9%84%D9%82%D9%84%D8%B9%D8%A9_%D9%82%D8%A7%D9%8A%D8%AA%D8%A8%D8%A7%D9%89_%D8%A8%D8%A7%D9%84%D8%A5%D8%B3%D9%83%D9%86%D8%AF%D8%B1%D9%8A%D8%A9.jpg/1280px-Front_View_of_Citadel_of_Qaitbay_in_Alexandria_%D9%85%D9%86%D8%B8%D8%B1_%D8%A3%D9%85%D8%A7%D9%85%D9%89_%D9%84%D9%82%D9%84%D8%B9%D8%A9_%D9%82%D8%A7%D9%8A%D8%AA%D8%A8%D8%A7%D9%89_%D8%A8%D8%A7%D9%84%D8%A5%D8%B3%D9%83%D9%86%D8%AF%D8%B1%D9%8A%D8%A9.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", caption: "파란 하늘 아래 요새 정면 — 가족사진 기본 구도.", credit: "Michaelfawzy · CC BY-SA 4.0", page: "https://commons.wikimedia.org/wiki/File:Front_View_of_Citadel_of_Qaitbay_in_Alexandria_%D9%85%D9%86%D8%B8%D8%B1_%D8%A3%D9%85%D8%A7%D9%85%D9%89_%D9%84%D9%82%D9%84%D8%B9%D8%A9_%D9%82%D8%A7%D9%8A%D8%AA%D8%A8%D8%A7%D9%89_%D8%A8%D8%A7%D9%84%D8%A5%D8%B3%D9%83%D9%86%D8%AF%D8%B1%D9%8A%D8%A9.jpg" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4d/%D9%82%D9%84%D8%B9%D8%A9_%D9%82%D8%A7%D9%8A%D8%AA%D8%A8%D8%A7%D9%8A_%D8%A8%D8%A7%D9%84%D8%A7%D8%B3%D9%83%D9%86%D8%AF%D8%B1%D9%8A%D8%A9_%D8%B9%D8%B1%D9%88%D8%B3_%D8%A7%D9%84%D8%A8%D8%AD%D8%B1_%D8%A7%D9%84%D8%A7%D8%A8%D9%8A%D8%B6.JPG/1280px-%D9%82%D9%84%D8%B9%D8%A9_%D9%82%D8%A7%D9%8A%D8%AA%D8%A8%D8%A7%D9%8A_%D8%A8%D8%A7%D9%84%D8%A7%D8%B3%D9%83%D9%86%D8%AF%D8%B1%D9%8A%D8%A9_%D8%B9%D8%B1%D9%88%D8%B3_%D8%A7%D9%84%D8%A8%D8%AD%D8%B1_%D8%A7%D9%84%D8%A7%D8%A8%D9%8A%D8%B6.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", caption: "옆에서 본 요새. 중앙 성채와 둥근 모서리 탑이 잘 보입니다.", credit: "Ahmed arhab · CC BY-SA 3.0", page: "https://commons.wikimedia.org/wiki/File:%D9%82%D9%84%D8%B9%D8%A9_%D9%82%D8%A7%D9%8A%D8%AA%D8%A8%D8%A7%D9%8A_%D8%A8%D8%A7%D9%84%D8%A7%D8%B3%D9%83%D9%86%D8%AF%D8%B1%D9%8A%D8%A9_%D8%B9%D8%B1%D9%88%D8%B3_%D8%A7%D9%84%D8%A8%D8%AD%D8%B1_%D8%A7%D9%84%D8%A7%D8%A8%D9%8A%D8%B6.JPG" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/94/Citadel_of_Qaitbay_086.JPG/1280px-Citadel_of_Qaitbay_086.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", caption: "이집트 국기가 휘날리는 둥근 탑.", credit: "لا روسا · CC BY-SA 3.0", page: "https://commons.wikimedia.org/wiki/File:Citadel_of_Qaitbay_086.JPG" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/31/Qaitbay_Citadel_Nameplate.jpg/1280px-Qaitbay_Citadel_Nameplate.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", caption: "입구 명판: \"카이트베이 요새, 술탄 카이트베이가 세움, 히즈라력 882년 – 서기 1477년\".", credit: "Leonard J. DeFrancisci · CC BY-SA 3.0", page: "https://commons.wikimedia.org/wiki/File:Qaitbay_Citadel_Nameplate.jpg" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3d/Castillo_de_Caitbai_%D9%82%D9%84%D8%B9%D8%A9_%D9%82%D8%A7%D9%8A%D8%AA%D8%A8%D8%A7%D9%8A.jpg/1280px-Castillo_de_Caitbai_%D9%82%D9%84%D8%B9%D8%A9_%D9%82%D8%A7%D9%8A%D8%AA%D8%A8%D8%A7%D9%8A.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", caption: "바다 쪽에서 본 요새. 옛 파로스섬 끝에 바다를 향해 서 있습니다.", credit: "Said Abdunur Pedraza · CC BY-SA 3.0", page: "https://commons.wikimedia.org/wiki/File:Castillo_de_Caitbai_%D9%82%D9%84%D8%B9%D8%A9_%D9%82%D8%A7%D9%8A%D8%AA%D8%A8%D8%A7%D9%8A.jpg" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7f/%D9%82%D9%84%D8%B9%D8%A9_%D9%82%D8%A7%D9%8A%D8%A8%D8%A7%D9%89_..%D8%A7%D9%84%D8%A7%D8%B3%D9%83%D9%86%D8%AF%D8%A7%D8%B1%D9%8A%D8%A9_%D9%85%D9%86%D8%B7%D9%82%D8%A9_%D8%A8%D8%AD%D8%B1%D9%8A.jpg/1280px-%D9%82%D9%84%D8%B9%D8%A9_%D9%82%D8%A7%D9%8A%D8%A8%D8%A7%D9%89_..%D8%A7%D9%84%D8%A7%D8%B3%D9%83%D9%86%D8%AF%D8%A7%D8%B1%D9%8A%D8%A9_%D9%85%D9%86%D8%B7%D9%82%D8%A9_%D8%A8%D8%AD%D8%B1%D9%8A.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", caption: "동항의 알록달록한 어선들과 멀리 보이는 요새.", credit: "Mahmoud algazzar · CC BY-SA 4.0", page: "https://commons.wikimedia.org/wiki/File:%D9%82%D9%84%D8%B9%D8%A9_%D9%82%D8%A7%D9%8A%D8%A8%D8%A7%D9%89_..%D8%A7%D9%84%D8%A7%D8%B3%D9%83%D9%86%D8%AF%D8%A7%D8%B1%D9%8A%D8%A9_%D9%85%D9%86%D8%B7%D9%82%D8%A9_%D8%A8%D8%AD%D8%B1%D9%8A.jpg" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b6/Citadel_of_qaitbay_inside_%26_outside_view_41.JPG/1280px-Citadel_of_qaitbay_inside_%26_outside_view_41.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", caption: "요새 옆 해변과 방파제. 바닷바람이 강하니 겉옷 필수!", credit: "Ahmed Younis Sif Saad · CC BY-SA 4.0", page: "https://commons.wikimedia.org/wiki/File:Citadel_of_qaitbay_inside_%26_outside_view_41.JPG" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e6/Qaitbay_citadel_in_Alexandria_02.jpg/1280px-Qaitbay_citadel_in_Alexandria_02.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", caption: "밤에 조명을 받은 요새.", credit: "Aimty17 · CC0", page: "https://commons.wikimedia.org/wiki/File:Qaitbay_citadel_in_Alexandria_02.jpg" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/62/AAA3297.jpg/1280px-AAA3297.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", caption: "요새 앞 산책로의 노점상. 간식과 음료를 팝니다.", credit: "Walaa shabeb · CC BY-SA 4.0", page: "https://commons.wikimedia.org/wiki/File:AAA3297.jpg" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a0/Wiki_Alex_Trip-28.jpg/1280px-Wiki_Alex_Trip-28.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", caption: "요새 앞 솜사탕·풍선 장수 — 아이들이 좋아하는 풍경.", credit: "Wael Mostafa El Sisi · CC BY-SA 4.0", page: "https://commons.wikimedia.org/wiki/File:Wiki_Alex_Trip-28.jpg" },
    ],
    tips: [
      '이번 일정은 외관 관람이라 시간이 짧을 수 있어요. 도착하면 사진부터!',
      '방파제 쪽은 바닷바람이 강해 체감온도가 낮습니다. 바람막이를 꼭 입으세요. 11월부터는 가끔 비도 옵니다.',
      '파도가 방파제를 넘을 수 있으니 아이들은 바다 쪽 가장자리에 가까이 가지 않게 해주세요.',
      '오후 늦게 도착하면 요새가 햇빛에 금빛으로 물들어 사진이 잘 나옵니다.',
      '요새 주변에는 간식·기념품 상인과 호객꾼이 많습니다. 사고 싶으면 가격부터 확인.',
      '버스로 코니시를 지나갈 때 바다 쪽 창가에 앉으면 현대식 도서관 "비블리오테카 알렉산드리나"가 보일 수 있어요.',
    ],
    kids: [
      '🔦 "여기 원래 무엇이 있었을까?" — 정답: 세계 7대 불가사의 파로스 등대!',
      '🏰 요새의 둥근 탑 개수 세어보기.',
      '🌊 "등대"를 프랑스어로 phare(파르), 이탈리아어로 faro(파로)라고 하는 건 바로 이곳 이름 때문!',
    ],
    quiz: { q: '파로스 등대는 왜 사라졌을까요?', a: '1303년과 1323년의 큰 지진 때문! 그 돌 일부가 지금 요새 벽에 쓰였다고 해요.' },
  },
]

export const ALEX_DAY_TIPS = [
  { icon: '🕐', title: '예상 흐름', text: '12:20 도착 → 입국·비자 → 카타콤 → 폼페이우스 기둥 → 카이트베이 요새 → 카이로 이동(약 2시간 30분). 순서는 현지 사정에 따라 바뀔 수 있어요.' },
  { icon: '💵', title: '비자 현금', text: '도착비자(스티커) 1인 US$36. 가족 수만큼 미리 봉투에 따로 준비하세요.' },
  { icon: '😴', title: '체력 관리', text: '밤 비행기로 와서 바로 관광합니다. 도하 경유 중 최대한 쉬고, 버스 이동 시간에 틈틈이 자 두세요.' },
  { icon: '🧥', title: '옷차림', text: '지중해 도시라 카이로보다 선선하고 바람이 셉니다. 바람막이 + 운동화 + 모자.' },
  { icon: '🚻', title: '화장실', text: '공항과 관광지 매표소 근처 화장실을 이용하세요. 휴지와 소액권($1)을 챙기세요.' },
  { icon: '📸', title: '사진 포인트', text: '카타콤 원형 계단 위 · 폼페이우스 기둥과 스핑크스 · 카이트베이 아치 성문 · 방파제와 바다.' },
]
