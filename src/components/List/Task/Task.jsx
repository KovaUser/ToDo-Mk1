import s from "./Task.module.css"

import plus from './../../../assets/plus.svg'
import minus from './../../../assets/minus.svg'
import delet from './../../../assets/delete.svg'
import edit from './../../../assets/edit.svg'

function Task(props) {
    
    



  return (
      <div className={`${s.taskContent} ${props.status === "Activ" ? s.active : s.completed}`}>
           
            <input type="checkbox" name="" />
            <div className={s.theme}>
            <p className={s.task}>{props.task}</p>
            <p className={s.emodji}>{props.emodji}</p>
            </div>

            <div className={s.progressContent}>
            <p className={s.progress}>Прогресс: {props.progress}</p>
            <button className={s.changeProgress}><img src={plus} alt="plus" /></button>
            <button className={s.changeProgress}><img src={minus} alt="minus" /></button>
            </div>
            <p className={s.date}>{props.date}</p>
            <div className={s.buttons}>
            <button className={s.changeTask}><img src={delet} alt="delet" /></button>
            <button className={s.delete}><img src={edit} alt="edit" /></button>
            </div>

      </div>
  )
}

export default Task