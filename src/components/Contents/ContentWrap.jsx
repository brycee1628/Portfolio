import '../../css/ContentWrap.scss';
import Card from './Card';
import { useEffect, useState, useContext } from 'react';
import { PortfolioContext } from '../../contexts/StateProvider';

function ContentWrap({ getTag, menuDisplay, searchData, setSearchStr }) {
    const Portfolio = useContext(PortfolioContext);
    const [getData, setGetData] = useState(Portfolio);

    useEffect(() => {
        if (searchData.length !== 0) {
            setGetData(searchData);
        }
    }, [searchData]);

    useEffect(() => {
        if (getTag === '全部') {
            setGetData(Portfolio);
            setSearchStr('');
        } else {
            setSearchStr('');
            const newData = Portfolio.filter((v, i) => {
                return v.skill.includes(getTag);
            });
            setGetData(newData);
        }
    }, [getTag]);
    return (
        <div className={` ContentWrap ${!menuDisplay ? 'ContentWrap-w-100' : ''}`}>
            <div className='ContentWrap-flex'>
                {getData.map((v, i) => {
                    return <Card data={v} key={v.sid} />;
                })}
            </div>
        </div>
    );
}

export default ContentWrap;