import React, { useContext } from "react";

const Portfolio = [
    { sid: 1, name: '0+B電商網站', img: 'https://res.cloudinary.com/dcq1rdl1w/image/upload/c_scale,h_1040,w_1920/v1662128114/course_dxpbgi.png', people: '團隊', skill: 'HTML / CSS / SCSS / JavaScript / React / Node.js / MySQL', url: 'https://www.youtube.com/watch?v=kRzrteQSzls' },
    { sid: 2, name: '臨摹-星宇航空官網靜態網站', img: 'https://res.cloudinary.com/dcq1rdl1w/image/upload/c_scale,h_1040,w_1920/v1662128088/starlux_vmroqv.png', people: '個人', skill: 'HTML / CSS ', url: 'https://a0955361101.github.io/01-practice-layout/' },
    { sid: 3, name: '臨摹-復刻長榮航空官網靜態網站', img: 'https://res.cloudinary.com/dcq1rdl1w/image/upload/c_scale,h_1040,w_1920/v1662128101/evaair_kmtk8x.png', people: '個人', skill: 'HTML / CSS ', url: 'https://a0955361101.github.io/02-practice-layout/' },
    { sid: 4, name: '選擇困難救星', img: 'https://res.cloudinary.com/dcq1rdl1w/image/upload/c_scale,h_1040,w_1920/v1662472894/104_%E8%BD%89%E7%9B%A4_dx7tn5.png', people: '個人', skill: 'HTML / CSS / JavaScript', url: 'https://a0955361101.github.io/turntable/' },
    { sid: 5, name: '我的個人簡歷', img: 'https://res.cloudinary.com/dcq1rdl1w/image/upload/c_scale,h_1040,w_1920/v1662462555/104_-_%E4%BD%9C%E5%93%81%E9%A0%81_woa0i2.png', people: '個人', skill: 'HTML / CSS / JavaScript / tailwind / React / GitHubPages', url: 'https://a0955361101.github.io/Portfolio/' },
    { sid: 6, name: 'tailwind練習 - 登入頁', img: 'https://res.cloudinary.com/dcq1rdl1w/image/upload/c_scale,h_1040,w_1920/v1662461737/104_-_%E7%99%BB%E5%85%A5%E9%A0%81%E9%9D%A2_p3z7re.png', people: '個人', skill: 'HTML / CSS / SCSS / JavaScript / tailwind / React / RWD /  GitHubPages', url: 'https://a0955361101.github.io/tailwind/' },

];

export const PortfolioContext = React.createContext(Portfolio);



function StateProvider(props) {
    const { children } = props;
    return (<PortfolioContext.Provider value={Portfolio}>
        {children}
    </PortfolioContext.Provider>
    );
}

export default StateProvider;