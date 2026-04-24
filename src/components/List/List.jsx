import s from "./List.module.css"

import Task from "./Task/Task"

function List(props) {
    

  return (
      <section className={s.section}>
           
        <div className="container">
           {props.ListPage.ToDoData.map((p)=><Task status={p.status} task={p.task} emodji={p.emodji} progress={p.progress} date={p.date}/>)}
        </div>
             
        <textarea placeholder="Задача" name="" id=""></textarea>
        <textarea placeholder="Эмодзи" name="" id=""></textarea>
        <textarea placeholder="Дата" name="" id=""></textarea>
      </section>
  )
  
}

export default List
