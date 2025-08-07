const MainBanner = () => {


    return (
        <main className="main">
            <section className="hero-banner">

                {/* 카드 1: iPhone */}
                <a href="/" className="card-iPhone">
                    <h2>iPhone</h2>
                    <p className="item-intro">iPhone 16 라인업을 만나볼까요?</p>
                    <div className="btn-top">
                        <button className="btn-learn" type="button">더 알아보기</button>
                        <button className="btn-shop" type="button">쇼핑하기</button>
                    </div>
                    <p className="subhead">
                        <span className="ai-gradient">Apple Intelligence를 위한 탄생.</span>
                    </p>
                    <p className="callout">
                        Apple Intelligence, 현재 한국어로 서비스 중<sup className="footnote1">1</sup>
                    </p>
                </a>

                {/* 카드 2: MacBook Air */}
                <a href="/" className="card-MacBook-Air">
                    <h2>MacBook Air</h2>
                    <p>하늘빛 새 컬러. <br />M4 칩 탑재로 성능도 하늘 높이.</p>
                    <div className="btn-top">
                        <button className="btn-learn" type="button">더 알아보기</button>
                        <button className="btn-shop" type="button">구입하기</button>
                    </div>
                    {/* <div className="spacer"></div> // 공간 필요하면 btn-top에 margin 등으로 대체 */}
                    <div className="spacer"></div>
                    <p className="subhead">
                        <span className="ai-gradient">Apple Intelligence를 위한 탄생.</span>
                    </p>
                    <p className="callout">
                        Apple Intelligence, 현재 한국어로 서비스 중<sup className="footnote1">1</sup>
                    </p>
                </a>

                {/* 카드 3: iPad Pro */}
                <a href="/" className="card-iPadPro">
                    {/* 필요하면 스타일 대신 CSS 클래스에서 일괄 지정 추천 */}
                    <h2>iPad Pro</h2>
                    <p>놀라우리만치 얇다. 엄청나게 강력하다.</p>
                    <div className="btn-top">
                        <button className="btn-learn" type="button">더 알아보기</button>
                        <button className="btn-shop" type="button">구입하기</button>
                    </div>
                    {/* <div className="spacer"></div> // 공간 필요하면 btn-top에 margin 등으로 대체 */}
                    <div className="spacer"></div>
                    <p className="subhead">
                        <span className="ai-gradient">Apple Intelligence를 위한 탄생.</span>
                    </p>
                    <p className="callout">
                        Apple Intelligence, 현재 한국어로 서비스 중<sup className="footnote1">1</sup>
                    </p>
                </a>

            </section>
        </main>
    )

}

export default MainBanner