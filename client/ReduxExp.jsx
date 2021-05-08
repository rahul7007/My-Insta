//step1: create src/actions/PostsAction.js

//step2: create src/reducers/PostsReducer.js & index.js

//step3: modify main index.js with below code & create store also there

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//redux
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";

const store = createStore(rootReducer, compose(applyMiddleware(thunk))); //this is the centralised store

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

//step4: modify src>reducres>index.js

import { combineReducers } from "redux";

import PostReducer from "./PostReducer";

const rootReducer = combineReducers({
  PostReducer: PostReducer,
  //or we can directly use PostReducer
  //reducer2
  //reducer3 etc.
});

export default rootReducer;

// step5: modify reducers>PostReducer.js

const initialState = [];

const PostReducer = (postState = initialState, action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return postState;
    case "CREATE":
      return postState;
    default:
      return postState;
  }
};

export default PostReducer;

// now we are successfully connected to rudux, now we can start making use of it

// step6: dispatch getPost action in the App.js with following code

import { useDispatch } from "react-redux"; //it allows us to dispatch an action

//define dispatch
const dispatch = useDispatch();

// find a way where we're actually going to dispatch an action, and the best place is inside useEffect()
useEffect(() => {
  dispatch();
}, []);

// we need to pass an action (getPost) in dispatch(), so let's create an action in src>actions>PostAction and import it to this file
import { getPost } from "../src/actions/PostAction";

useEffect(() => {
  dispatch(getPost());
}, [dispatch]);

// step7: export getPost from src>actions>PostAction

// import all apis
import * as api from "../api";

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
    const { data } = await api.getPostsVariable(); //fetch the api
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

// as soon as this action gets dispatched form App.js, we'll go to PostReducer and there we'll have to handle the logic of
// fetching all posts
// step8: modify src>reducers>PostReducer

switch (action.type) {
  case "FETCH_ALL":
    return action.payload; //action.payload is coming from actions>PostActions
  case "CREATE":
    return postState;
  default:
    return postState;
}

// step9:now we'll have to retrieve the data in our components (components>Posts>Posts.js)
// inside components>Posts>Posts.js we'll have to fetch the data from global redux store and for that we need Selector
// modify components>Posts>Posts.js with the below code

import { useSelector } from "react-redux";

const Posts = () => {
  const myState = useSelector((stateArg) => stateArg.PostReducer);

  console.log(myState);
};

export default Posts;
