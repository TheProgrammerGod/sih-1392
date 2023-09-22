import './App.css';
import Carousel from './Components/Carousel';
import Navbar from './Components/Navbar';
import EwasteCalculator from './Components/EWasteCalculator';
import Process from './Components/Process';
import Footer from './Components/Footer';
import ContactUs from './Components/ContactUs';
import MapImg from "../src/assets/map.png";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carousel/>

      {/* <div className='w-1/2 border-2 border-bubble-gum-700 rounded-lg'><h1>MAPS</h1></div> */}
      
      <Process/>
      <div className='w-screen max-w-full flex'>
      
      <img className='w-[50%]' src={MapImg}></img>
      <EwasteCalculator/>
      </div>
      <ContactUs/>
      <Footer/>
      
      

    </div>
  );
}

export default App;
