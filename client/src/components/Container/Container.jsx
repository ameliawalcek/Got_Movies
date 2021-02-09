import React from 'react'
import Movie from '../Movie/movie'

const Container = ({ state }) => {
    return (
        <div>
            {state.movies?.upcoming.results.map(result => {
                return <Movie movie={result} key={result.id} />
            })}
        </div>
    )
}

export default Container
