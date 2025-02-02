import './Lista.css'

interface ListaProps {
    totalConcluido : number
    totalCriado : number
} 

export function Lista({totalCriado, totalConcluido}: ListaProps){
    return (
        <div id="listaDiv">
            <div id="pai">
                <div className='filho'>
                    <p className="tasksP">Tarefas criadas</p>
                    <div className="counterDiv">{totalCriado}</div>
                </div>
                <div className='filho'>
                    <p className="tasksP" id="tasksConcluidas">Concluídas</p>
                    <div className="counterDiv">{totalConcluido}</div>
                </div>
            </div>
        </div>
    )
    
}
