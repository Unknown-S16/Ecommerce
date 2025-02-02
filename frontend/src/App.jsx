import NavBar from './pages/NavBar';
import Cluster from './pages/header/Cluster';
import Main from './pages/main/Main';
import { useState } from 'react';
import "./index.css"

export default function App() {
  const [On,setOn] = useState(false)
  return (
    <>
      <NavBar mode={On} setMode={setOn}/>
      <Cluster mode={On} />
      <Main/>
    </>
  );
}
