import './App.css';
import Carousel from './Components/Carousel';
import Navbar from './Components/Navbar';
import EwasteCalculator from './Components/EwasteCalculator';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carousel/>
      <EwasteCalculator/>
      
      {/* <div className='flex'>
        <div className='w-1/2 border-2 border-bubble-gum-700 rounded-lg'><h1>MAPS</h1></div>
      <EWasteCalculator className='w-1/2'/>
      </div> */}
    </div>
  );
}

export default App;
