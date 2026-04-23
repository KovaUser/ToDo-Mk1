let initialStore = {
    ToDoData:[
        {id: 1, status:"Activ", task:"Доделать ToDO", emodji:"💻",progress:10, date:"18.02.2039"}
    ],
    NextId:2
}

let ListReducer = (state = initialStore, action) => {


    switch(action.type){
        case 'ADD-TASK':{
        let NewTask = {id:state.NextId, status:action.status, task:action.task, emodji:action.emodji, progress:0, date:action.date}
            return {
                ...state,
                ToDoDate: [...state.ToDoData, NewTask],
                nextId: state.nextId + 1  // увеличиваем счетчик
            }
        }
        case 'DELETE-TASK':{
            return{
                ...state,
                ToDoData: state.ToDoData.filter(task=>task.id !== action.id)
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