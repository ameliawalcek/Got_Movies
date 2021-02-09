import React from 'react'
import { GENRE_LIST, POSTER_URL } from '../../constants/constants'
import { useHistory } from "react-router-dom"

const Movie = ({ movie }) => {
    const history = useHistory()

    const handleClick = () => {
        console.log(movie.id)
        history.push(`/movies/${movie.id}`)
    }

    return (
        <div style={{ display: 'inline-block' }}>
            <img onClick={handleClick} style={{ width: '200px' }} src={`${POSTER_URL}${movie.poster_path}`} alt={movie.title} />
            <div>{Math.floor(movie.vote_average * 10)}%</div>
        </div>
    
    )
}

export default Movie
// const findGenre = (id) => {
//     return <span key={id}>{GENRE_LIST[id]}</span>
// }
