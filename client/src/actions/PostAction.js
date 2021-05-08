//here we're fetching the data with api & sending the data with action.payload which we'll handle in src>reducers>PostReducer

// import all apis
import * as api from '../api'


//action creators
/*
const getPosts = () => {
    const action = {
        type: "FETCH_ALL", payload: [] //payload is where we'll store all our posts}
    }
    return action
}
*/

// we successfully created the action, but the problem is we're working with asynchronous data, to fetch all the posts, somethimes
// it's gonna have to pass, for that we use redux-thunk

//modify above code now

export const getPosts = () => async (dispatch) => {

    try {
        const { data } = await api.getPostsVariable() //fetch the api
        //console.log(data.data)
        dispatch({ type: "FETCH_ALL", payload: data.data })
    } catch (error) {
        console.log(error.message)
    }

}



export const createPosts = (payloadArg) => async (dispatch) => {

    try {
        const { data } = await api.createPostsVariable(payloadArg) //fetch the api
        dispatch({ type: "CREATE", payload: data.data })
    } catch (error) {
        console.log(error)
    }

}