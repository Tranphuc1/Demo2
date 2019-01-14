import FETCH_DATA from '../actions/actionsTypes';

const taskReducers = (task =[],action) =>{
    switch(action.type){
        case FETCH_DATA:
            return [
                ...task,
                {
                    item: action.item
                }
            ]
        default:
            return task;
    }
}
export default taskReducers;