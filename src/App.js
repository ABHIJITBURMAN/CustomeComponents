import './App.css';
import Button from './components/button'
import Input from './components/input'
import Label from './components/Label';
import SliderComponent from './components/SliderComponent/imageSlider';
function App() {

  const click = (e) => {
    console.log('Successfully Submitted...');
  }
  return (
    <div className="App">
      <SliderComponent />
    </div>
  );
}

export default App;
