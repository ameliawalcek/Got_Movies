import React from 'react'
import { GridList, GridListTile } from '@material-ui/core'
import useStyles from './styles'
import Movie from '../../Movie/Movie'
import { useHistory } from "react-router-dom"

const List = ({ movies, category }) => {
    const classes = useStyles()
    const history = useHistory()

    const handleClick = () => {
        history.push(`/movies/search/${category.toLowerCase()}`)
    }

    return (
        <>
            {category}
            <div className={classes.root}>
                <GridList className={classes.gridList} cols={2.5}>
                    {movies.map(movie => {
                        return (
                            <GridListTile style={{ width: 'auto', height: 'auto' }} key={movie.id}>
                                <Movie movie={movie} />
                            </GridListTile>
                        )
                    })}
                </GridList>
            </div>
            <div onClick={handleClick}>more..</div>
        </>
    )
}

export default List
