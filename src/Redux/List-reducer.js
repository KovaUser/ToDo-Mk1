let initialStore = {
    ToDoData:[
        {id: 1, status:"Activ", task:"Доделать ToDO", emodji:"💻",progress:0, date:"18.02.2039"}
    ],
    NextId:2
}

let ListReducer = (state = initialStore, action) => {


    switch(action.type){
        case 'ADD-TASK':{
        let NewTask = {id:state.NextId, status:action.status, task:action.task, emodji:action.emodji, progress:0, date:action.date}
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
        default: return state
    }
}

export default ListReducer


export const AddTaskActionCreator = (TaskData) =>{
    return{type: "ADD-TASK", status:TaskData.status, task:TaskData.task, emodji:TaskData.emodji, progress:TaskData.progress, date:TaskData.date}
}
export const DeleteTaskActionCreator = (id) =>{
    return{type: "ADD-TASK", id:id}
}
export const AddProgressActionCreator = (id) =>{
    return{type: "ADD-PROGRESS", id:id}
}
export const DecreaseProgressActionCreator = (id) =>{
    return{type: "DECREASE-PROGRESS", id:id}
}