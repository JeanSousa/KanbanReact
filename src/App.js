import React, {useState} from "react";

//este css é global para a aplicação
import "./styles.css";

//O componente navbar é inserido dentro do componente app como uma simples 
import Navbar from "./components/Navbar/Navbar";

import TaskList from "./components/TaskList/TaskList";

let idAcc = 0;

const generateId = () => {
   idAcc = idAcc + 1;
   return idAcc;
}

//app é um componente react 
//componentes react são funçoes geralmente escritas com a primeira letra em maiusculo
export default function App() { //o retorno tem que ser apenas um nó html por exemplo
  //essa div abaixo encapsula os h*

  const [tasks, setTasks] = useState([]);

  const addTask = (title, state) => {
     const newTask = {
       id: generateId(),
       title,
       state
     }

     setTasks((existingTasks) => {
       // os 3 pontos é o desestruturador que irá adicionar as tarefas já existentes ao array
       //alem disso irá incrementar com a nova task
        return [...existingTasks, newTask];
     });
  }

  const updateTask = (id, title, state) => {
      setTasks((existingTasks) => {
        return existingTasks.map((task) => {
          //se o task.id for igual o id que a funcao recebeu como parametros
           if(task.id === id) {
              return {...task, title, state};
           }else{
              return task;
           }
         });
      });
  }



  return (
    //jsx é a sintaxe java script com o xml
    <div className="App">
      <Navbar/>
      <div className="container">
        {/* passo o parametro (props) title para o componente como se fosse um atributo html */}
        {/* posso passar o title como codigo java script usando interpolacao ex: title={1 + 1} */}
       <TaskList  
       title={`Pendente`} 
       onAddTask={addTask}
       taskState="Pendente"
       tasks={tasks.filter( t => t.state === "Pendente")} 
       onTaskUpdate={updateTask} 
       />
       {/* O estado do componente é independente em cada instancia */}
       <TaskList  
       title="Fazendo"
       onAddTask={addTask}
       taskState="Fazendo"
       tasks={tasks.filter( t => t.state === "Fazendo")} 
       onTaskUpdate={updateTask} 
       />
        <TaskList  
       title="Completa"
       onAddTask={addTask}
       taskState="Completa"
       tasks={tasks.filter( t => t.state === "Completa")} 
       onTaskUpdate={updateTask} 
       />
     
      </div>
    </div>
  );
}