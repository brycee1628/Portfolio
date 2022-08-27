import '../../css/TagWrap.scss';
import Tag from './Tag';
import { v4 } from 'uuid';
import { useState, useEffect } from 'react';

function TagWrap({ setGetTag, getPath }) {
    const workTag = ['全部', 'React', 'JavaScript', 'CSS'];
    let tags = [];
    const [thisTag, setThisTag] = useState(0);
    const handleTag = (number) => {
        setThisTag(number);
    };
    switch (getPath) {
        case '作品':
            tags = workTag;
            break;

        default:
            break;
    }

    useEffect(() => {
        setGetTag(tags[thisTag]);
    }, [thisTag]);
    return (
        <div className="TagWrap">
            {tags.map((v, i) => {
                return (
                    <Tag key={v4()} thisTag={thisTag} index={i} handleTag={handleTag}>{v}</Tag>
                );
            })}

        </div>
    );
}

export default TagWrap;