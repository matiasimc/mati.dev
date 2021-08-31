import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container flex flex-col h-screen py-10 mx-auto">
      <img className="rounded-full m-auto" src="profile_pic.jpg" width="150px"></img>
      <div className="flex-1 mx-auto mt-4">
        <span className="text-center font-bold text-3xl">
          Matias Meneses
        </span>
        
        <div className="flex flex-1 py-10 text-4xl">
          <a
            className="flex-1 text-center"
            href="resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </div>
      <hr/>
      <div className="flex py-10">
        <a className="flex-1 text-center" target="_blank" rel="noopener noreferrer" href="mailto:matias.imc@gmail.com">Email</a>
        <a className="flex-1 text-center" target="_blank" rel="noopener noreferrer" href="https://t.me/matistereo">Telegram</a>
        <a className="flex-1 text-center" target="_blank" rel="noopener noreferrer" href="https://instagram.com/matigmen">Instagram</a>
        <a className="flex-1 text-center" target="_blank" rel="noopener noreferrer" href="https://github.com/matiasimc">Github</a>
      </div>
    </div>
  );
}

export default App;
