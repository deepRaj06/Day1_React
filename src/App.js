// import logo from './logo.svg';
// import './App.css';
import Heading from './components/Static.jsx'
import Navbar from './components/Navbar.js';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <div className="App">
      <Heading head="Mobile Operating System" list1='Android' list2='Blackberry' list3='iPhone' list4='Windows Phone'></Heading>
      <Heading head="Mobile Manufacturers" list1='Samsung' list2='HTC' list3='Micromax' list4='Apple'></Heading>
    </div>
    </>
  );
}

export default App;
