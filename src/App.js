import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import ContentWrap from './components/Contents/ContentWrap';
import SkillContent from './components/Contents/SkillContent';
import HomeContent from './components/Contents/HomeContent';
import { useState, useEffect } from 'react';

function App() {
    const [getTag, setGetTag] = useState('全部');
    const [getPath, setGetPath] = useState('作品');
    const [menuDisplay, setMenuDisplay] = useState(true);
    const handlePath = (v) => {
        setGetPath(v);
    };
    const handleBurgerMenu = () => {
        setMenuDisplay(!menuDisplay);
    };

    const [breakPoint, setBreakPoint] = useState(
        window.innerWidth <= 800 ? 1 : 0
    );
    console.log(breakPoint);
    useEffect(() => {
        function checkWidth() {
            if (window.innerWidth <= 800) {
                setBreakPoint(1);
                setMenuDisplay(false);
            } else {
                setBreakPoint(0);
                setMenuDisplay(true);
            }
        }
        window.addEventListener("resize", checkWidth);
        return () => window.removeEventListener("resize", checkWidth);
    }, []);

    return (
        <div
            style={{
                width: '100%',
                height: '300vh',
            }}>
            <Header setGetTag={setGetTag} getPath={getPath} handleBurgerMenu={handleBurgerMenu} />
            <Navbar getPath={getPath} handlePath={handlePath} menuDisplay={menuDisplay} />
            {getPath === '作品' ? (
                <ContentWrap getTag={getTag} menuDisplay={menuDisplay} />
            ) : (
                ''
            )}
            {getPath === '技能' ? <SkillContent /> : ''}
            {getPath === '首頁' ? <HomeContent /> : ''}
        </div>
    );
}

export default App;
