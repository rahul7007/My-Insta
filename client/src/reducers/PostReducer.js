// const initialState = []

const PostReducer = (postState = [], action) => {
    switch (action.type) {
        case "UPDATE": return postState.map((post) => (post._id === action.payload._id ? action.payload : post));
        case "FETCH_ALL": return action.payload //action.payload is coming from actions>PostActions
        case "CREATE": return [...postState, action.payload]
        default: return postState
    }
}

export default PostReducer


// case "UPDATE": return postState.map((post) => (post._id === action.payload._id ? action.payload : post));
// post._id : display all available posts _ids
// postState : all the available posts e.g. : (3) [{…}, {…}, {…}]

// action.payload: hold the whole post, which we update, comes from the action file

// creator: "Rahul1"
// message: "Happy new year"
// selectedFile: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAA
// tags: ["happy new year"]
// title: "New Year's Eve"
// _id: "609aaf1edaf76a4e086d16b0"
// __proto__: Object