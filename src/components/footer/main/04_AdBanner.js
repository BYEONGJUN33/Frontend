import React, { useState } from 'react';
// 1. useState훅을 가져오기 => 쉽게 만들고 관리하기 위한 기능 불러오기 




const AdBanner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    // 2. 슬라이드 인덱스 상태 만들기 
    // => 초기값 0으로 초기화 및 함수로 변경 가능 선언

    const totalSlides = 9;
    // 3. 예시값, 슬라이드 카드 총 개수 인덱스 범위 관리하는 데 사용

    // const cardClass = 
    //     idx === currentIndex
    //         ? "Ad-card active"
    //         : idx === (currentIndex - 1 + totalSlides) % totalSlides ||
    //             idx === (currentIndex + 1) % totalSlides
    //             ? "Ad-card neighbor"
    //             : "Ad-card";
    // 뭐야 이게 무슨 클래스 액티브된 거 지정인데 모르니 패스 



    return (
        <main className="main">
            <section className="Ad-banner">
                <div className="carousel-window">
                    <button onClick={() => setCurrentIndex((currentIndex - 1 + totalSlides) % totalSlides)}>
                        Prev
                    </button>
                    <button onClick={() => setCurrentIndex((currentIndex + 1) % totalSlides)}>
                        Next
                    </button>
                    {/* %totalSlides로 개수 규격안에서 이동가능케  */}

                    <div className="carousel-track"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {/* // 슬라이드 트랙에 transform 스타일로 현재 슬라이드 인덱스에 맞게 좌우 이동을 설정  */}
                        {/* 예) 첫번째 -0% 두 번째 -100% 세 번째 -200% ???????????????????? */}

                        <a href="/" className="Ad-card">
                            <img
                                src="https://is1-ssl.mzstatic.com/image/thumb/HsJqgEXXaevqJ94-tyz0jQ/980x551.jpg"
                                className="Ad-img"
                                alt="스릴러 광고 배너"
                            />
                            <div className='card-overlay'>
                                <div className="btn-stream-now">지금 시청하기</div>
                                <p>
                                    <span className='Ad-bold'>스릴러</span>
                                    <span>·</span>
                                    두 요원 사이에 놓인 세상에서 가장 위험한 비밀.
                                </p>
                            </div>
                        </a>

                        <a href="/" className="Ad-card">
                            <img
                                src="https://is1-ssl.mzstatic.com/image/thumb/EviF5KEP5X6ycr0I5QR_IA/980x551.jpg"
                                className="Ad-img"
                                alt="코미디 광고 배너"
                            />
                            <div className='card-overlay'>
                                <div className="btn-stream-now">지금 시청하기</div>
                                <p>
                                    <span className='Ad-bold'>코미디</span>
                                    <span>·</span>
                                    그가 돌아온다.
                                </p>
                            </div>
                        </a>

                        <a href="/" className="Ad-card">
                            <img
                                src="https://is1-ssl.mzstatic.com/image/thumb/hCfBMF1R8mitgipZtRrJIw/980x551.jpg"
                                className="Ad-img"
                                alt="드라마 광고 배너"
                            />
                            <div className='card-overlay'>
                                <div className="btn-stream-now">지금 시청하기</div>
                                <p>
                                    <span className='Ad-bold'>드라마</span>
                                    <span>·</span>
                                    우리 안에는 운명을 스스로 바꿀 용기가 있다
                                </p>
                            </div>
                        </a>

                        <a href="/" className="Ad-card">
                            <img
                                src="https://is1-ssl.mzstatic.com/image/thumb/vWrruv_JuOZkCwWQG6ZVWw/980x551.jpg"
                                className="Ad-img"
                                alt="스릴러 광고 배너"
                            />
                            <div className='card-overlay'>
                                <div className="btn-stream-now">지금 시청하기</div>
                                <p>
                                    <span className='Ad-bold'>스릴러</span>
                                    <span>·</span>
                                    일보다 중요한 것은 없다
                                </p>
                            </div>
                        </a>

                        <a href="/" className="Ad-card">
                            <img
                                src="https://is1-ssl.mzstatic.com/image/thumb/jKsrHHJKf192OLDN6kMh4g/980x551.jpg"
                                className="Ad-img"
                                alt="액션 광고 배너"
                            />
                            <div className='card-overlay'>
                                <div className="btn-stream-now">지금 시청하기</div>
                                <p>
                                    <span className='Ad-bold'>액션</span>
                                    <span>·</span>
                                    Only in theaters June 27.
                                </p>
                            </div>
                        </a>

                        <a href="/" className="Ad-card">
                            <img
                                src="https://is1-ssl.mzstatic.com/image/thumb/71SCc2C4bOuYVD9-3P-PQw/980x551.jpg"
                                className="Ad-img"
                                alt="다큐멘터리 광고 배너"
                            />
                            <div className='card-overlay'>
                                <div className="btn-stream-now">지금 시청하기</div>
                                <p>
                                    <span className='Ad-bold'>다큐멘터리</span>
                                    <span>·</span>
                                    MLB 최고의 라이벌전이 펼쳐지는 월드시리즈의 짜릿한 현장을 들여다본다.
                                </p>
                            </div>
                        </a>

                        <a href="/" className="Ad-card">
                            <img
                                src="https://is1-ssl.mzstatic.com/image/thumb/SSVr2ZxJ3bUc655YFoRy1Q/980x551.jpg"
                                className="Ad-img"
                                alt="SF 광고 배너"
                            />
                            <div className='card-overlay'>
                                <div className="btn-stream-now">지금 시청하기</div>
                                <p>
                                    <span className='Ad-bold'>SF</span>
                                    <span>·</span>
                                    살아남으려면, 목숨 걸고 지켜야 한다.
                                </p>
                            </div>
                        </a>

                        <a href="/" className="Ad-card">
                            <img
                                src="https://is1-ssl.mzstatic.com/image/thumb/PpNA7zp0nJJN23khb-XDUw/980x551.jpg"
                                className="Ad-img"
                                alt="드라마 광고 배너"
                            />
                            <div className='card-overlay'>
                                <div className="btn-stream-now">지금 시청하기</div>
                                <p>
                                    <span className='Ad-bold'>드라마</span>
                                    <span>·</span>
                                    스티븐 스필버그, 톰 행크스, 게리 고츠만 제작
                                </p>
                            </div>
                        </a>

                        <a href="/" className="Ad-card">
                            <img
                                src="https://is1-ssl.mzstatic.com/image/thumb/xO0BO6SH877VpYQg4t5yjw/980x551.jpg"
                                className="Ad-img"
                                alt="어드벤처 광고 배너"
                            />
                            <div className='card-overlay'>
                                <div className="btn-stream-now">지금 시청하기</div>
                                <p>
                                    <span className='Ad-bold'>어드벤처</span>
                                    <span>·</span>
                                    어떤 비밀은 결코 묻히지 않는다
                                </p>
                            </div>
                        </a>
                    </div>

                    {/* 여기에 슬라이드 카드 9개 그대로 복사 붙여넣기 */}
                    {/* ... 기존의 <div className="Ad-card"> ~~ </div> 9개 ... */}

                </div >
            </section >
        </main >
    );
};






export default AdBanner






// const AdBanner = () => {
//     return (
//         <>
//             <main className="main">
//                 <section className="Ad-banner">
//                     <div className="carousel-window">
//                         <div className="carousel-track">
//                             <div className="Ad-card">
//                                 <a href={"/"}>
//                                     <img src="https://is1-ssl.mzstatic.com/image/thumb/HsJqgEXXaevqJ94-tyz0jQ/980x551.jpg"
//                                         className="Ad-img" />
//                                     <div className="btn-stream-now">
//                                         지금 시청하기
//                                     </div>
//                                     <p><span>스릴러</span><span>·</span>두 요원 사이에 놓인 세상에서 가장 위험한 비밀.</p>
//                                 </a>
//                             </div>
//                             <div className="Ad-card">

//                                 <a href={"/"}>
//                                     <img src="https://is1-ssl.mzstatic.com/image/thumb/EviF5KEP5X6ycr0I5QR_IA/980x551.jpg"
//                                         className="Ad-img" />
//                                     <div className="btn-stream-now">
//                                         지금 시청하기
//                                     </div>
//                                     <p><span>코미디</span><span>·</span>그가 돌아온다.</p>
//                                 </a>
//                             </div>
//                             <div className="Ad-card">
//                                 <a href={"/"}>
//                                     <img src="https://is1-ssl.mzstatic.com/image/thumb/hCfBMF1R8mitgipZtRrJIw/980x551.jpg"
//                                         className="Ad-img" />
//                                     <div className="btn-stream-now">
//                                         지금 시청하기
//                                     </div>
//                                     <p><span>드라마</span><span>·</span>우리 안에는 운명을 스스로 바꿀 용기가 있다</p>
//                                 </a>
//                             </div>
//                             <div className="Ad-card">
//                                 <a href={"/"}>
//                                     <img src="https://is1-ssl.mzstatic.com/image/thumb/vWrruv_JuOZkCwWQG6ZVWw/980x551.jpg"
//                                         className="Ad-img" />
//                                     <div className="btn-stream-now">
//                                         지금 시청하기
//                                     </div>
//                                     <p><span>스릴러</span><span>·</span>일보다 중요한 것은 없다</p>
//                                 </a>
//                             </div>
//                             <div className="Ad-card">
//                                 <a href={"/"}>
//                                     <img src="https://is1-ssl.mzstatic.com/image/thumb/jKsrHHJKf192OLDN6kMh4g/980x551.jpg"
//                                         className="Ad-img" />
//                                     <div className="btn-stream-now">
//                                         지금 시청하기
//                                     </div>
//                                     <p><span>액션</span><span>·</span>Only in theaters June 27.</p>
//                                 </a>
//                             </div>
//                             <div className="Ad-card">
//                                 <a href={"/"}>
//                                     <img src="https://is1-ssl.mzstatic.com/image/thumb/71SCc2C4bOuYVD9-3P-PQw/980x551.jpg"
//                                         className="Ad-img" />
//                                     <div className="btn-stream-now">
//                                         지금 시청하기
//                                     </div>
//                                     <p><span>다큐멘터리</span><span>·</span>MLB 최고의 라이벌전이 펼쳐지는 월드시리즈의 짜릿한 현장을 들여다본다.</p>
//                                 </a>
//                             </div>
//                             <div className="Ad-card">
//                                 <a href={"/"}>
//                                     <img src="https://is1-ssl.mzstatic.com/image/thumb/SSVr2ZxJ3bUc655YFoRy1Q/980x551.jpg"
//                                         className="Ad-img" />
//                                     <div className="btn-stream-now">
//                                         지금 시청하기
//                                     </div>
//                                     <p><span>SF</span><span>·</span>살아남으려면, 목숨 걸고 지켜야 한다.</p>
//                                 </a>
//                             </div>
//                             <div className="Ad-card">
//                                 <a href={"/"}>
//                                     <img src="https://is1-ssl.mzstatic.com/image/thumb/PpNA7zp0nJJN23khb-XDUw/980x551.jpg"
//                                         className="Ad-img" />
//                                     <div className="btn-stream-now">
//                                         지금 시청하기
//                                     </div>
//                                     <p><span>드라마</span><span>·</span>스티븐 스필버그, 톰 행크스, 게리 고츠만 제작</p>
//                                 </a>
//                             </div>
//                             <div className="Ad-card">
//                                 <a href={"/"}>
//                                     <img src="https://is1-ssl.mzstatic.com/image/thumb/xO0BO6SH877VpYQg4t5yjw/980x551.jpg"
//                                         className="Ad-img" />
//                                     <div className="btn-stream-now">
//                                         지금 시청하기
//                                     </div>
//                                     <p><span>어드벤처</span><span>·</span>어떤 비밀은 결코 묻히지 않는다</p>
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//             </main>
//         </>
//     )
// }

