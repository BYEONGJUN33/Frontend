const FooterBottom = () => {


    return (
        <>
            <footer class="footer">
                <section className="footer-bottom">

                    <div className="footer-ABC">
                        <div className="footer-shop">
                            다양한 쇼핑 방법:
                            <a href="/">Apple Store를 방문</a>하거나,
                            <a href="/">리셀러</a>를 찾아보거나,
                            <a href="tel:080-330-8877">080-330-8877</a>번으로 전화하세요.
                        </div>

                        <div className="footer-legal">
                            <div className="footer-copyright">
                                Copyright © 2025 Apple Inc. 모든 권리 보유.
                            </div>
                            <ul className="footer-legal-links">
                                <li><a href="/">개인정보 처리방침</a></li>
                                <li><a href="/">웹 사이트 이용 약관</a></li>
                                <li><a href="/">판매 및 환불</a></li>
                                <li><a href="/">법적 고지</a></li>
                                <li><a href="/">사이트 맵</a></li>
                            </ul>
                            <div className="footer-locale">
                                <a href="/" title="국가 또는 지역을 선택하세요.">대한민국</a>
                            </div>
                        </div>
                    </div>

                    <p className="requirement">
                        <span>애플코리아 유한회사 | </span>
                        <span>대표이사: Mark Lee(마크리) | </span>
                        <span>주소: 서울특별시 강남구 영동대로 517 | </span>
                        <span>전화: 080-333-4000 | </span>
                        <span>
                            <a href="https://support.apple.com/ko-kr">https://support.apple.com/ko-kr</a> |
                        </span>
                        <span>사업자등록번호: 120-81-84429 | </span> <br/>
                        <span>통신판매업신고번호: 제2011-서울강남-00810호 | </span>
                        <span>호스팅 서비스 제공: Apple Inc. | </span>
                        <span>
                            <a href="http://www.ftc.go.kr/bizCommPop.do?wrkr_no=1208184429">사업자정보</a>
                        </span>
                    </p>


                </section>
            </footer>
        </>
    )
}

export default FooterBottom