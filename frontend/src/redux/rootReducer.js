import {combineReducers} from 'redux';
import tagsReducer from '../redux/Tags/tagsReducer'
import colorsListReducer from './Colors/colorReducer';
import materialListReducer from './Materials/materialReducer';

export default combineReducers(
    { 
        tags:tagsReducer ,
        materials:materialListReducer ,
        colors : colorsListReducer ,
    }
)
