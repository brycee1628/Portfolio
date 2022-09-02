import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import ContentWrap from './components/Contents/ContentWrap';
import SkillContent from './components/Contents/SkillContent';
import HomeContent from './components/Contents/HomeContent';
import { useState, useEffect, useContext } from 'react';
import StateProvider, { PortfolioContext } from './contexts/StateProvider';

function App() {
    const Portfolio = useContext(PortfolioContext);
    const [getTag, setGetTag] = useState('全部');
    const [getPath, setGetPath] = useState('作品');
    const [menuDisplay, setMenuDisplay] = useState(true);
    const [searchStr, setSearchStr] = useState('');
    const [searchData, setSearchData] = useState([]);
    const [breakPoint, setBreakPoint] = useState(
        window.innerWidth <= 800 ? 1 : 0
    );
    const handlePath = (v) => {
        setGetPath(v);
    };
    const handleBurgerMenu = () => {
        setMenuDisplay(!menuDisplay);
    };

    const handleSearch = () => {
        const newPortfolio = Portfolio.filter((v, i) => {
            return v.name.includes(searchStr) || v.skill.includes(searchStr) || v.people.includes(searchStr);
        });
        setSearchData(newPortfolio);
    };

    useEffect(() => {
        if (searchStr === '') {
            setSearchData(Portfolio);
        }
    }, [searchStr]);

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
        <StateProvider>
            <div
                style={{
                    width: '100%',
                }}>
                <Header setGetTag={setGetTag} getPath={getPath} handleBurgerMenu={handleBurgerMenu} handleSearch={handleSearch} setSearchStr={setSearchStr} searchStr={searchStr} />
                <Navbar getPath={getPath} handlePath={handlePath} menuDisplay={menuDisplay} />
                {getPath === '作品' ? (
                    <ContentWrap getTag={getTag} menuDisplay={menuDisplay} searchData={searchData} setSearchStr={setSearchStr} />
                ) : (
                    ''
                )}

                {getPath === '技能' ? <SkillContent /> : ''}
                {getPath === '首頁' ? <HomeContent /> : ''}
            </div>
        </StateProvider>
    );
}

export default App;
