// import Child from "./Child";
// import { useState } from "react";



// export default function App() {
//   const [data, setData] = useState("초기값");

//   const 콜백함수 = (자식에서받음) => { };
//   console.log("콜백함수 실행", 자식에서받음)
//   return (
//     <>
//     <h1>부모상태: {data}</h1>;
//   <Child onData={콜백함수} />
//   <Button />
//   </>
//   )

//   }

// App.jsx
import React, { useState } from "react";
import styled from "styled-components";


// const Container = styled.div`
// background: red;
// `;
// const Input = styled.input`
// background: red;
// `;

// const Title = styled.h1`
// font-size: 40px;
// `;

// const Button = styled.button`
// background: ${(props)=> (props.add ? "blue" : "gray")};
// border: none;
// width: 50px;
// paddtin: 5px 10px;

// `;

// function App() {
//   const [todos, setTodos] = useState([]);
//   const [input, setInput] = useState("");

//   const addTodo = () => {
//     if (input.trim() === "") return;
//     setTodos([...todos, input.trim()]);
//     setInput("");
//   };

//   const deleteTodo = (index) => {
//     const newTodos = todos.filter((_, i) => i !== index);
//     setTodos(newTodos);
//   };

//   const AddButton = styled(Button)``;
//   // Button 상속받아 AddButton 작업하기


//   return (
//     <Container>
//       <Title>할 일 목록</Title>

//       <div>
//         <Input
//           type="text"
//           placeholder="할 일을 입력하세요"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//         />
//         <Button onClick={addTodo}>추가</Button>
//       </div>

//       <ul>
//         {todos.map((todo, index) => (
//           <li key={index}>
//             {todo}
//             <Button onClick={() => deleteTodo(index)}>삭제</Button>
//           </li>
//         ))}
//       </ul>


//       <h1 className="bg-orange-400 text-white p-4 text-center text-2xl">안녕</h1>
//     </Container>
//   );
// }

// export default App;


// ========================================== 8월 1일 과제 ==================================================

//중앙 배치 전용 변수 생성
const centerFlex = "flex justify-center items-center flex-col bg-green-200 gap-4 " ;

const Title = styled.h2`
  font-size: 50px;
  background: orange;
  text-align: center;
  color: blue;
  font-weight: 900;
`;



export default function Todo() {
    const [todos, setTodos] = useState([
        { id: 1, text: '청소하기' },
        { id: 2, text: '공부하기' },
    ]);

    const [inputValue, setInputValue] = useState('');
    // React 상태를 선언하는 구문...inputValue는 상태 변수라고 하는데 다음에 알아보자..




    // 새 항목을 추가하는 함수 
    const addTodo = () => {
        const trimmed = inputValue.trim();
        // trimmed라는 변수가 input값 trim처리해서 저장됨 그걸 아래 조건문if문으로 alert 기능 추가 및 리턴 추가
        if (trimmed === '') {
            alert('값을 추가해주세요.');
            return;
        }

        // todos는 현재까지 저장된 할 일 목록 배열 상태
        //
        setTodos([...todos, { id: Date.now(), text: trimmed }]);
        // 위 형식인 ...todos 현재 배열의 모든 항목을 펼쳐 복사 / 그 뒤는 새 할 일 항목 객체/
        // id는 현재 시간을 기반으로 숫자를 주어 항목별 고유값 생성한다고 한다 
        setInputValue('');
    };


    // 여기가 컴포넌트가 렌더링할 UI를 그려줄 JSX로 반환하는 부분이라고 한다 
    return (
        <div className={`${centerFlex} bg-yellow-200`}>
            <Title>할 일 목록</Title>
            <ul className="list-decimal space-y-2">
                {/* todos 배열을 map으로 돌면서 객체 받아옴 -> li 요소 만듬 
                li에서 key={todo.id}는 꼭 넣어줘야 React가 효율적인 렌더링 할 수 있다함  */}
                {todos.map(todo => (
                    <li key={todo.id} className={`bg-gray-200 p-2 rounded cursor-pointer
      ${todo.completed ? "line-through text-gray-400" : "text-black"}
      hover:bg-gray-300`}>{todo.text}</li>
                ))}
                {/* li로 todo.id값 받아와서 > todo에 적힌 text를 넣어서 표현 */}
            </ul>

            {/* 입력창 구현하는 파트 */}
            <input className="border shadow-xl"
                type="text"
                placeholder="할 일을 입력하세요"
                //vlaue의 input값이 React의 inputValue에 연결되어 있다. 
                value={inputValue}
                //그러니까 e.target이 이벤트가 발생한 html요소 =====>>>> 즉, input을 뜻함
                onChange={e => setInputValue(e.target.value)}
            />
            <button className="border border-red-600 p-4 text-white bg-pink-600 font-bold text-2xl" onClick={addTodo}>할일목록추가</button>
        </div>
    );
}
//사용자의 입력 → onChange 이벤트 발생 → 상태 변경 → React가 UI 다시 렌더링 이라는 구조


//과제 2번째 리덕스는 학습일지 정리하며 글을 작성하며 과제 수행하였습니다. 감사합니다. 
