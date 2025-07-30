import React, { useState } from "react";
//리액트 라이브러리에서 useState 함수(훅) 불러오기


// function App() {
//     //개별 상태들 
//     const [score, setScore] = useState(0);
//     const [name, setName] = useState("Alice");
//     //[상태변수, 바꾸는 함수] = 초기값

//     const incrementScore = () => {
//         setScore((prevScore) => prevScore + 1);
//     };
//     //이전 점수를 받아서 1을 더해 새로운 점수로 업데이트 

//     const changeName = () => {
//         setName(name === "Alice" ? "Bob" : "Alice");
//     };
//     //삼항 연산자는 (조건문) ? true : false 구조로 값을 정하는 표현 

//     return (
//         //JSX로 div로 모든 요소 감싸줘 부모 요소 역할 
//         <div>
//             <h1>점수: {score}</h1>
//             <button onClick={incrementScore}>incrementScore</button>
//             <h2>이름: {name}</h2>
//             <button onClick={changeName}>changeName</button>
//         </div>
//     );

// };

// export default App;


//여기서 이제 useState 형태로 만들어 두 상태를 함께 관리 
// 상태 초기 값은 {score: 0, name: "Alice"}와 같이 객체로 구성
//상태 변경 함수 하나(setState)를 쓰는데 
//내부 객체를 업데이트할 때는 기존 상태를 복사 (...state)하고 변경할 값만 덮어씌우는 방식으로 진행
//각 버튼 핸들러에서도 setState 호출 시 이전 상태를 안전하게 받아 업데이트 해야함 



function App() {

    // const [score, setScore] = useState(0);
    // const [name, setName] = useState("Alice");
    const [state, setState] = useState({
        score: 0,
        name: "Alice"
    })// 초기값 설정 객체로. 



    const incrementScore = () => {
        setState(prevState => 
            ({...prevState, 
                score: prevState.score + 1
            }));
    }; // 이전 상태에서 불러와 => ...에 score:는 이전 점수+1해서 덮어라.

    const changeName = () => {
        setState(prevState => 
            ({...prevState, name: prevState.name === "Alice" ? "Bob" : "Alice"}));
            //괄호 뭐써야할 지가 모르니 괄호 정리해야함.
            // 그러니까 ...prevState  , 전에 위치한 게 이전 상태 펼쳐서 복사한 후 뒤에 걸로 새로 덮어쓰기 
    };


    return (
        <div>
            <h1>점수: {state.score}</h1>
            <button onClick={incrementScore}>incrementScore</button>
            <h2>이름: {state.name}</h2>
            <button onClick={changeName}>changeName</button>
        </div>
    );

};

export default App;


//괄호 정리
//setState()   <- 이 괄호는 함수를 인자로 받음
//...prevState => (prevState => {  }) 이거에서 
//prevState => {...} 은 함수인데 {}을 함수 몸체로 인식
//여기서 함수에서 객체를 바로 반환하려면 {}를   ()로 감싸줘야 한다.

//prevState => {score: +1} 이건 객체 반환이 아니라 함수 몸체에 score 레이블(label)만 있는 코드여서 틀리다고함. 

// (): 함수 매개변수 그룹 or 식을 감쌀 때        함수에서 객체를 표현할 때 꼭 감싸야 하는 괄호.

// {}: JS블록(함수 몸체. 조건문 등), 객체 리터널{keu : value}, JSX 내 JS 표현식 삽입{expression}

//^^^^^^^^^^^^^^^^^^^^^^^^^^^^과제 1 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^