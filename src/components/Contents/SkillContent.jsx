import JavaScript from '../Icons/JavaScript';
import Html from '../Icons/Html';
import Css from '../Icons/Css';
import Bootstrap from '../Icons/Bootstrap';
import ReactIcon from '../Icons/ReactIcon';
import Jquery from '../Icons/Jquery';
import NodeJs from '../Icons/NodeJs';
import GitHub from '../Icons/GitHub';
function SkillContent() {
    const skills = [
        {
            name: 'JavaScript',
            svg: <JavaScript />
        }, {
            name: 'HTML',
            svg: <Html />
        },
        {
            name: 'CSS',
            svg: <Css />
        },
        {
            name: 'Bootstrap',
            svg: <Bootstrap />
        },
        {
            name: 'React',
            svg: <ReactIcon />
        },
        {
            name: 'jQuery',
            svg: <Jquery />
        },
        {
            name: 'Node.js',
            svg: <NodeJs />
        },
        {
            name: 'GitHub',
            svg: <GitHub />
        },
    ];
    return (
        <div className="SkillContent">
            <div className='skill-icon-wrap'>
                {skills.map((v, i) => {
                    return (
                        <div className='skill-icon' key={i}>
                            {v.svg}
                            <p>{v.name}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );

}


export default SkillContent; 