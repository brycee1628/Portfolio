import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import ContentWrap from "./components/Contents/ContentWrap";
import { useState } from 'react';


function App() {
  const [getTag, setGetTag] = useState('');
  const [getPath, setGetPath] = useState('');
  const handlePath = (v) => {
    setGetPath(v);
  };
  return (<div style={{
    width: '100%', height: '300vh'
  }}>
    <Header setGetTag={setGetTag} />
    <Navbar getPath={getPath} handlePath={handlePath} />
    <ContentWrap getTag={getTag} />
  </div>

  );
}

export default App;
