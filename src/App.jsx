import { useState } from "react";

function App(){
  return(
    <div>
      <h1>
        Componente em REACT
      </h1>
        <br/>
        <h1> Exemplo com nomes - useState </h1>
        <Nome nome={"rodrigo"} idade={20}/>
        <br />
        <h1> Exemplo de useState com números </h1>
        <Botao/>
        <h2> Exemplo de Props com nomes </h2>
        <ExibirNome nome={"Rodrigo"}/>
    </div>
  );
}

export default App;


function Nome(){
  const [nome, setNome] = useState("Matheus")
  return(
  <>
  <span> Meu nome é {nome}</span>
  <br />
  <button onClick={() => setNome("Lucas")}>Mudar nome</button>
  <br />
  </>
);
}

function ExibirNome({nome}){
  return(
    <h1>Esse é meu nome: {nome}</h1>
  )
}

function Botao(){
  const [contador, setContador] = useState(0)
  
  return(
    <div>
    <button onClick={() => setContador(contador + 1)}> 
    Botão estupido, apenas clique 
    </button>
    <p>Valor: {contador}</p>
    </div>
  );
}