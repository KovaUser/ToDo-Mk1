import s from "./Task.module.css"

import plus from './../../../assets/plus.svg'
import minus from './../../../assets/minus.svg'
import delet from './../../../assets/delete.svg'
import edit from './../../../assets/edit.svg'

function Task(props) {
    
    
  let DeleteTask = () =>{
    props.OnDeleteClick(props.id)
  }

  let AddProgress = ()=>{
    props.AddProgress(props.id)
  }
    let DecreaseProgress = ()=>{
    props.DecreaseProgress(props.id)
  }

  let ChangeStatus=()=>{
    props.ChangeStatus(props.id)
  }


  return (
      <div className={`${s.taskContent} ${props.status === "Activ" ? s.active : s.completed}`}>
           
            <input onChange={ChangeStatus} type="checkbox" name="" />
            <div className={s.theme}>
            <p className={s.text}>{props.text}</p>
            <p className={s.emodji}>{props.emodji}</p>
            </div>

            <div className={s.progressContent}>
            <p className={s.progress}>Прогресс: {props.progress}%</p>
            <button onClick={AddProgress} className={s.changeProgress}><img src={plus} alt="plus" /></button>
            <button onClick={DecreaseProgress} className={s.changeProgress}><img src={minus} alt="minus" /></button>
            </div>
            <p className={s.date}>{props.date}</p>
            <div className={s.buttons}>
            <button className={s.changeTask}><img src={edit} alt="EDIT" /></button>
            <button onClick={DeleteTask} className={s.delete}><img src={delet} alt="delet" /></button>
            </div>

      </div>
  )
}

export default Task