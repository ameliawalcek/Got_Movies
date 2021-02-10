import React from 'react'
import Movie from '../Movie/Movie'
import { GridList, GridListTile } from '@material-ui/core'
import useStyles from './styles'

const Container = ({ state }) => {
    const classes = useStyles()

    return (
        <>
            Upcoming
            <div className={classes.root}>
                <GridList className={classes.gridList} cols={2.5}>
                    {state.movies?.upcoming.results.map(result => {
                        return (
                            <GridListTile style={{ width: 'auto', height: 'auto' }} key={result.id}>
                                <Movie movie={result} />
                            </GridListTile>
                        )
                    })}
                </GridList>
            </div>
            Trending
            <div className={classes.root}>
                <GridList className={classes.gridList} cols={2.5}>
                    {state.movies?.trending.results.map(result => {
                        return (
                            <GridListTile style={{ width: 'auto', height: 'auto' }} key={result.id}>
                                <Movie movie={result} key={result.id} />
                            </GridListTile>

                        )
                    })}
                </GridList>
            </div>
        </>

    )
}

export default Container
