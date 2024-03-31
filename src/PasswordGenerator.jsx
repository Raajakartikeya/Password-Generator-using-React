import { useState } from "react"

export const PasswordGenerator = () => {
  const [length,setLength] = useState(8);
  const [upper, setUpper] = useState(true);
  const [lower, setLower] = useState(true);
  const [number, setNumber] = useState(true);
  const [symbol, setSymbol] = useState(true);
  const [password,setPassword] = useState("");

  function shuffle(s) {
    var arr = s.split(''); 
    var n = arr.length;        
    for(var i=0 ; i<n-1 ; ++i) {
      var j = Math.floor(Math.random() * n);   
      var temp = arr[i];             
      arr[i] = arr[j];
      arr[j] = temp;
    }
    s = arr.join('');             
    return s;                        
  }

  function generatePassword()
  {
    let charSet = "";
    let generatedPassword = "";
    let upperSet = "QWERTYUIOPASDFGHJKLZXCVBNM";
    let lowerSet =  "qwertyuiopasdfghjklzxcvbnm";
    let numberSet = "0123456789";
    let symbolSet = "!@#$%&*"; 
    let c = 0;
    if(upper) {
      charSet+= upperSet;
      generatedPassword += upperSet[Math.floor(Math.random() * upperSet.length)];
      c = c + 1;
    }
    if(lower) {
      charSet+= lowerSet;
      generatedPassword += lowerSet[Math.floor(Math.random() * lowerSet.length)];
      c = c + 1;
    }
    if(number){
      charSet+= numberSet;
      generatedPassword += numberSet[Math.floor(Math.random() * numberSet.length)];
      c = c + 1;
    }
    if(symbol){
       charSet+= symbolSet;
       generatedPassword += symbolSet[Math.floor(Math.random() * symbolSet.length)];
       c = c + 1;
    }
    if(charSet==""){
      alert("Include some characters");
      return;
    }
    else if(length<=0)
    {
      alert("Length of the password should be greater than 0");
      return;
    }
    for(let i = 0; i < length-c; i++)
    {
      const index = Math.floor(Math.random() * charSet.length);
      generatedPassword+=charSet[index];
    }
    generatedPassword = shuffle(generatedPassword);
    setPassword(generatedPassword);
  }
  return (
    <>
    <div className="password-generator">
      <h2>Random Password Generator</h2>
      <div className="input-group">
        <label htmlFor="num">Password Length:</label>
        <input type="number" id="num" min="1" value={length} onChange={(e)=>setLength(parseInt(e.target.value))}/>
      </div>
      <div className="checkbox">
        <input type="checkbox" id="upper" checked={upper} 
        onChange={(e)=>setUpper(e.target.checked)} />
        <label htmlFor="upper">Include Uppercase</label>
      </div>
      <div className="checkbox">
        <input type="checkbox" id="lower" checked={lower} 
        onChange={(e)=>setLower(e.target.checked)}/>
        <label htmlFor="lower">Include Lowercase</label>
      </div>
      <div className="checkbox">
        <input type="checkbox" id="numbers" checked={number}
        onChange={(e)=>setNumber(e.target.checked)} />
        <label htmlFor="numbers">Include Numbers</label>
      </div>
      <div className="checkbox">
        <input type="checkbox" id="symbol" checked={symbol} 
        onChange={(e)=>setSymbol(e.target.checked)} />
        <label htmlFor="symbol">Include Symbols</label>
      </div>
      <button className="generate-btn" onClick={generatePassword}>Generate Password</button>
      <div className="password">
        <input type="text" readOnly value={password}/>
        <sl-copy-button className="copy-btn" value={password}></sl-copy-button>

      </div>
    </div>
    </>
  )
}
