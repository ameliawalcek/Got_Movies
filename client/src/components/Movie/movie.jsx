import React from 'react'
import { POSTER_URL } from '../../constants/constants'
import { useHistory } from "react-router-dom"
import PercentageCircle from '../Extra/PercentageCircle/PercentageCircle'

const Movie = ({ movie }) => {
    const history = useHistory()

    const handleClick = () => {
        console.log(movie.id)
        history.push(`/movies/${movie.id}`)
    }

    return (
        <div>
            <img onClick={handleClick} style={{ height: '200px' }} src={`${POSTER_URL}${movie.poster_path}`} alt={movie.title} />
            <PercentageCircle value={Math.floor(movie.vote_average * 10)} />
        </div>
    )
}

export default Movie

