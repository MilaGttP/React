import './App.css';
import React from 'react';

function App(props) {
  var header = props.header, author = props.author, text = props.text;
  
  if (header === undefined) header = "Default header";
  if (author === undefined) author = "Default author";
  if (text === undefined) text = "Default text";

  return (
    <div className="article-div">
      <h2>{header}</h2>
      <h4>{author}</h4>
      <p>{text}</p>
    </div>
  );
}

export default App;
