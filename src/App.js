import './App.css';
import Button from './components/button'
import Input from './components/input'
import Label from './components/Label';

function App() {

  const click = (e) => {
    console.log('Successfully Submitted...');
  }
  return (
    <div className="App">
      <h1>Hello</h1>
      
      <Input htmlId="username" name="name"/>
      <Input htmlId="username" name="name"/>
      <Button color='orange' type='reset' name="button1" onClick={(e)=> click()}>button1</Button>
      <Button color='orange' type='reset' name="button1" onClick={(e)=> click()}>button2</Button>
    </div>
  );
}

export default App;
