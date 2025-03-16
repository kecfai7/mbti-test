// MBTI 테스트 질문 배열
const questions = [
    // E vs I (외향 vs 내향) - 12개 질문
    {
        text: "친구들과 함께 있을 때 나는 에너지가 넘치는 편이다.",
        type: "E"
    },
    {
        text: "혼자서 조용히 시간을 보내는 것을 좋아한다.",
        type: "I"
    },
    {
        text: "새로운 사람들을 만나는 자리에서 먼저 대화를 시작하는 편이다.",
        type: "E"
    },
    {
        text: "많은 사람들과 어울리는 것보다 소수의 친한 친구들과 깊은 대화를 나누는 것이 좋다.",
        type: "I"
    },
    {
        text: "모임에서 여러 사람들과 두루두루 이야기하는 것이 즐겁다.",
        type: "E"
    },
    {
        text: "사람이 많은 곳에 오래 있으면 지치고 혼자만의 시간이 필요하다.",
        type: "I"
    },
    // E vs I 크로스 체크 질문 추가
    {
        text: "학교 프로젝트에서 팀 활동보다 개인 과제를 선호한다.",
        type: "I"
    },
    {
        text: "수업 시간에 발표하는 것을 자원해서 하는 편이다.",
        type: "E"
    },
    {
        text: "친구들 사이에서 분위기를 이끌어가는 역할을 자주 맡는다.",
        type: "E"
    },
    {
        text: "새로운 환경에 적응하기 위해 시간이 필요하다.",
        type: "I"
    },
    {
        text: "대화할 때 다른 사람의 말을 듣기보다 내가 말하는 것을 더 좋아한다.",
        type: "E"
    },
    {
        text: "여러 활동에 참여하기보다 한 가지 활동에 깊이 몰입하는 것을 선호한다.",
        type: "I"
    },
    
    // S vs N (감각 vs 직관) - 12개 질문
    {
        text: "나는 현실적이고 구체적인 것을 좋아한다.",
        type: "S"
    },
    {
        text: "나는 상상하고 미래를 생각하는 것을 좋아한다.",
        type: "N"
    },
    {
        text: "세부 사항에 집중하고 정확한 정보를 중요시한다.",
        type: "S"
    },
    {
        text: "전체적인 그림을 보고 가능성과 패턴을 찾는 것을 좋아한다.",
        type: "N"
    },
    {
        text: "실제로 경험할 수 있는 것에 관심이 많다.",
        type: "S"
    },
    {
        text: "새롭고 독창적인 아이디어를 생각해내는 것을 좋아한다.",
        type: "N"
    },
    // S vs N 크로스 체크 질문 추가
    {
        text: "책을 읽을 때 사실적인 내용보다 상상력이 풍부한 이야기를 선호한다.",
        type: "N"
    },
    {
        text: "문제를 해결할 때 이미 검증된 방법을 사용하는 것이 편하다.",
        type: "S"
    },
    {
        text: "친구들이 '너무 현실에서 벗어난 생각을 한다'고 말할 때가 있다.",
        type: "N"
    },
    {
        text: "수업 시간에 배운 내용을 실생활에 어떻게 적용할 수 있는지 생각한다.",
        type: "S"
    },
    {
        text: "새로운 아이디어를 떠올리는 것보다 실제로 경험해본 것에 의존하는 편이다.",
        type: "S"
    },
    {
        text: "미래에 일어날 수 있는 가능성에 대해 생각하는 것을 즐긴다.",
        type: "N"
    },
    
    // T vs F (사고 vs 감정) - 12개 질문
    {
        text: "결정을 내릴 때 논리적으로 생각하는 편이다.",
        type: "T"
    },
    {
        text: "다른 사람의 감정을 잘 이해하고 공감한다.",
        type: "F"
    },
    {
        text: "감정보다는 사실과 원칙에 따라 판단하는 것이 중요하다.",
        type: "T"
    },
    {
        text: "다른 사람들의 기분을 상하게 하지 않도록 배려하는 편이다.",
        type: "F"
    },
    {
        text: "토론할 때 객관적인 사실과 논리를 중요시한다.",
        type: "T"
    },
    {
        text: "갈등 상황에서 모두가 만족할 수 있는 해결책을 찾으려고 노력한다.",
        type: "F"
    },
    // T vs F 크로스 체크 질문 추가
    {
        text: "친구가 힘들어할 때 해결책보다 공감을 먼저 표현한다.",
        type: "F"
    },
    {
        text: "친구와 의견 충돌이 있을 때 객관적인 사실에 근거해 논쟁한다.",
        type: "T"
    },
    {
        text: "친구의 감정이 상할 것 같으면 진실을 말하기보다 배려하는 편이다.",
        type: "F"
    },
    {
        text: "문제 해결 시 감정보다 효율성을 우선시한다.",
        type: "T"
    },
    {
        text: "다른 사람들이 나를 논리적이지만 때로는 냉정하다고 느낄 때가 있다.",
        type: "T"
    },
    {
        text: "팀 프로젝트에서 팀원들의 의견과 감정을 고려하는 것이 중요하다.",
        type: "F"
    },
    
    // J vs P (판단 vs 인식) - 12개 질문
    {
        text: "계획을 세우고 그대로 실행하는 것이 좋다.",
        type: "J"
    },
    {
        text: "계획보다는 상황에 따라 유연하게 대처하는 것이 좋다.",
        type: "P"
    },
    {
        text: "일을 시작하기 전에 미리 준비하고 계획하는 것을 좋아한다.",
        type: "J"
    },
    {
        text: "마감 시간이 다가와야 일에 집중하게 되는 편이다.",
        type: "P"
    },
    {
        text: "정해진 일정과 규칙적인 생활이 편안하다.",
        type: "J"
    },
    {
        text: "갑작스러운 변화나 새로운 가능성에 쉽게 적응한다.",
        type: "P"
    },
    // J vs P 크로스 체크 질문 추가
    {
        text: "과제는 마감일보다 일찍 끝내는 것을 선호한다.",
        type: "J"
    },
    {
        text: "시험 공부를 할 때 마지막 순간까지 미루는 경향이 있다.",
        type: "P"
    },
    {
        text: "방 정리를 규칙적으로 하는 편이다.",
        type: "J"
    },
    {
        text: "갑작스러운 일정 변경에도 쉽게 적응한다.",
        type: "P"
    },
    {
        text: "여행을 갈 때 세부 일정을 미리 계획하는 것이 중요하다.",
        type: "J"
    },
    {
        text: "계획 없이 즉흥적으로 행동할 때 더 재미있는 경험을 하게 된다.",
        type: "P"
    }
];

// MBTI 유형별 설명
const mbtiDescriptions = {
    "ISTJ": {
        nickname: "청렴결백한 논리주의자",
        description: "책임감이 강하고 현실적이며 논리적인 성격이에요. 규칙과 전통을 중요시하고 정확하게 일을 처리하는 능력이 뛰어나요. 학급 회장이나 학생회에서 활약할 수 있어요.\n\n당신은 매우 체계적이고 조직적인 사람이에요. 약속을 중요하게 생각하고 맡은 일은 끝까지 해내는 책임감이 있어요. 세부 사항에 주의를 기울이고 정확한 정보를 바탕으로 결정을 내리는 것을 선호해요.\n\n학교생활에서는 계획적으로 공부하는 것을 좋아하고, 체계적인 학습 방법이 효과적이에요. 친구들 사이에서는 신뢰할 수 있는 사람으로 인정받을 수 있어요. 장래 직업으로는 회계사, 엔지니어, 법률가, 관리자 등이 잘 맞을 수 있어요.",
        imageUrl: "images/ISTJ.png"
    },
    "ISFJ": {
        nickname: "용감한 수호자",
        description: "따뜻하고 배려심이 많으며 책임감이 강해요. 다른 사람의 필요를 잘 알아차리고 도움을 주는 것을 좋아해요. 친구들의 고민 상담을 잘 들어주는 편이에요.\n\n당신은 세심하고 헌신적인 성격으로, 주변 사람들을 돌보는 데 기쁨을 느껴요. 조용하지만 따뜻한 마음을 가지고 있어 친구들이 어려울 때 든든한 지원자가 되어줘요. 기억력이 좋아 중요한 날짜나 친구들의 취향을 잘 기억해요.\n\n학교생활에서는 꾸준하고 성실하게 공부하는 스타일이에요. 팀 프로젝트에서는 맡은 역할을 책임감 있게 수행해요. 장래 직업으로는 간호사, 교사, 사회복지사, 상담사 등 사람들을 도울 수 있는 직업이 잘 맞을 수 있어요.",
        imageUrl: "images/ISFJ.png"
    },
    "INFJ": {
        nickname: "선의의 옹호자",
        description: "이상주의적이고 창의적이며 통찰력이 뛰어나요. 다른 사람의 감정을 잘 이해하고 깊은 관계를 추구해요. 세상을 더 나은 곳으로 만들고 싶어하는 마음이 커요.\n\n당신은 깊이 있는 사고와 강한 직관력을 가지고 있어요. 사람들의 감정과 동기를 잘 파악하고, 복잡한 문제에 대한 통찰력이 뛰어나요. 자신의 가치관에 따라 행동하며 의미 있는 삶을 추구해요.\n\n학교생활에서는 조용하지만 깊이 있는 생각을 가진 학생으로 인식될 수 있어요. 글쓰기나 예술 활동에서 자신의 생각과 감정을 잘 표현해요. 장래 직업으로는 작가, 심리학자, 상담사, 교사, 예술가 등 사람들에게 영감을 줄 수 있는 직업이 잘 맞을 수 있어요.",
        imageUrl: "images/INFJ.png"
    },
    "INTJ": {
        nickname: "전략적인 사색가",
        description: "독립적이고 분석적이며 전략적 사고를 잘해요. 지식을 쌓는 것을 좋아하고 자신의 아이디어를 실현시키는 데 열정적이에요. 과학이나 수학 분야에서 두각을 나타낼 수 있어요.\n\n당신은 논리적이고 창의적인 문제 해결사예요. 복잡한 개념을 이해하는 능력이 뛰어나고, 미래를 내다보는 통찰력이 있어요. 효율성을 중요시하며 목표를 달성하기 위한 전략을 세우는 것을 좋아해요.\n\n학교생활에서는 독립적으로 공부하는 것을 선호하고, 깊이 있는 지식을 추구해요. 불필요한 사교 활동보다는 의미 있는 대화와 토론을 좋아해요. 장래 직업으로는 과학자, 연구원, 프로그래머, 전략 컨설턴트, 기업가 등 혁신적인 아이디어를 실현할 수 있는 직업이 잘 맞을 수 있어요.",
        imageUrl: "images/INTJ.png"
    },
    "ISTP": {
        nickname: "만능 재주꾼",
        description: "논리적이고 실용적이며 호기심이 많아요. 문제 해결 능력이 뛰어나고 위기 상황에서 침착하게 대처해요. 기계나 도구를 다루는 것을 좋아하고 운동 신경도 좋은 편이에요.\n\n당신은 관찰력이 뛰어나고 실용적인 해결책을 찾는 능력이 있어요. 이론보다는 실제 경험을 통해 배우는 것을 선호하고, 자유롭게 행동하는 것을 좋아해요. 위기 상황에서도 침착하게 대처할 수 있는 능력이 있어요.\n\n학교생활에서는 실험이나 실습 과목에서 두각을 나타낼 수 있어요. 이론적인 공부보다는 직접 해보는 학습 방식이 효과적이에요. 장래 직업으로는 엔지니어, 기술자, 운동선수, 파일럿, 응급 구조사 등 실제적인 기술을 활용할 수 있는 직업이 잘 맞을 수 있어요.",
        imageUrl: "images/ISTP.png"
    },
    "ISFP": {
        nickname: "호기심 많은 예술가",
        description: "감성적이고 창의적이며 자유로운 영혼을 가졌어요. 예술적 감각이 뛰어나고 자신만의 개성을 중요시해요. 음악, 미술 등 예술 활동에서 재능을 발휘할 수 있어요.\n\n당신은 따뜻한 감성과 예술적 감각을 가지고 있어요. 현재의 순간을 중요시하고, 자신의 가치관에 따라 행동해요. 다른 사람의 감정에 민감하게 반응하고 조화로운 관계를 추구해요.\n\n학교생활에서는 예술, 음악, 체육 등의 과목에서 재능을 발휘할 수 있어요. 자유롭고 창의적인 환경에서 더 잘 배울 수 있어요. 장래 직업으로는 예술가, 음악가, 디자이너, 사진작가, 요리사 등 창의성을 발휘할 수 있는 직업이 잘 맞을 수 있어요.",
        imageUrl: "images/ISFP.png"
    },
    "INFP": {
        nickname: "열정적인 중재자",
        description: "이상주의적이고 창의적이며 감수성이 풍부해요. 자신의 가치관을 중요시하고 다른 사람을 이해하려고 노력해요. 글쓰기나 예술 활동을 통해 자신을 표현하는 것을 좋아해요.\n\n당신은 깊은 감성과 풍부한 상상력을 가지고 있어요. 자신과 타인의 성장 가능성을 믿고, 진정성 있는 관계를 추구해요. 개인의 가치와 신념에 따라 행동하며, 세상을 더 나은 곳으로 만들고 싶어해요.\n\n학교생활에서는 창의적인 글쓰기나 예술 활동에서 두각을 나타낼 수 있어요. 자신만의 학습 방식을 찾아 공부하는 것이 효과적이에요. 장래 직업으로는 작가, 시인, 상담사, 심리학자, 사회활동가 등 자신의 가치를 실현할 수 있는 직업이 잘 맞을 수 있어요.",
        imageUrl: "images/INFP.png"
    },
    "INTP": {
        nickname: "논리적인 사색가",
        description: "지적 호기심이 많고 논리적이며 창의적인 문제 해결사예요. 새로운 아이디어를 탐구하는 것을 좋아하고 독립적인 사고를 중요시해요. 과학, 철학, 수학 분야에 관심이 많을 수 있어요.\n\n당신은 분석적이고 논리적인 사고력을 가지고 있어요. 복잡한 이론과 개념을 이해하는 능력이 뛰어나고, 지식에 대한 갈증이 커요. 독창적인 아이디어를 생각해내는 능력이 있어 문제 해결에 새로운 접근 방식을 제시할 수 있어요.\n\n학교생활에서는 수학, 과학, 철학 등의 과목에서 뛰어난 성과를 보일 수 있어요. 자신만의 방식으로 깊이 있게 공부하는 것을 좋아해요. 장래 직업으로는 과학자, 프로그래머, 수학자, 철학자, 연구원 등 논리적 사고력을 활용할 수 있는 직업이 잘 맞을 수 있어요.",
        imageUrl: "images/INTP.png"
    },
    "ESTP": {
        nickname: "모험을 즐기는 사업가",
        description: "활동적이고 현실적이며 즉흥적인 성격이에요. 위험을 감수하는 것을 두려워하지 않고 문제 해결 능력이 뛰어나요. 스포츠나 모험적인 활동을 좋아하는 편이에요.\n\n당신은 에너지가 넘치고 행동 지향적인 성격이에요. 현재의 순간을 즐기고, 실제적인 경험을 통해 배우는 것을 선호해요. 위기 상황에서 빠르게 대처할 수 있는 능력이 있고, 사람들과 쉽게 어울릴 수 있어요.\n\n학교생활에서는 체육 활동이나 실습 과목에서 두각을 나타낼 수 있어요. 활동적인 학습 방식이 효과적이에요. 장래 직업으로는 기업가, 영업 전문가, 운동선수, 경찰, 소방관 등 활동적이고 실용적인 직업이 잘 맞을 수 있어요.",
        imageUrl: "images/ESTP.png"
    },
    "ESFP": {
        nickname: "자유로운 영혼의 연예인",
        description: "활발하고 사교적이며 즐거움을 추구해요. 다른 사람들에게 에너지를 주고 분위기를 밝게 만드는 재능이 있어요. 공연이나 발표 같은 활동에서 빛을 발할 수 있어요.\n\n당신은 밝고 열정적인 에너지로 주변 사람들을 즐겁게 해요. 현재의 순간을 즐기고, 새로운 경험을 추구해요. 사람들과 함께하는 것을 좋아하고, 타인의 감정에 민감하게 반응해요.\n\n학교생활에서는 동아리 활동이나 학급 행사에서 활발하게 참여하는 모습을 보여요. 실제적이고 재미있는 학습 방식이 효과적이에요. 장래 직업으로는 연예인, MC, 이벤트 기획자, 판매원, 관광 가이드 등 사람들과 소통하며 즐거움을 줄 수 있는 직업이 잘 맞을 수 있어요.",
        imageUrl: "images/ESFP.png"
    },
    "ENFP": {
        nickname: "재기발랄한 활동가",
        description: "열정적이고 창의적이며 사교적인 성격이에요. 새로운 가능성을 발견하는 것을 좋아하고 다양한 관심사를 가지고 있어요. 친구들에게 영감을 주고 긍정적인 에너지를 전파해요.\n\n당신은 상상력이 풍부하고 열정적인 성격이에요. 새로운 아이디어와 가능성에 흥미를 느끼고, 다양한 사람들과 깊은 관계를 맺는 것을 좋아해요. 긍정적인 에너지로 주변 사람들에게 영감을 주는 능력이 있어요.\n\n학교생활에서는 창의적인 프로젝트나 토론 활동에서 두각을 나타낼 수 있어요. 다양한 학습 방식을 시도하는 것이 효과적이에요. 장래 직업으로는 교사, 상담사, 작가, 마케팅 전문가, 예술가 등 창의성과 사람과의 소통을 결합할 수 있는 직업이 잘 맞을 수 있어요.",
        imageUrl: "images/ENFP.png"
    },
    "ENTP": {
        nickname: "논쟁을 즐기는 변론가",
        description: "창의적이고 지적이며 호기심이 많아요. 새로운 아이디어를 탐구하고 토론하는 것을 좋아해요. 독창적인 해결책을 제시하는 능력이 뛰어나고 도전을 즐기는 편이에요.\n\n당신은 날카로운 지성과 창의적인 문제 해결 능력을 가지고 있어요. 기존의 규칙에 도전하고 새로운 가능성을 탐구하는 것을 좋아해요. 다양한 주제에 대해 토론하고 아이디어를 교환하는 것을 즐겨요.\n\n학교생활에서는 토론 대회나 창의적인 프로젝트에서 두각을 나타낼 수 있어요. 다양한 관점에서 문제를 바라보는 학습 방식이 효과적이에요. 장래 직업으로는 기업가, 발명가, 변호사, 컨설턴트, 마케팅 전략가 등 혁신적인 아이디어를 활용할 수 있는 직업이 잘 맞을 수 있어요.",
        imageUrl: "images/ENTP.png"
    },
    "ESTJ": {
        nickname: "엄격한 관리자",
        description: "체계적이고 책임감이 강하며 효율성을 중요시해요. 목표를 달성하기 위해 열심히 노력하고 리더십이 뛰어나요. 학급 임원이나 동아리 회장으로 활약할 수 있어요.\n\n당신은 조직적이고 실용적인 성격으로, 명확한 규칙과 구조를 선호해요. 책임감이 강하고 목표 지향적이며, 효율적으로 일을 처리하는 능력이 있어요. 리더십이 뛰어나 다른 사람들을 이끌고 조직하는 역할을 잘 수행해요.\n\n학교생활에서는 체계적으로 공부하고 계획적으로 목표를 달성하는 모습을 보여요. 명확한 지시사항과 구조화된 학습 환경에서 효과적으로 배울 수 있어요. 장래 직업으로는 관리자, 경영자, 군인, 법률가, 금융 전문가 등 체계적이고 책임감 있는 직업이 잘 맞을 수 있어요.",
        imageUrl: "images/ESTJ.png"
    },
    "ESFJ": {
        nickname: "사교적인 외교관",
        description: "친절하고 배려심이 많으며 사교적인 성격이에요. 다른 사람들을 돕고 조화로운 관계를 유지하는 것을 중요시해요. 학교 행사나 모임을 조직하는 데 탁월한 능력을 발휘해요.\n\n당신은 따뜻하고 협조적인 성격으로, 다른 사람들의 필요에 민감하게 반응해요. 사람들과의 관계를 중요시하고, 조화로운 환경을 만들기 위해 노력해요. 책임감이 강하고 실용적인 도움을 주는 것을 좋아해요.\n\n학교생활에서는 학급 활동이나 봉사 활동에 적극적으로 참여하는 모습을 보여요. 협동 학습이나 그룹 활동을 통해 효과적으로 배울 수 있어요. 장래 직업으로는 교사, 간호사, 사회복지사, 인사 관리자, 이벤트 기획자 등 사람들을 돕고 조직하는 직업이 잘 맞을 수 있어요.",
        imageUrl: "images/ESFJ.png"
    },
    "ENFJ": {
        nickname: "정의로운 사회운동가",
        description: "카리스마 있고 따뜻하며 책임감이 강해요. 다른 사람의 성장을 돕는 것을 좋아하고 공동체의 화합을 중요시해요. 친구들에게 좋은 조언자가 되어주고 긍정적인 변화를 이끌어요.\n\n당신은 따뜻한 카리스마와 공감 능력을 가지고 있어요. 다른 사람들의 잠재력을 발견하고 성장을 도울 수 있는 능력이 있어요. 사람들을 연결하고 화합을 이끌어내는 데 탁월해요.\n\n학교생활에서는 학생회나 동아리 활동에서 리더십을 발휘할 수 있어요. 의미 있는 토론과 협력적인 학습 환경에서 효과적으로 배울 수 있어요. 장래 직업으로는 교사, 상담사, 인사 관리자, NGO 활동가, 정치인 등 사람들에게 영향을 주고 긍정적인 변화를 이끌 수 있는 직업이 잘 맞을 수 있어요.",
        imageUrl: "images/ENFJ.png"
    },
    "ENTJ": {
        nickname: "대담한 통솔자",
        description: "자신감 있고 결단력이 있으며 리더십이 뛰어나요. 효율적으로 목표를 달성하는 방법을 찾고 전략적으로 계획을 세워요. 학생회장이나 프로젝트 리더로 활약할 수 있어요.\n\n당신은 강한 리더십과 전략적 사고 능력을 가지고 있어요. 목표를 설정하고 이를 달성하기 위해 효율적으로 계획을 세우는 능력이 뛰어나요. 논리적이고 객관적인 판단을 내리며, 다른 사람들을 이끌고 동기부여하는 능력이 있어요.\n\n학교생활에서는 학생회나 프로젝트 팀에서 리더 역할을 맡을 수 있어요. 체계적이고 목표 지향적인 학습 방식이 효과적이에요. 장래 직업으로는 CEO, 기업가, 정치인, 변호사, 컨설턴트 등 리더십과 전략적 사고를 활용할 수 있는 직업이 잘 맞을 수 있어요.",
        imageUrl: "images/ENTJ.png"
    }
};

// 변수 초기화
let currentQuestion = 0;
let scores = {
    E: 0, I: 0,
    S: 0, N: 0,
    T: 0, F: 0,
    J: 0, P: 0
};

// DOM 요소
const startPage = document.getElementById('start-page');
const questionPage = document.getElementById('question-page');
const resultPage = document.getElementById('result-page');
const startBtn = document.getElementById('start-btn');
const questionNumber = document.getElementById('question-number');
const questionText = document.getElementById('question-text');
const progressBar = document.getElementById('progress-bar');
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');
const option4 = document.getElementById('option4');
const mbtiResult = document.getElementById('mbti-result');
const mbtiNickname = document.getElementById('mbti-nickname');
const mbtiDescription = document.getElementById('mbti-description');
const mbtiImage = document.getElementById('mbti-image');
const restartBtn = document.getElementById('restart-btn');
const shareBtn = document.getElementById('share-btn');

// 이벤트 리스너 설정
startBtn.addEventListener('click', startTest);
option1.addEventListener('click', () => selectOption(3)); // 매우 그렇다 (3점)
option2.addEventListener('click', () => selectOption(2)); // 약간 그렇다 (2점)
option3.addEventListener('click', () => selectOption(1)); // 약간 아니다 (1점)
option4.addEventListener('click', () => selectOption(0)); // 전혀 아니다 (0점)
restartBtn.addEventListener('click', restartTest);
shareBtn.addEventListener('click', shareResult);

// 테스트 시작 함수
function startTest() {
    startPage.style.display = 'none';
    questionPage.style.display = 'block';
    showQuestion();
}

// 질문 표시 함수
function showQuestion() {
    if (currentQuestion < questions.length) {
        questionNumber.textContent = `질문 ${currentQuestion + 1}/${questions.length}`;
        questionText.textContent = questions[currentQuestion].text;
        progressBar.style.width = `${(currentQuestion / questions.length) * 100}%`;
    } else {
        showResult();
    }
}

// 옵션 선택 함수
function selectOption(score) {
    const questionType = questions[currentQuestion].type;
    
    // 점수 계산
    if (questionType === 'E') {
        scores.E += score;
    } else if (questionType === 'I') {
        scores.I += score;
    } else if (questionType === 'S') {
        scores.S += score;
    } else if (questionType === 'N') {
        scores.N += score;
    } else if (questionType === 'T') {
        scores.T += score;
    } else if (questionType === 'F') {
        scores.F += score;
    } else if (questionType === 'J') {
        scores.J += score;
    } else if (questionType === 'P') {
        scores.P += score;
    }
    
    currentQuestion++;
    showQuestion();
}

// 결과 표시 함수
function showResult() {
    questionPage.style.display = 'none';
    resultPage.style.display = 'block';
    
    // MBTI 결과 계산
    const mbti = [
        scores.E > scores.I ? 'E' : 'I',
        scores.S > scores.N ? 'S' : 'N',
        scores.T > scores.F ? 'T' : 'F',
        scores.J > scores.P ? 'J' : 'P'
    ].join('');
    
    console.log("점수:", scores); // 디버깅용 점수 출력
    console.log("결과:", mbti); // 디버깅용 결과 출력
    
    // 결과 표시
    mbtiResult.textContent = mbti;
    mbtiNickname.textContent = mbtiDescriptions[mbti].nickname;
    mbtiDescription.textContent = mbtiDescriptions[mbti].description;
    
    // 이미지 설정
    mbtiImage.src = mbtiDescriptions[mbti].imageUrl;
    mbtiImage.alt = `${mbti} - ${mbtiDescriptions[mbti].nickname}`;
}

// 테스트 재시작 함수
function restartTest() {
    currentQuestion = 0;
    scores = {
        E: 0, I: 0,
        S: 0, N: 0,
        T: 0, F: 0,
        J: 0, P: 0
    };
    resultPage.style.display = 'none';
    startPage.style.display = 'block';
}

// 결과 공유 함수
function shareResult() {
    const mbti = mbtiResult.textContent;
    const text = `나의 MBTI 결과는 ${mbti}(${mbtiDescriptions[mbti].nickname})입니다!`;
    
    if (navigator.share) {
        navigator.share({
            title: '나의 MBTI 결과',
            text: text,
            url: window.location.href
        })
        .catch(error => console.log('공유하기 실패:', error));
    } else {
        // 공유 API를 지원하지 않는 브라우저의 경우
        alert(text + '\n결과를 복사해서 친구들에게 공유해보세요!');
    }
} 