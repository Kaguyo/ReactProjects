import './AddTaskDiv.css'
import plus from './assets/plus.svg'

export function AddTaskDiv(){
    return (
        <div id="SearchBarDiv">
            <input id='InputSearchBar' type="text" placeholder="Adicione uma nova tarefa"/>
            <button id='CreateTaskBtn'>Criar <img src={plus} id="plus"/></button>
        </div>
    )
    
}