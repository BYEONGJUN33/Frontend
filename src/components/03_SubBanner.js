const SubBanner = () => {


    return (
        <>
            <main className="main">
                <section className="Sub-banner">
                    <div className="Sub-banner-container">
                        <a href="/" className="card-Pay">
                            <h3>Apple Pay</h3>
                            <p>이제 교통카드 도착.</p>
                            <div className="btn-top">
                                <button className="btn-learn" type="button">더 알아보기</button>
                            </div>
                        </a>

                        <a href="/" className="card-iPadair">
                            <h3>iPad Air</h3>
                            <p>이제 막강한 성능의 M3칩 탑재.</p>
                            <div className="btn-top">
                                <button className="btn-learn" type="button">더 알아보기</button>
                                <button className="btn-shop" type="button">구입하기</button>
                            </div>
                            <div className="spacer-sub"></div>
                            <p className="subhead" >
                                <span className="ai-gradient">Apple Intelligence를 위한 탄생.</span>
                            </p>
                            <p className="callout">
                                Apple Intelligence, 현재 한국어로 서비스 중<sup className="footnote1">1</sup>
                            </p>
                        </a>

                        <a href="/" className="card-WATCH">
                            <h3>WATCH</h3>
                            <h4>SERIES 10</h4>
                            <p>얇아진 두께.더 커진 존재감.</p>
                            <div className="btn-top">
                                <button className="btn-learn" type="button">더 알아보기</button>
                                <button className="btn-shop" type="button">구입하기</button>
                            </div>
                        </a>

                        <a href="/" className="card-MacBookPro">
                            <h3>MacBook Pro</h3>
                            <p>예술의 경지에 오른 스마트함.</p>
                            <div className="btn-top">
                                <button className="btn-learn" type="button">더 알아보기</button>
                                <button className="btn-shop" type="button">구입하기</button>
                            </div>
                            <div className="spacer-sub"></div>
                            <p className="subhead">
                                <span className="ai-gradient">Apple Intelligence를 위한 탄생.</span>
                            </p>
                            <p className="callout">
                                Apple Intelligence, 현재 한국어로 서비스 중<sup className="footnote1">1</sup>
                            </p>
                        </a>

                        <a href="/" className="card-Airpods4-Air">
                            <div className="Sub-card-flex">
                                <h3>AirPods 4</h3>
                                <p>아이콘의 귀환.사운드의 진화.<br />액티브 노이즈 캔슬링 탑재.<sup className="footnote2">2</sup></p>
                                <div className="btn-top">
                                    <button className="btn-learn" type="button">더 알아보기</button>
                                    <button className="btn-shop" type="button">구입하기</button>
                                </div>
                            </div>
                        </a>
                        {/* 나머지 배너들 다 이런식으로 바꿔야함 a 태그가 제일 밖으로 빼야하고 div 줄이고..... */}

                        <a href="/" className="card-TradeIn">
                            <span>
                                <h3><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                                    className="bi bi-apple" viewBox="0 0 16 16">
                                    <path
                                        d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
                                    <path
                                        d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
                                </svg>Trade In</h3>
                            </span>
                            <p>iPhone 12 이상의 모델을 보상 판매하면<br/>₩180,000-₩1,030,000<br/>상당의 크레딧이.<sup className="footnote3">3</sup></p>
                            <div className="btn-top">
                                <button className="btn-learn" type="button">견적 확인하기</button>
                            </div>
                        </a>

                    </div>
                </section>
            </main>
        </>
    )
}

export default SubBanner