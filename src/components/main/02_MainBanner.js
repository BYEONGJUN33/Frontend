import style from "./02_MainBanner.module.css"
import styleP from "../PublicUse.module.css"


const MainBanner = () => {


    return (
        <main className={styleP.main}>
            <section className={style['hero-banner']}>
                {/* 카드 1: iPhone */}
                <a href="/" className={style['card-iPhone']}>
                    <h2>iPhone</h2>
                    <p className={style['item-intro']}>iPhone 16 라인업을 만나볼까요?</p>
                    <div className={styleP['btn-top']}>
                        <button className={styleP['btn-learn']} type="button">더 알아보기</button>
                        <button className={styleP['btn-shop']} type="button">쇼핑하기</button>
                    </div>
                    <p className={styleP.subhead}>
                        <span className={styleP['ai-gradient']}>Apple Intelligence를 위한 탄생.</span>
                    </p>
                    <p className={styleP.callout}>
                        Apple Intelligence, 현재 한국어로 서비스 중<sup className={style.footnote1}>1</sup>
                    </p>
                </a>

                {/* 카드 2: MacBook Air */}
                <a href="/" className={style['card-MacBook-Air']}>
                    <h2>MacBook Air</h2>
                    <p>하늘빛 새 컬러. <br />M4 칩 탑재로 성능도 하늘 높이.</p>
                    <div className={styleP['btn-top']}>
                        <button className={styleP['btn-learn']} type="button">더 알아보기</button>
                        <button className={styleP['btn-shop']} type="button">구입하기</button>
                    </div>
                    <div className={styleP.spacer}></div>
                    <p className={styleP.subhead}>
                        <span className={styleP['ai-gradient']}>Apple Intelligence를 위한 탄생.</span>
                    </p>
                    <p className={styleP.callout}>
                        Apple Intelligence, 현재 한국어로 서비스 중<sup className={style.footnote1}>1</sup>
                    </p>
                </a>

                {/* 카드 3: iPad Pro */}
                <a href="/" className={style['card-iPadPro']}>
                    <h2>iPad Pro</h2>
                    <p>놀라우리만치 얇다. 엄청나게 강력하다.</p>
                    <div className={styleP['btn-top']}>
                        <button className={styleP['btn-learn']} type="button">더 알아보기</button>
                        <button className={styleP['btn-shop']} type="button">구입하기</button>
                    </div>
                    <div className={styleP.spacer}></div>
                    <p className={styleP.subhead}>
                        <span className={styleP['ai-gradient']}>Apple Intelligence를 위한 탄생.</span>
                    </p>
                    <p className={styleP.callout}>
                        Apple Intelligence, 현재 한국어로 서비스 중<sup className={style.footnote1}>1</sup>
                    </p>
                </a>
            </section>
        </main>
    )

}

export default MainBanner