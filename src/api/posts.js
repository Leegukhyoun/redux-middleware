// n 밀리세컨드동안 기다리는 프로미스를 만들어주는 함수
const sleep = n => new Promise(resolve => setTimeout(resolve, n));

const posts = [
    {
        id: 1,
        title : "현세계 삼촌 박성수",
        body : "성수야 정신 차리자"
    },
    {
        id: 2,
        title : "나메크성의 생태계",
        body : "나메크성은 프리더가 지배중이다"
    },
    {
        id: 3,
        title : "웰시코기 메시",
        body : "오영택저 웰시코기의 글"
    },
]

//포스트 목록을 가져오는 비동기 함수
export const getPosts = async () => {
    await sleep(500); //0.5초간 기다린다
    return posts;
}
// ID로 포스트를 조회하는 비동기 함수
export const getPostById = async id => {
    await sleep(500); //0.5초간 기다린다
    return posts.find(post => post.id === id);
}