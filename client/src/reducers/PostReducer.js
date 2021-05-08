// const initialState = []

const PostReducer = (postState = [], action) => {
    switch (action.type) {
        case "FETCH_ALL": return action.payload //action.payload is coming from actions>PostActions
        case "CREATE": return [...postState, action.payload]
        default: return postState
    }
}

export default PostReducer