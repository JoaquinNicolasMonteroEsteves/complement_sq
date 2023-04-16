import './App.css';
//import Result from './Result.js';

function complementary_seq (input_seq_array) {
  let ab = [input_seq_array]
  let a = ab[0].replace(/A/g, "t")
  let b = a.replace(/T/g,"a")
  let c = b.replace(/C/g,"g")
  let d = c.replace(/G/g,"c")
  let comp = d.toUpperCase()
  let res_seq = comp.split('').reverse().join('').toString()
  return `El resultado es: ${res_seq}`
}

function ckeckWrongSeq (seq_to_verify) {
  if (!seq_to_verify) { return 1 }
  let array_to_verify = seq_to_verify.split('')
  if (!array_to_verify.every((n) => {return (n === "A" || n === "T" || n === "C" || n === "G")})) {
    return 2
  } else { return false }
}

function Result() {
  let res_seq = document.getElementById("res_container") 
  let seq = document.getElementById("seq_id")
  let seq_new = seq.value.trim().toUpperCase()
  let res 
  let error = ckeckWrongSeq(seq_new)
  if (error === 1) {
    res = `Secuencia no detectada`
  } else if (error === 2) {
    res = `Letra no coincidente con nucleótido`
  } else if (!error) {
    res = complementary_seq(seq_new)
  }

  res_seq.innerHTML += 
      `<div id="res_seq_container">
          <h3>${res}</h3>
      </div>`
}

function App() {
  return (
    <div className="App">
      <div id="seq_container">
        <h2>
          Introducir la secuencia en el siguiente cuadro:
        </h2>
        <div id="comp_seq_id">
          <input type="text" name="sequence" id="seq_id" onKeyDown={(e) => {if(e.key === 'Enter') {Result()}}}></input>
          <div id="comp_button">
            <button id="comp_id" onClick={() => Result()}>Complementar</button>
            <button id="comp_id" onClick={() => {document.getElementById("res_container").innerHTML = ``}}>Borrar historial</button>
          </div>
        </div>
      </div>
      <div id="res_container">

      </div>

    </div>
  );
}

export default App;
