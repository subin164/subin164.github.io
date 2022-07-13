const quotes = [
    {
        quote : "강한자가 살아남는 것이 아니라 살아남는 자가 강한 것이다.",
        auther : "김유신 장군",
    },
    {
        quote : "배우는 사람은 모름지기 심신을 수련해야 한다.",
        auther : "퇴계 이황",
    },
    {
        quote : "뜻이 서지 않으면 만사가 성공하지 못한다. 먼저 반듯이 뜻을 세워라",
        auther : "율곡 이이",
    },
    {
        quote : "겸손은 사람을 머물게 하고, 칭찬은 사람을 가깝게 하고, 넓음은 사람을 따르게하고, 깊은은 사람을 감동케 한다.",
        auther : "다산 정약용",
    },
    {
        quote : "세월을 헛되이 보내지 마라 청춘은 다시 돌아오지 않는다.",
        auther : "안중근 의사",
    },
    {
        quote : "진실은 반드시 따르는 자가 있고 정의는 반드시 이루는 날이 있다.",
        auther : "도산 안창호",
    },
    {
        quote : "간단한이 훌륭함의 열쇠다.",
        auther : "이소룡",
    },
    {
        quote : "현재와 미래는 어떻게든 연결되어 있다.",
        auther : "스티브 잡스",
    },
    {
        quote : "해야할 일은 과감히 하라, 결심한일은 반드시 실행하라.",
        auther : "벤자민 프랭클린",
    },
    {
        quote : "인생은 10% 당신에게 일어나는 일이고 90%는 당신이 그것에 반응하는 것입니다.",
        auther : "찰스 R. 스윈돌",
    },
    {
        quote : "멈추지 않는다면 얼마나 천천히 가느냐는 중요하지 않다.",
        auther : "공자",
    },
    {
        quote : "앞서가는 비결은 시작하는 것입니다.",
        auther : "마크 트웨인",
    },
    {
        quote : "성공의 반대는 실패가 아니라, 도전하지 않는 것이다.",
        auther : "에디슨",
    },
    {
        quote : "미래는 현재 우리가 무엇을 하는가에 달려 있다.",
        auther : "마하트마 간디",
    },
]
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const randQuote =quotes[Math.floor(Math.random() * quotes.length)];


quote.innerText = randQuote.quote;
author.innerText = "- "+ randQuote.auther + " -";