import { useState } from "react"

export const PasswordGenerator = () => {
  const [length,setLength] = useState(8);
  const [upper, setUpper] = useState(true);
  const [lower, setLower] = useState(true);
  const [number, setNumber] = useState(true);
  const [symbol, setSymbol] = useState(true);
  const [password,setPassword] = useState("");

  function generatePassword()
  {
    let charSet = "";
    if(upper) charSet+= "QWERTYUIOPASDFGHJKLZXCVBNM";
    if(lower) charSet+= "qwertyuiopasdfghjklzxcvbnm";
    if(number) charSet+= "0123456789"
    if(symbol) charSet+="!@#$%^&*_+-=;:"; 

    let generatedPassword = "";
    for(let i = 0; i < length; i++)
    {
      const index = Math.floor(Math.random() * charSet.length);
      generatedPassword+=charSet[index];
    }
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
