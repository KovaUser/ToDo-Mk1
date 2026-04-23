import { connect } from "react-redux";
import { AddTaskActionCreator } from "../../Redux/List-reducer";
import { DeleteTaskActionCreator } from "../../Redux/List-reducer";

import List from './List'



let mapStateToProps = (state) =>{
    return{ListPage: state.ListPage}
}

const ListContainer = connect(mapStateToProps)(List)
export default ListContainer