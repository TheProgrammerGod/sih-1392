import './App.css';
import Carousel from './Components/Carousel';
import Navbar from './Components/Navbar';
import EWasteCalculator from './Components/EWasteCalculator';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carousel/>
      {/* <div className='flex'>
        <div className='w-1/2 border-2 border-bubble-gum-700 rounded-lg'><h1>MAPS</h1></div>
      <EWasteCalculator className='w-1/2'/>
      </div> */}
    </div>
  );
}

export default App;
