import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import ContentWrap from "./components/Contents/ContentWrap";
import { useState } from 'react';


function App() {
  const [getTag, setGetTag] = useState('');
  return (<div style={{
    width: '100%', height: '300vh'
  }}>
    <Header setGetTag={setGetTag} />
    <Navbar />
    <ContentWrap getTag={getTag} />
  </div>

  );
}

export default App;
