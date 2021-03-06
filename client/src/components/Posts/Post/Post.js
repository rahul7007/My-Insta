import React from 'react'
import useStyles from './Styles'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import DeleteIcon from '@material-ui/icons/Delete'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import moment from 'moment'
import { deletePost, likePost } from '../../../actions/PostAction'
import { useDispatch } from 'react-redux'

const Post = (props) => {
    const classes = useStyles()
    const dispatch = useDispatch();
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={props.postProps.selectedFile} title={props.postProps.title} />
            <div className={classes.overlay}>
                <Typography variant="h6">{props.postProps.creator}</Typography>
                <Typography variant="body2">{moment(props.postProps.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{ color: 'white' }} size="small" onClick={() => { props.setCurrentId(props.postProps._id) }}>{props.postProps.creator}
                    <MoreHorizIcon fontSize="default" />
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary" component="h2">{props.postProps.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <Typography className={classes.title} gutterBottom variant="h5" component="h2">{props.postProps.title}</Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{props.postProps.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => { dispatch(likePost(props.postProps._id)) }}>
                    <ThumbUpAltIcon fontSize="small" /> Like {props.postProps.likeCount}
                </Button>
                <Button size="small" color="primary" onClick={() => { dispatch(deletePost(props.postProps._id)) }}>
                    <DeleteIcon fontSize="small" /> Delete
                </Button>
            </CardActions>
        </Card>
    )
}

export default Post