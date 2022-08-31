
function HomeContent() {
    return (
        <div className="HomeContent">
            <div className="HomeContent-wrap">
                <div className="HomeContent-header">
                    <div className="HomeContent-header-img" style={{ background: `url(${window.location.href}images/min.jpg) center center / cover no-repeat` }}></div>
                    <div className="HomeContent-header-txt">
                        <div>戴偉民</div>
                        <p style={{ marginBottom: 40 }}>您好，我是偉民！喜歡嘗試新鮮事物 ，近期於資策會學習前端開發 ，並同組員協作完成一個專案。<br /><br />
                            每次克服新難題，總使人相當振奮，期許自己持續精進技術實力，協助公司解決問題，一同成長。</p>
                        <p>歡迎與我聯繫哦，謝謝！</p>
                        <p>e-mail: a0955361101@gmail.com</p>
                        <p>phone: 0903608810</p>
                        <p>Taipei , Taiwan</p>
                    </div>
                </div>
                <div className="HomeContent-body">
                    <div className="HomeContent-body-title">未來規劃</div>
                    <p className="HomeContent-body-txt">回顧從出社會到現在，經常在生活上遇到許多的困難，例如最簡單的該吃什麼來說，相信這是許多人都有的困擾。<br /><br />

                        某一次的因緣際會下，接觸到了前端這個領域，在學習開發的過程中，我做了一個轉盤來解決午餐要吃什麼的煩惱,
                        用程式提升生活的品質，我認為這是很有趣的事情。
                        <br /><br />

                        期許能夠一直保有追求知識的心，未來能夠接觸更多不同種類的技術，發揮專長與技能，幫助公司解決問題。</p>
                </div>
            </div>
        </div>
    );
}

export default HomeContent;