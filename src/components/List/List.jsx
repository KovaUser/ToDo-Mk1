import React, {useRef} from "react"

import s from "./List.module.css"

import Task from "./Task/Task"

function List(props) {

    let TaskTextInput   = useRef(null)
    let TaskEmodjiInput = useRef(null)
    let TaskDateInput   = useRef(null)


    /* Передаем значения задачи наверх */
    let UpdateTaskTextInput = () =>{
      let text = TaskTextInput.current.value
      props.UpdateTaskTextInput(text)
    }
    let UpdateTaskEmodjiInput = () =>{
      let emodji = TaskEmodjiInput.current.value
      props.UpdateTaskEmodjiInput(emodji)
    }
    let UpdateTaskDateInput = () =>{
      let date = TaskDateInput.current.value
      props.UpdateTaskDateInput(date)
    }
    let OnAddNewTask = () =>{
      let NewTaskData = {text:TaskTextInput.current.value, emodji: TaskEmodjiInput.current.value, date: TaskDateInput.current.value }
      props.AddNewTask(NewTaskData)
    }
    
    let OnDeleteClick =(id)=>{
      props.DeleteTask(id)
    }


    let AddProgress = (id) =>{
      props.AddProgress(id)
    }

    let DecreaseProgress = (id)=>{
      props.DecreaseProgress(id)
    }

    let ChangeStatus=(id)=>{
      props.ChangeStatus(id)
    }

  return (
      <section className={s.section}>
           
        <div className="container">
           {props.ListPage.ToDoData.map((p)=><Task ChangeStatus={ChangeStatus} AddProgress={AddProgress} DecreaseProgress={DecreaseProgress} OnDeleteClick={OnDeleteClick} status={p.status} text={p.text} emodji={p.emodji} progress={p.progress} date={p.date} id={p.id}/>)}
        <p>{props.ListPage.TaskTextInput  }</p>
        <p>{props.ListPage.TaskEmodjiInput}</p>
        <p>{props.ListPage.TaskDateInput  }</p>
        <textarea value={props.ListPage.TaskTextInput} onInput={UpdateTaskTextInput   } ref={TaskTextInput}  placeholder="Задача" name="" id=""></textarea>
        <textarea value={props.ListPage.TaskEmodjiInput} onInput={UpdateTaskEmodjiInput } ref={TaskEmodjiInput} placeholder="Эмодзи" name="" id=""></textarea>
        <textarea value={props.ListPage.TaskDateInput} onInput={UpdateTaskDateInput   } ref={TaskDateInput} placeholder="Дата" name="" id=""></textarea>
        <button onClick={OnAddNewTask}>Добавить задачу</button>
        </div>
      </section>
  )
  
}

export default List
