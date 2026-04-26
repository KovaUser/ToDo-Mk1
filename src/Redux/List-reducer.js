let initialStore = {
    ToDoData:[
        {id: 1, status:"Activ", text:"Доделать ToDO", emodji:"💻",progress:0, date:"18.02.2039"}
    ],
    NextId:2,
    TaskTextInput  :' ',
    TaskEmodjiInput:' ',
    TaskDateInput  :  ' '
}

let ListReducer = (state = initialStore, action) => {


    switch(action.type){
        case 'ADD-TASK':{
        let NewTask = {id:state.NextId, status:"Activ", text:action.text, emodji:action.emodji, progress:0, date:action.date}
            return {
                ...state,
                ToDoData: [...state.ToDoData, NewTask],
                nextId: state.nextId + 1  // увеличиваем счетчик
            }
        }
        case 'DELETE-TASK':{
            return{
                ...state,
                ToDoData: state.ToDoData.filter(task=>task.id !== action.id)
            }
        }
        case 'ADD-PROGRESS':{
            return {
                ...state,
                ToDoData: state.ToDoData.map(task => {
                    if (task.id === action.id && task.progress < 100) {
                        return {...task, progress: task.progress + 20}
                    }
                    return task
                })
            }
        }
        case 'DECREASE-PROGRESS':{
            return {
                ...state,
                ToDoData: state.ToDoData.map(task => {
                    if (task.id === action.id && task.progress > 0) {
                        return {...task, progress: task.progress - 20}
                    }
                    return task
                })
            }
        }
        case 'UPDATE-TASK-TEXT-INPUT':{
            return{
                ...state,
                TaskTextInput: action.text
            }
        }
        case 'UPDATE-TASK-EMODJI-INPUT':{
            return{
                ...state,
                TaskEmodjiInput: action.emodji
            }
        }
        case 'UPDATE-TASK-DATE-INPUT':{
            return{
                ...state,
                TaskDateInput: action.date
            }
        }
        case 'CHANGE-STATUS':{
            return{
                ToDoData: state.ToDoData.map(task => {
                if (task.id === action.id) {  
                    return {
                        ...task, 
                        status: task.status === "Activ" ? "Completed" : "Activ"
                    }
                }
                return task
                })
            }
        }
        default: return state
    }
}

export default ListReducer


export const AddTaskActionCreator = (TaskData) =>{
    return{type: "ADD-TASK", text:TaskData.text, emodji:TaskData.emodji, date:TaskData.date}
}
export const DeleteTaskActionCreator = (id) =>{
    return{type: "DELETE-TASK", id:id}
}


export const ChangeStatusActionCreator = (id) =>{
    return{type: "CHANGE-STATUS", id:id}
}


export const AddProgressActionCreator = (id) =>{
    return{type: "ADD-PROGRESS", id:id}
}
export const DecreaseProgressActionCreator = (id) =>{
    return{type: "DECREASE-PROGRESS", id:id}
}


export const UpdateTaskTextInputActionCreator = (text) =>{
    return{type: "UPDATE-TASK-TEXT-INPUT", text:text}
}
export const UpdateTaskEmodjiInputActionCreator = (emodji) =>{
    return{type: "UPDATE-TASK-EMODJI-INPUT", emodji:emodji}
}
export const UpdateTaskDateInputActionCreator = (date) =>{
    return{type: "UPDATE-TASK-DATE-INPUT", date:date}
}
  

  