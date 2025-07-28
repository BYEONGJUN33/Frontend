export default function () {

    const myStyle = {
        color: "red",
        background: "black",
        padding: "20px"
    };

//함수 선언 및 컴포넌트 문 안에 ㄱ
// 리턴문 안에는 화면에 보이는 것들 넣는 것
    return <nav style={myStyle}>안녕 홍길동 123</nav>;
};