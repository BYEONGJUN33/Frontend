import logo from './logo.svg';
import './App.css';
import MyNav from './Nav.js';
// export한 파일을 import로 받아와 명명 후 from 파일 경로 가능 
import MyFooter from './Footer.js';
import MyTodo from './Todo.js';
import Child from './Child.js';
import React, { useState } from "react";
import ClassComponent from "./ClassComponent.js";  // 본인이 만들어둔 파일명 맞게 수정
import CardItem from "./CardItem.js";





function App() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <h1>React 라이프사이클 실습용 App</h1>
      <button onClick={() => setShow(!show)}>
        {show ? "컴포넌트 숨기기" : "컴포넌트 보이기"}
      </button>

      <hr />

      {/* show가 true일 때만 컴포넌트 보여주기 (조건부 렌더링) */}
      {show && <ClassComponent />}
    </div>
  );
}
//ClassComponent.js는 클래스형 컴포넌트다.
//App.js에서 이 컴포넌트를 조건부 렌더링하여, 보여주고 숨기며 라이프사이클 시연용으로 활용한다. 
//버튼 클릭으로 상태 count를 변경 시 발생하는 라이프 사이클을 관찰할 수 있다. 

//show가 ture라서 ClassComponent.js가 화면에 표시됨 
//컴포넌트 숨기기 누르면 show가 false가 된다. Unmount 호출 확인.
//다시 누르면 컴포넌트 새로 마운트됨 사이클 다시 시작. 
//그니까 




// ----------------------------------------------------과제 2--------------------------------------------------------------




const cardItemList = [
  {
    imageUrl: "https://s.pstatic.net/shopping.phinf/20250714_3/4838bebf-4621-4213-95f0-d751fac4f7e2.jpg?type=f320_230", price: "229,000", title: "이노스페이스원 루나 엑스2 (Luna X2) 6인치 이북리더기"
  },
  {
    imageUrl: "https://s.pstatic.net/shopping.phinf/20250714_8/19c781cd-a1d0-4420-bae2-167c1b99e519.jpg?type=f320_230"
    , price: "99,360"
    , title: "필립스 드라이기 7000 슈가로즈 BHD723/09+알로에젤"
  },
  {
    imageUrl: "https://s.pstatic.net/shopping.phinf/20250722_9/1491faec-576c-4f28-bddc-f3aac2b8bd85.jpg?type=f320_230"
    , price: "26,900"
    , title: "[8/9~8/17] 캘리포니아비치 골드시즌2 오후권"
  },
  {
    imageUrl: "https://s.pstatic.net/shopping.phinf/20250714_10/0e5c3804-eebd-4300-8911-b2d8d2042448.jpg?type=f320_230"
    , price: "11,000"
    , title: "에버랜드 바오패밀리 리유저블백 M 1개+1개"
  },
  {
    imageUrl: "https://s.pstatic.net/shopping.phinf/20250714_21/cad0bdf2-d628-4c2e-a667-9ec9f940301e.jpg?type=f320_230"
    , price: "25,700"
    , title: "35W PPS 초고속충전 10000mAh 보조배터리 +Npay 5%"
  },
  {
    imageUrl: "https://s.pstatic.net/shopping.phinf/20250707_25/9fcf6e3a-7813-430f-b71f-48a351d9a29f.jpg?type=f320_230"
    , price: "38,900"
    , title: "프레벨롱 국산 짜먹는 과일 퓨레 8팩+8팩"
  }
]









function Shop() {
  return (
    <div>
      <h1>네이버 쇼핑투데이 카드 연습</h1>
      <div className='naverCard'>

        {/* <CardItem imageUrl="" price="" title=""/> 이 구조 반복 시작 
        <CardItem imageUrl="https://s.pstatic.net/shopping.phinf/20250714_3/4838bebf-4621-4213-95f0-d751fac4f7e2.jpg?type=f320_230" price="229,000" title="이노스페이스원 루나 엑스2 (Luna X2) 6인치 이북리더기" />
        <CardItem imageUrl="https://s.pstatic.net/shopping.phinf/20250714_8/19c781cd-a1d0-4420-bae2-167c1b99e519.jpg?type=f320_230" price="99,360" title="필립스 드라이기 7000 슈가로즈 BHD723/09+알로에젤" />
        <CardItem imageUrl="https://s.pstatic.net/shopping.phinf/20250722_9/1491faec-576c-4f28-bddc-f3aac2b8bd85.jpg?type=f320_230" price="26,900" title="[8/9~8/17] 캘리포니아비치 골드시즌2 오후권" />
        <CardItem imageUrl="https://s.pstatic.net/shopping.phinf/20250714_10/0e5c3804-eebd-4300-8911-b2d8d2042448.jpg?type=f320_230" price="11,000" title="에버랜드 바오패밀리 리유저블백 M 1개+1개" />
        <CardItem imageUrl="https://s.pstatic.net/shopping.phinf/20250714_21/cad0bdf2-d628-4c2e-a667-9ec9f940301e.jpg?type=f320_230" price="25,700" title="35W PPS 초고속충전 10000mAh 보조배터리 +Npay 5%" />
        <CardItem imageUrl="https://s.pstatic.net/shopping.phinf/20250707_25/9fcf6e3a-7813-430f-b71f-48a351d9a29f.jpg?type=f320_230" price="38,900" title="프레벨롱 국산 짜먹는 과일 퓨레 8팩+8팩" /> */
        }

        {cardItemList.map((item, index) => (
          <li key={index} style={{ listStyle: "none" }}>
            <CardItem
              key={index}
              imageUrl={item.imageUrl}
              price={item.price}
              title={item.title}
            />
          </li>
        ))}

      </div>
    </div>
  );

};


//map으로 6개 항목을 객체화 시켜서 컴포넌트에 작성. 
//map()메서드로 배열 반복 컴포넌트 생성 
//이 덕에 상품 개수나 데이터가 바뀌어도 배열만 수정하면 UI가 자동으로 따라 변해 효율적일 것이다. 
//map() 안에는 key라는 고유 식별자 필수 
//JSX에서 JS코드 쓸 땐 {}로 묶어야 함 
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^과제 3 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^



// 시간상 과제 2는 시작못하여 AI로 도움받고 마무리했습니다 감사합니다. 
//useContext는 React에서 컴포넌트들끼리 편리하게 데이터를 공유하는 도구 
// 컴포넌트 구조 상 계층이 깊거나 여러군데서 같은 데이터를 써야할 때 계속 props로 하기 복잡
// 예시로 전역적인 사용자 로그인 정보 or 화면 밝기 같이 여러 단계의 컴포넌트 거쳐 props로 전달하는 것을 props drilling 이럴 떄 useContext 등장한다..?
//
// Context 특정 데이터를 앱 전체에서 쉽게 공유할 수 있게하는 공간
// CreateContext()로 Context 객체 생성 -> Context 를 컴포넌트 상위트리에서 Provider을 감싸 데이터 내려줌
// 하위 컴포넌트들은 useContext(Context) 훅을 사용하여 꺼내 쓸 수 있다. 
// 따라서 부모 - 자식 컴포넌트에 props에 계속 안넘겨도 ㅗ딤 




// //import React, { createContext, useContext, useState } from 'react';

// // 1) Context를 새로 만듭니다. (초기값은 필요에 따라 설정)
// const ThemeContext = createContext('light');

// function App() {
//   // 전체 앱에서 공유할 상태 설정 (테마)
//   const [theme, setTheme] = useState('light');

//   return (
//     // 2) Provider로 하위 컴포넌트에 theme 값 내려줌
//     <ThemeContext.Provider value={{ theme, setTheme }}>
//       <Toolbar />
//     </ThemeContext.Provider>
//   );
// }

// function Toolbar() {
//   // 중간 컴포넌트이지만, props 없이 그냥 렌더링
//   return (
//     <div>
//       <ThemedButton />
//     </div>
//   );
// }

// function ThemedButton() {
//   // 3) useContext를 쓰면, 상위 Provider가 준 값(여기선 theme)을 바로 받아 사용
//   const { theme, setTheme } = useContext(ThemeContext);

//   return (
//     <button
//       style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}
//       onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
//     >
//       현재 테마: {theme} (클릭해서 변경)
//     </button>
//   );
// }



// export {App};           
export default Shop;






