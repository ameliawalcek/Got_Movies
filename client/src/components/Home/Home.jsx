import React from 'react'
import Movie from '../Movie/Movie'
import { GridList, GridListTile } from '@material-ui/core'
import useStyles from './List/styles'
import List from './List/List'

const Home = ({ state }) => {

    return (
        <>
            <List category={'Upcoming'} movies={state.movies?.upcoming.results} />
            <List category={'Trending'} movies={state.movies?.trending.results} />
        </>

    )
}

export default Home
