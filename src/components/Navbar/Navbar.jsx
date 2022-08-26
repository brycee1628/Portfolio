import '../../css/Navbar.scss';
import { v4 } from 'uuid';
function Navbar() {
    const path = ['首頁', '技能', '作品'];
    return (
        <div className="Navbar-wrap">
            {path.map((v, i) => {
                return <div className='Navbar-path' key={v4()}>{v}</div>;
            })}
        </div>
    );

}

export default Navbar;