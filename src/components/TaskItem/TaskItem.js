import React, {useState} from "react";
import PropTypes from "prop-types"; 
import "./task-item.css"

//TaskItem({são props})
//on task update é a prop que vai receber uma funcao que atualiza a lista de tasks em app.js
export default function TaskItem({id, title, taskState, onTaskUpdate}){
    const [isEditing, setIsEditing] = useState(false);

    const [editableTitle, setEditableTitle] = useState(title);

    //o evento que vier no parametro traz a nova versão do texto inserido no input
    const onTitleChange = (event) => {
                        //event target value é o valor do input
        const newTitle = event.target.value;
        //atualizando o estado 
        setEditableTitle(newTitle);

        onTaskUpdate(id, newTitle, taskState);
    }

    //aqui eu interrompo a edicao, dando enter com o onkeypress
    const onKeyPressFunction = (event) => {
        //se a tecla apertada foi enter seto is editing igual a falso
        //e o input se transforma em div
        if (event.key == 'Enter') {
           setIsEditing(false);

           
           
        }
    }



    //reinderização condicional dependendo do estado do componente
    if (isEditing) {
        //onchange vai monitorar e mudar o estado do react
        return <input type="text" value={editableTitle} onChange={onTitleChange} onKeyPress={onKeyPressFunction}/>
    } else {
        //seto is editing igual a true mudando o campo para input
        return(<div onClick={(e) => setIsEditing(true)}>{editableTitle}</div>);
    }


}


TaskItem.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    taskState: PropTypes.string.isRequired

}