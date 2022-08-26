import '../../css/TagWrap.scss';
import Tag from './Tag';
import { v4 } from 'uuid';
import { useState, useEffect } from 'react';

function TagWrap({ setGetTag }) {
    const tags = ['全部', 'React', 'JavaScript', 'CSS'];
    const [thisTag, setThisTag] = useState(0);
    const handleTag = (number) => {
        setThisTag(number);
    };

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