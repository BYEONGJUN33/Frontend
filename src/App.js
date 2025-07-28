import logo from './logo.svg';
import './App.css';
import MyNav from './Nav.js';
// export한 파일을 import로 받아와 명명 후 from 파일 경로 가능 
import MyFooter from './Footer.js';
import MyTodo from './Todo.js';



export default function App() {
  return (
    <div>
      {/* 기존 내용 지우고 Todo 컴포넌트 렌더 */}
      <MyTodo />
    </div>
  );
}

















// function App() {
//   const name = "홍길동";



//   const imgSrc = "이미지 경로";

//   return (
//     <div className="App">
//       {/* 네비게이션 */}
//       <MyNav />
//       {/* 본문영역 */}

//       {/* 푸터 */}
//       <MyFooter />


//     </div>
//   );
// }

// export default App;

// <h1 style={myStyle}>Hello, {name} </h1>
// <p>{3+5}</p>
// <img src={imgSrc} alt="이미지"/>