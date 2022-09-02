import React, { useContext } from "react";

const Portfolio = [
    { sid: 1, name: '0+B電商網站', img: 'https://res.cloudinary.com/dcq1rdl1w/image/upload/c_scale,h_1040,w_1920/v1662128114/course_dxpbgi.png', people: '團隊', skill: 'HTML / CSS / SCSS / JavaScript / React / Node.js / MySQL / GitHub', url: 'https://www.youtube.com/watch?v=kRzrteQSzls' },
    { sid: 2, name: '臨摹-星宇航空官網靜態網站', img: 'https://res.cloudinary.com/dcq1rdl1w/image/upload/c_scale,h_1040,w_1920/v1662128088/starlux_vmroqv.png', people: '個人', skill: 'HTML / CSS / GitHub', url: 'https://a0955361101.github.io/01-practice-layout/' },
    { sid: 3, name: '臨摹-復刻長榮航空官網靜態網站', img: 'https://res.cloudinary.com/dcq1rdl1w/image/upload/c_scale,h_1040,w_1920/v1662128101/evaair_kmtk8x.png', people: '個人', skill: 'HTML / CSS / GitHub', url: 'https://a0955361101.github.io/02-practice-layout/' },
    { sid: 4, name: '選擇困難救星', img: 'https://res.cloudinary.com/dcq1rdl1w/image/upload/c_scale,h_1040,w_1920/v1662128056/turntable_mmwjtq.png', people: '個人', skill: 'HTML / CSS / JavaScript/ GitHub', url: 'https://a0955361101.github.io/turntable/' },
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