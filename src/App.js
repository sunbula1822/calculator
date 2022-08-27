import React,{useState} from 'react';
import './App.css';


const App=()=>{

const [result,setResult]=useState("");

const clickHandler=(event)=>{
  
setResult(result.concat(event.target.value))

}

const cDisplay=()=>{
  setResult("");
}

const calculate=()=>{
  setResult(eval(result).toString());
}

  return(
    <div className='calculator'>
      <input type="text" placeholder="0" id="display" value={result}/>
      <input type="button" value="1" className="button" onClick={clickHandler}/>
      <input type="button" value="2" className="button" onClick={clickHandler}/>
      <input type="button" value="3" className="button" onClick={clickHandler}/>
      <input type="button" value="+" className="button special" onClick={clickHandler}/>
      <input type="button" value="4" className="button" onClick={clickHandler}/>
      <input type="button" value="5" className="button" onClick={clickHandler}/>
      <input type="button" value="6" className="button" onClick={clickHandler}/>
      <input type="button" value="-" className="button special" onClick={clickHandler}/>
      <input type="button" value="7" className="button" onClick={clickHandler}/>
      <input type="button" value="8" className="button" onClick={clickHandler}/>
      <input type="button" value="9" className="button" onClick={clickHandler}/>
      <input type="button" value="*" className="button special" onClick={clickHandler}/>
      <input type="button" value="C" className="button clear" onClick={cDisplay}/>
      <input type="button" value="0" className="button" onClick={clickHandler}/>
      <input type="button" value="=" className="button" onClick={calculate}/>
      <input type="button" value="/" className="button special" onClick={clickHandler}/>
    </div>
  )
}

export default App;