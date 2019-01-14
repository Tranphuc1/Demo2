import { combileReducers } from 'redux';
import taskReducers from './taskReducers';

const allReducers = combileReducers({
    taskReducers,
});
export default allReducers;