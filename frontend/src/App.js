import './App.css';
import React from 'react';
import SignInOutContainer from "./containers";
import ResponsiveAppBar from './components/Appbar';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar/>
      {/* <SignInOutContainer/> */}
    </div>
  );
}

export default App;
