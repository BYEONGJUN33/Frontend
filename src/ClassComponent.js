// import React, { Component } from "react";


// class ClassComponent extends Component {
//     //최기화
//     constructor(props) {
//         super(props);
//         this.state = { count: 0 }
//         console.log("constuctor 실행");
//     }


//     componentDidMount() {
//         console.log("componentDidMount (처음 렌더링 완료)")
//     };
//     componentDidUpdate() {
//         console.log("componentDidMount (처음 렌더링 완료)")
//     };
//     componentDidWillUnmount() {
//         console.log("componentDidMount (컴포넌트 제거됨 )")
//     };


//     render() {
//         return (
//             <>
//                 <h2>클래스형 컴포넌트</h2>
//                 <p>카운트 </p>
//                 <button onClick={() => { this.setState.count + 1 }}>+1 버튼</button>
//             </>
//         )
//     };
// };

// export default ClassComponent;



import React, { Component } from "react";






//constructor    컴포넌트 인스턴스 생성 시 1회 - 초기 state 설정 및 메서드 바인딩 가능
//render    리렌더링 때마다 실행 - UI JSX를 만들어서 화면에 보여준다 
//componentDidMount    렌더링 끝난 직후 1회 - 네트워크 요청 및 타이머 설정 등 초기작업에 사용한다
//shouldComponentUpdate    state나 props 변경 시 매번 호출된다 - 리렌더링 허용 여부 결정 (true/false반환)
//componentDidUpdate    리렌더링 완료 직후 호출 - 상태 변경 후 후속 작업에 사용
//componentWillUnmount    컴포넌트가 화면에서 사라지기 직전 호출 - 타이머 정리, 구독 해제 등 청소 작업에 사용 






class ClassComponent extends React.Component {
    constructor(props) {
        super(props);
        //컴포넌트가 생성될 때 호출된다 constructor ()
        this.state = {
            count: 0,
            hasError: false,
        };
        console.log("constructor");
    }


    // count 는 0으로 기본 세팅 값일테고 hasError은 몰라

    //componrntDidMount()는 컴포넌트가 처음으로 DOM 마운트(연결)된 직후에 호출됨 
    componentDidMount() {
        console.log("componentDidMount (처음 렌더링 완료)");
        // 예: 네트워크 요청이나 타이머 설정 등의 작업??? 컴포넌트가 처음 나타난 직후 1번만 호출된다.
    };

    // shouldComponentUpdata(): 컴포넌트가 리렌더링 되어야 할지 결정한다
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate");
        // 예: 상태가 변경될 때만 리렌더링
        return nextState.count !== this.state.count;
    };


    // componentDidUpdate() : 컴포넌트가 리렌더링된 직후에 호출된다 
    componentDidUpdate(preProps, prevState, snapshot) {
        if (prevState.count !== this.state.count) {
            console.log("count 값이 변경되어 componentDidUpdate 실행");
            //예: 상태변경 후 추가 작업??
        }

    };

    //componentWillUnmount() : 컴포넌트가 DOM에서 제거되기 직전에 호출됩니다. 
    componentWillUnmount() {
        console.log("componentWillUnmount");
        //예: 타이머 해제나 네트워크 요청 취소등의 작업
    };

    handelIncrement = () => {
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        //render() : 컴포넌트 UI정의              렌더 숫자 같이
        console.log("render - currnt count", this.state.count);

        return (
            <div>
                <h1>React LifeCycle Methods Demo</h1>
                <p>Count: {this.state.count}</p>
                <button onClick={this.handelIncrement}>증가</button>
                {/* <button onClick={() => console.log("컴포넌트 제거 이벤트")} >componentWillUnmount</button> */}
            </div>
        )

    }
};

export default ClassComponent;


