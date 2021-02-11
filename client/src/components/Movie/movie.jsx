import React from 'react'
import { POSTER_URL } from '../../constants/constants'
import { useHistory } from "react-router-dom"
import PercentageCircle from '../Extra/PercentageCircle/PercentageCircle'

const Movie = ({ movie }) => {
    const history = useHistory()

    const handleClick = () => {
        history.push(`/movies/movie/${movie.id}`)
    }

    return (
        <div style={{display: 'inline-block'}}>
            <img onClick={handleClick} style={{ height: '200px' }} src={`${POSTER_URL}${movie.poster_path}`} alt={movie.title} />
            <PercentageCircle value={Math.floor(movie.vote_average * 10)} />
        </div>
    )
}

export default React.memo(Movie)

