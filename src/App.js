import './App.css';
import 'react-json-pretty/themes/monikai.css';
import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { loadEPUB } from 'jw-epub-parser';
import JSONPretty from 'react-json-pretty';

function App() {

  const [meetings, setMeetings] = useState([]);

  const handleChange = (file) => {
    loadEPUB(file).then((e) => {
      setMeetings(e);
    });
  };

  return (
    <div className="container">
        { meetings.length > 0 ? <JSONPretty data={meetings}></JSONPretty> : <>
            <h3>Upload your File :</h3>
            <FileUploader handleChange={handleChange} name="file" types={["EPUB"]} />
          </> }
    </div>
  );
}

export default App;