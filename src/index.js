import React from 'react';
import ReactDOM from 'react-dom/client';


function CauculadoraIMC(props){
  const imc = props.peso / (props.altura * props.altura)
  let retorno = ""

  if (imc < 18.5){
    retorno = "peso"
  }else if (imc < 25){
    retorno = "Normal"
  }else if (imc < 30){
    retorno = "Sobrepeso"
  }else{
    retorno = "Obeso"
  }

  return <p>{retorno}</p>
}

function App(){
  return(
    <div>
      <h1>Questão 2 - Cauculadora de IMC</h1>
      <CauculadoraIMC peso = {70} altura = {1.75}/>
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <App/>
  </div>
);

