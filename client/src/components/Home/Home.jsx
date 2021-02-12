import React from 'react'
import List from './List/List'

const Home = ({ state }) => (
    <div style={{paddingTop: '70px'}}>
        <List category={'Upcoming'} movies={state.movies?.upcoming.results} />
        <List category={'Trending'} movies={state.movies?.trending.results} />
    </div>

)


export default Home
