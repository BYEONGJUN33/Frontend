import React, { useState } from 'react';




// export default function Todo() {
//     const [todos, setTodos] = useState([
//         // useState가 기본 목록을 배열형태로 관리한다
//         { id: 1, text: '청소하기' },
//         { id: 2, text: '공부하기' },
//     ]);

//     return (
//         <div>
//             <h2>할 일 목록</h2>
//             <ul>
//                 {todos.map(todo => (  
//                     // map으로 리스트 li 생성할 때는 key 꼭 넣기 
//                     <li key={todo.id}>{todo.text}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }



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
        <div>
            <h2>할 일 목록</h2>
            <ul>
                {/* todos 배열을 map으로 돌면서 객체 받아옴 -> li 요소 만듬 
                li에서 key={todo.id}는 꼭 넣어줘야 React가 효율적인 렌더링 할 수 있다함  */}
                {todos.map(todo => (
                    <li key={todo.id}>{todo.text}</li>
                ))}
                {/* li로 todo.id값 받아와서 > todo에 적힌 text를 넣어서 표현 */}
            </ul>

            {/* 입력창 구현하는 파트 */}
            <input
                type="text"
                placeholder="할 일을 입력하세요"
                //vlaue의 input값이 React의 inputValue에 연결되어 있다. 
                value={inputValue}
                //그러니까 e.target이 이벤트가 발생한 html요소 =====>>>> 즉, input을 뜻함
                onChange={e => setInputValue(e.target.value)}
            />
            <button onClick={addTodo}>할일목록추가</button>
        </div>
    );
}
//사용자의 입력 → onChange 이벤트 발생 → 상태 변경 → React가 UI 다시 렌더링 이라는 구조