import { ChangeEvent } from 'react';
import './AddTaskDiv.css'
import plus from './assets/plus.svg'

interface AddTaskDivProps {
    addTask : () => void
    setTarefaAtual: React.Dispatch<React.SetStateAction<string>>;
}


export function AddTaskDiv({addTask, setTarefaAtual}: AddTaskDivProps){
    function handleText(event : ChangeEvent<HTMLInputElement>){
        setTarefaAtual(event.target.value)
    }

    return (
        <div id="searchBarDiv">
            <input id='inputSearchBar' type="text" placeholder="Adicione uma nova tarefa"
            onChange={handleText}/>

            <button id='createTaskBtn' onClick={addTask}>Criar <img src={plus} id="plus"/></button>
        </div>
    )
}