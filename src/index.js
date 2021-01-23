import React from "react";
import ReactDOM from "react-dom";

import App from "./App";


//index js starta a aplicacao onde a unica pagina html carregada é o index.html
const rootElement = document.getElementById("root");
//função react dom recebe dois parametros, o primeiro é um componente react e o segundo é 
//um elemento onde vai ser montado o componente react
//A FUNÇÃO RENDER DA BIBLIOTECA REACT DOM ESTÁ REINDERIZANDO O COMPONENTE APP DENTRO DA DIV ROOT
//(rootElement)
ReactDOM.render(
      <App />,
  rootElement
);
