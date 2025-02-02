import './App.css'
import { Header } from './Header'
import { AddTaskDiv } from './AddTaskDiv'
import { Lista } from './Lista'
import { useState } from 'react'

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
      <Lista totalConcluido={totalConcluido} totalCriado={totalCriado}/>
    </>
  )
}
 