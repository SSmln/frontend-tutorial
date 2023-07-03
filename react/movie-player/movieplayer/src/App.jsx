import { useState } from 'react';
import FileUpload from './FileUpload/FileUpload.jsx';
import ReactVideoPlayer from './ReactVideoPlayer.js';

function App() {
  const [ files , setFiles] = useState([{
    name : 'myfile.mp4'
  }])


  return (
    <div  classNmae= "App">
    <header>
    <p classNmae="title">목록 불러오기</p>
    <FileUpload files= {files} setFiles={setFiles}></FileUpload>
    </header>  
        <ReactVideoPlayer />
    </div>

  
    

  );
}

export default App;
