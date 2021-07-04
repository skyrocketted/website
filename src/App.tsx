import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="min-h-screen object-fill bg-gradient-to-r from-red-500 to-blue-900 flex items-center justify-center flex-col">
        <figure className="rounded-lg ring-4 ring-gray-300 bg-gray-50 w-full max-w-xs m-2">
          <img src="https://avatars.githubusercontent.com/u/78935393" 
            width="260"
            height="260"
            className="animate-wiggle mx-auto rounded-full outline-none hover:ring-4 hover:ring-pink-500 hover:ring-opacity-50 mt-2"
            alt=""
          />
          <h3 className="text-center text-bold p-6">
            Hello!
            <br />
            I am Sky, better known as Skyrocket(ted) or Sky🚀.
            <br />
            I'm a developer from the Central London area in the UK.
          </h3>
        </figure>
      </div>
    </div>
  );
}

export default App;
