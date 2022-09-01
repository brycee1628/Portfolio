import '../../css/Navbar.scss';
import { v4 } from 'uuid';

function Navbar({ handlePath, getPath, menuDisplay }) {
    const path = ['首頁', '技能', '作品'];

    return (
        <div className={`Navbar-wrap ${!menuDisplay ? 'Navbar-display-none' : 'Navbar-display-block'}`}>
            {path.map((v, i) => {
                return <div className={`Navbar-path ${getPath === v ? 'Navbar-path-focus' : ''}`} key={v4()} onClick={() => handlePath(v)}>{v}</div>;
            })}
        </div>
    );

}

export default Navbar;