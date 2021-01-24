import React from "react";

import './tasklist.css';

//importando imagens 
import plusIcon from '../../img/plus-icon.svg'

//prop types é para tipar as minhas props dos componentes
// ou seja colocar o tipo que uma prop tem que ser
import PropTypes from 'prop-types';

//importando o componente task Item
import TaskItem from '../TaskItem/TaskItem';

//props são os parametros para os componentes
//posso passar props assim
// export default function TaskList(props) {
//     return (
//        <div className="tasklist">
//            <div className="title">{props.title}</div>
//            <div className="content"></div>
//        </div>
//     );
// }

//ou possso passar a props quebrada com o titulo do parametro, ou seja passo a variavel
//que desejo receber diretamente
export default function TaskList({ title, taskState, onAddTask, tasks, onTaskUpdate, onDeleteTask }) {
    //passo o task state para criar de acordo com estado
    const addTask = () => {
      onAddTask("Nova Tarefa", taskState);
    };


    return (
       <div className="tasklist">
           <div className="title">{title}</div>
           <div className="content">
             {/* map recebe como parametro uma funcao com o array e reinderiza ele dentro da div */}
             {tasks.map((task) => {
              //  sempre que usar o map para reinderizar uma lista o js pede um id unico como key
               return <TaskItem 
                key={task.id}
                id={task.id} 
                title={task.title} 
                taskState={task.state}
                onTaskUpdate={onTaskUpdate}
                onDeleteTask={onDeleteTask}
                />
             })}
             {/* reinderizacao condicional 
             se tasks length == 0 entao ele executa a segunda parte */}
             { tasks.length === 0 && <div className="empty-list">Lista Vazia</div> }
             <button onClick={addTask} className="btn">
               <img src={plusIcon} alt="plus"/>
               Adicionar Tarefa
              </button>
           </div>
       </div>
    );
}


//aqui defino quais as props do componente e os tipos que essas props serao
TaskList.propTypes = {
  //a prop title deve ser string e não é opcional é obrigatória
  title: PropTypes.string.isRequired,
  onAddTask: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired
}