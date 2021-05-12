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
        // If we have posts in db, return it otherwise loading with <CircularProgress />
        !PostsState.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {
                    PostsState.map((val) => (
                        // display each post with post component withing Posts component
                        <Grid key={val._id} item xs={12} sm={6}> {/* here val is all the arrray */}
                            <Post postProps={val} setCurrentId={props.setCurrentId} />
                        </Grid>
                    ))
                }
            </Grid>
        )
    )
}

export default Posts