import FETCH_DATA from './actionsTypes';

export const fetdata = (item) => {
    return {
        type:FETCH_DATA,
        item:item
    }
}