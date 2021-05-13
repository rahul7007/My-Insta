import React, { useEffect, useState } from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'

import memories from './image/memories.png'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import useStyles from './Styles'
import './indexBackground.css'

//redux
import { useDispatch } from 'react-redux' //it allows us to dispatch an action
import { getPosts } from '../src/actions/PostAction'

const App = () => {

  const [currentId, setCurrentId] = useState(null)

  const [delId, setDelId] = useState(null) //del

  const classes = useStyles()

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])



  return (
    <>
      <Container maxWidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
          <img className={classes.image} src={memories} alt="icon" height="60" />
        </AppBar>


        <Grow in>
          <Container>
            <Grid container justify="space-between" alignItems="stretch" spacing={3}>
              <Grid item xs={12} sm={7}>
                {/* Since setCurrentId is only available in the post component, and we need to share it with Form component,
                    we have only App component, where both the components gettimg merge. That's why we're bringing the
                    currentId to the APP by passing it as props to both the comonent - Post & Form */}
                <Posts setCurrentId={setCurrentId} setDelId={setDelId} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form currentId={currentId} setCurrentId={setCurrentId} delId={delId} setDelId={setDelId} />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </>
  );
}

export default App;
