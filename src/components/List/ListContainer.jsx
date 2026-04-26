import { connect } from "react-redux";
import { AddTaskActionCreator } from "../../Redux/List-reducer";
import { DeleteTaskActionCreator } from "../../Redux/List-reducer";

import List from './List'


import { UpdateTaskTextInputActionCreator   } from "../../Redux/List-reducer";
import { UpdateTaskEmodjiInputActionCreator } from "../../Redux/List-reducer";
import { UpdateTaskDateInputActionCreator   } from "../../Redux/List-reducer";

import { AddProgressActionCreator } from "../../Redux/List-reducer";

import { DecreaseProgressActionCreator } from "../../Redux/List-reducer";

import { ChangeStatusActionCreator } from "../../Redux/List-reducer";

let mapStateToProps = (state) =>{
    return{ListPage: state.ListPage}
}

let mapDispatchToProps = (dispatch) =>{
    return{
        UpdateTaskTextInput: (text) => {
            dispatch(UpdateTaskTextInputActionCreator(text))
        },
        UpdateTaskEmodjiInput: (emodji) =>{
            dispatch(UpdateTaskEmodjiInputActionCreator(emodji))
        },
        UpdateTaskDateInput: (date) =>{
            dispatch(UpdateTaskDateInputActionCreator(date))
        },

        AddNewTask:(TaskData)=>{
            dispatch(AddTaskActionCreator(TaskData))
        },
        DeleteTask:(id)=>{
            dispatch(DeleteTaskActionCreator(id))
        },
        AddProgress: (id)=>{
            dispatch(AddProgressActionCreator(id))
        },
        DecreaseProgress: (id)=>{
            dispatch(DecreaseProgressActionCreator(id))
        },
        ChangeStatus: (id)=>{
            dispatch(ChangeStatusActionCreator(id))
        }

    }
}

const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List)
export default ListContainer




