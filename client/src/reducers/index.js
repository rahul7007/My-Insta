import { combineReducers } from 'redux'

import PostReducer from './PostReducer'


const rootReducer = combineReducers({
    PostReducer: PostReducer,
    //or we can directly use PostReducer
    //reducer2
    //reducer3 etc.
})

export default rootReducer