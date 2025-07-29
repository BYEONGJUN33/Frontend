import React from "react";

function CardItem(props) {
    // props에서 값 꺼내쓰기 (구조분해는 우선 생략, 필요한 것 props.~~~)
    return (
        <div className="card">
            <img src={props.imageUrl} alt={props.title} className="card-img" />
            {/* <div className="card-price">{props.price}원</div>
            <h3 className="card-title">{props.title}</h3> */}
            <div className="card-info">
                <span className="card-price">{props.price}원&nbsp;</span> <span className="card-title">{props.title}</span>
            </div>
        </div>
    );
}

export default CardItem;






//App.js에있는 카드 정보 6가지를 여기 위에 컴포넌트를 사용해 별개의 파일로 분리해 작성할 수 있었고,
//React가 아니면 카드 6개 쓸때마다 Html태그를 일일히 써야 했을 것. 
//JS로는 DOM 조작을 직접, 반복문 없이 한다면 비효율적으로 만들어질 것을 대비함. 
//즉, React는 컴포넌트를 '클래스' 또는 '함수' 형태로 만들기 때문에, 카드 하나 UI를 컴포넌트로 정의 =>여러 데이터로 사용 가능

//props는 컴포넌트가 부모로부터 전달받는 데이터. 
//CardItem 컴포넌트에서 props.OOO은 부모 App.js에서 값을 받아 컴포넌트로 쓰는 것 
// 이러니 데이터와 UI 분리하여 재활용과 유지보수가 쉽다. 

//React를 안썼으면 Html,css,js만으로도 할 수는 있지만.....
//동적인 데이터 반영, 반보고디는 UI 효율적 생성, 재사용성, 상태관리 등에서 훨씬 편리하다고 한다. 



//이제 css