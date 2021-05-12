import { Typography, Paper, TextField, Button } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import useStyles from './Styles'
import FileBase from 'react-file-base64'
import { useDispatch, useSelector } from 'react-redux'
import { createPosts, updatePost } from '../../actions/PostAction'

const Form = (props) => {
    const classes = useStyles()

    const [postData, setPostData] = useState({
        creator: '', title: '', message: '', tags: '', selectedFile: ''
    })

    const post = useSelector((state) => (props.currentId ? state.PostReducer.find((p) => p._id === props.currentId) : null));
    // state.PostReducer = whatever the PostReducer returns when we call (UPDATE, FETCH_ALL, CREATE)
    // state.PostReducer will be all the three array we're getting from ::: "dispatch({ type: "FETCH_ALL", payload: data.data })"


    const dispatch = useDispatch();

    useEffect(() => {
        if (post) setPostData(post);
    }, [post]);

    const handleSubmit = (e) => {
        e.preventDefault()

        //check if there is an id, if so, we'll update post rathan than create a new one
        if (props.currentId) {
            dispatch(updatePost(props.currentId, postData))
        } else {
            dispatch(createPosts(postData))
        }
    }

    const clear = () => {

    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">Creating a Memory</Typography>
                <TextField
                    name="creator"
                    variant="outlined"
                    label="Creator"
                    fullWidth
                    value={postData.creator}
                    //onChange={(e)=>setPostData({creator:e.target.value})} //this will change the e.target.value for all so we'll use spread operator
                    onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
                />
                <TextField
                    name="title"
                    variant="outlined"
                    label="Title"
                    fullWidth
                    value={postData.title}
                    onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                />
                <TextField
                    name="message"
                    variant="outlined"
                    label="Message"
                    fullWidth
                    value={postData.message}
                    onChange={(e) => setPostData({ ...postData, message: e.target.value })}
                />
                <TextField
                    name="tags"
                    variant="outlined"
                    label="Tags"
                    fullWidth
                    value={postData.tags}
                    onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
                />
                <div className={classes.fileInput}>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
                    />
                </div>
                <Button
                    className={classes.buttonSubmit}
                    value="contained"
                    color="primary"
                    size="large"
                    type="submit"
                    fullWidth
                >Submit</Button>
                <Button
                    className={classes.buttonSubmit}
                    value="contained"
                    color="secondary"
                    size="small"
                    onClick={clear}
                    fullWidth
                >Clear</Button>
            </form>
        </Paper>
    )
}

export default Form