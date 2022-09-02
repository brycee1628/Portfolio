import BurgerMenu from "./BurgerMenu";
import SearchIcon from "./SearchIcon";
import GithubIcon from "./GithubIcon";
import '../../css/Header.scss';
import TagWrap from '../Tag/TagWrap';
function Header({ setGetTag, getPath, handleBurgerMenu }) {

    return (
        <div className="Header-container">
            <div className="Header">
                <div className="Logo-wrap">
                    <div className="BurgerMenu" onClick={() => handleBurgerMenu()}>
                        <BurgerMenu />
                    </div>
                    <div className="Logo">
                        <img src={`https://res.cloudinary.com/dcq1rdl1w/image/upload/v1662127832/0_B_ie6brp.png`} alt="Logo" />
                    </div>
                </div>
                <div className="Header-middle">
                    <input type="text" className="Header-search" placeholder="搜尋" />
                    <div className="SearchIcon-wrap">
                        <div className="SearchIcon">
                            <SearchIcon />
                        </div>
                    </div>
                </div>
                <div className="Header-end">
                    <div className="Header-end-icon">
                        <a href="https://github.com/a0955361101" target="_blank" rel="noreferrer">
                            <GithubIcon />
                        </a>
                    </div>
                </div>
            </div>
            {getPath === '作品' ? <TagWrap setGetTag={setGetTag} getPath={getPath} /> : ''}

        </div>

    );
}

export default Header;