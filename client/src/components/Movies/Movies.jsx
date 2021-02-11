import React, { useEffect } from 'react'
import { getTitleSearch, setSearch } from '../../actions/movie'
import Movie from '../Movie/Movie'

const Movies = (props) => {
    const { match, state, dispatch } = props
    const { search } = match.params

    useEffect(() => {
        if (state.movies[search]) {
            setSearch(state.movies[search], dispatch)
        } else {
            getTitleSearch(search, dispatch)
        }
        
        return () => {
            setSearch({ page: 0, total_pages: 0, results: [] }, dispatch)
        }
    }, [])

    return (
        <div>
            {state.movies.search?.results.map(movie => {
                return <Movie movie={movie} key={movie.id} />
            })}
        </div>
    )
}

export default Movies
