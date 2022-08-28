import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import ContentWrap from "./components/Contents/ContentWrap";
import SkillContent from "./components/Contents/SkillContent";
import { useEffect, useState } from 'react';


function App() {
  const [getTag, setGetTag] = useState('全部');
  const [getPath, setGetPath] = useState('作品');

  const handlePath = (v) => {
    setGetPath(v);
  };
  useEffect(() => {
    if (getTag === undefined) {
      setGetTag('全部');
    }
  }, [getTag]);
  return (<div style={{
    width: '100%', height: '300vh'
  }}>
    <Header setGetTag={setGetTag} getPath={getPath} />
    <Navbar getPath={getPath} handlePath={handlePath} />
    {getPath === '作品' ? <ContentWrap getTag={getTag} /> : ''}
    {getPath === '技能' ? <SkillContent /> : ''}

  </div>

  );
}

export default App;
