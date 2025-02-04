import './App.css'
import { useState } from 'react'
import { Header } from './Header'
import { AddTaskDiv } from './AddTaskDiv'
import { Estatisticas } from './Estatisticas'
import { Lista } from  './Lista'

interface TarefasType {
  id : number
  texto : string
}

export function App() {
  const[totalCriado, setTotalCriado] = useState(0)
  const[totalConcluido, setTotalConcluido] = useState(0)
  const[tarefas, setTarefas] = useState<TarefasType[] | []>([])
  const[tarefaAtual, setTarefaAtual] = useState("")

  function addTask(){
    setTotalCriado(value => value + 1)
    setTarefas([...tarefas, {id : tarefas.length + 1, texto : tarefaAtual}])
  }

  return (
    <>
      <Header/>
      <AddTaskDiv addTask={addTask} setTarefaAtual={setTarefaAtual}/>
      <Estatisticas totalConcluido={totalConcluido} totalCriado={totalCriado}/>
      <Lista/>
    </>
  )
}
 