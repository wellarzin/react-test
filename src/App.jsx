import { useState } from "react"
import "./App.css"

function App() {

  const [cor, setCor] = useState("vermelha.png")
  const [aviso, setAviso] = useState("Sinal vermelho, proibido passar!")

  function trocaSinaleira() {
    // alert("Você clicou na sinaleira")
    if(cor == "vermelha.png"){
        setCor("verde.png")
        setAviso("Sinal verde, pode passar passar!")
    }else if(cor == "verde.png"){
        setCor("amarela.png")
        setAviso("Sinal amarelo, cuidado!")
    }else{
        setCor("vermelha.png")
        setAviso("Sinal vermelho, proibido passar!")
    }
  }


  return (
    <>
      <h1 className="titulo">Escolinha do Wellarzin</h1>
      <h2>Aula de Sinaleiras</h2>
      <hr />
      <img 
        src={cor}
        alt="" 
        width={200}
        onClick={trocaSinaleira}
        id="sinaleira"
        />

      <h2 className="titulo">{aviso}</h2>
      <h4><i>*Clique sobre a sinaleira para trocar de cor*</i></h4>
    </>
  )  
}

export default App
