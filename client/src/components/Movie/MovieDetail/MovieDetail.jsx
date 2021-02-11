import React, { useEffect } from 'react'
import { getMovie } from '../../../actions/movie'
import { POSTER_URL } from '../../../constants/constants'

const MovieDetail = ({ dispatch, match, movie }) => {

    useEffect(() => {
        getMovie(match.params.id, dispatch)
    }, [])

    return (
        <div>
            <div>{movie.title}</div>
            <div>{movie.release_date}</div>
            <div>{movie.overview}</div>
            <div>{movie.vote_count}</div>
            <img src={movie.backdrop_path && `${POSTER_URL}${movie.backdrop_path}`} alt={movie.title} />
        </div>
    )
}

export default MovieDetail
