import React from 'react'
import Post from './Post/Post'
import useStyles from './Styles'
import { CircularProgress, Grid } from '@material-ui/core'

//redux
import { useSelector } from 'react-redux'

const Posts = (props) => {
    const classes = useStyles()
    const PostsState = useSelector((stateArg) => stateArg.PostReducer)

    console.log(PostsState)
    return (
        // If we have posts in db, return it otherwise loading
        !PostsState.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {
                    PostsState.map((val) => (
                        <Grid key={val._id} item xs={12} sm={6}>
                            <Post postProps={val} setCurrentId={props.setCurrentId} />
                        </Grid>
                    ))
                }
            </Grid>
        )
    )
}

export default Posts