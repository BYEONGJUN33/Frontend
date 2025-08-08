import styled from "styled-components"
import style from "./01_Header.module.css"

// Css-In-JS 라이브러리로 JS 안에 CSS 작성하게하는 것이며 뒤에 백틱으로 사용가능 
const GlobalHeader = styled.div`
    position: fixed;
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    right: 0;
    left: 0;
    top: 0;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    z-index: 3;
    width: 100%;
    background: rgba(255, 255, 255, 0.8);
    /* 색상지정에 약간 불투명 */
    backdrop-filter: blur(10px);
    /* 약간의 투명 + 블러 효과  */
    height: 44px;
    max-height: 44px; 
    `

const Header = () => {

    return (
        // JSX
        <>
            <GlobalHeader>
                <nav id="globalnav">
                    <ul className={style.headernav}>
                        <li><a href="/" className="logo" aria-label="Apple Home">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="bi bi-apple" viewBox="0 0 16 16">
                                <path
                                    d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
                                <path
                                    d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
                            </svg>
                        </a></li>
                        <li><a href="/">
                            스토어
                        </a></li>
                        <li><a href="/">
                            Mac
                        </a></li>
                        <li><a href="/">
                            iPad
                        </a></li>
                        <li><a href="/">
                            iPhone
                        </a></li>
                        <li><a href="/">
                            Watch
                        </a></li>
                        <li><a href="/">
                            Vision
                        </a></li>
                        <li><a href="/">
                            AirPods
                        </a></li>
                        <li><a href="/">
                            TV 및 홈
                        </a></li>
                        <li><a href="/">
                            엔터테이먼트
                        </a></li>
                        <li><a href="/">
                            액세서리
                        </a></li>
                        <li><a href="/">
                            고객지원
                        </a></li>
                        <li><a href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="bi bi-search" viewBox="0 0 16 16">
                                <path
                                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                            </svg>
                        </a></li>
                        <li><a href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="bi bi-bag" viewBox="0 0 16 16">
                                <path
                                    d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                            </svg>
                        </a></li>
                    </ul>
                </nav>
            </GlobalHeader>
        </>
    )
}

export default Header