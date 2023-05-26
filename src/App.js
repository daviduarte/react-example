import logo from './logo.svg';
import './App.css';
import Pergunta from './Pergunta.js';
import { useState } from 'react'; 

function App() {
  return (
    <div className="App">
      <p>Hello</p>
      <ButtonState />
    </div>
  );
}

function ButtonState(){
  const [title, setTitle] = useState(" - ")
  const [count, setCount] = useState(0)

  const updateTitleClicked = () => {
    setTitle("Ok, título atualizado")
  }

  const updateCountClicked = () => {
    setCount(count + 1)
  }  

  return(
    <div>
      <p>Title: {title}</p>
      <p>Counter {count}</p>
      <button onClick={updateTitleClicked}> Update Tittle</button>
      <button onClick={updateCountClicked}> Update Counter</button>
    </div>
  );
}

function AddCorrecao(){

  
  return (
    <div>
      <form>
        <label for="text-form">Insira a correção para a pergunta</label>
        <input type='text' id="text-form" />
      </form>
    </div>
  );
}




export default App;
