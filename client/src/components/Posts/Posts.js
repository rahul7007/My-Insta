import React from 'react'
import Post from './Post/Post'
// import useStyles from './Styles'

//redux
import { useSelector } from 'react-redux'

const Posts = () => {
    // const classes = useStyles()
    const myState = useSelector((stateArg) => stateArg.PostReducer)

    console.log(myState)
    return (
        <div>
            <h1>Posts</h1>
            <Post />
            <Post />
        </div>
    )
}

export default Posts