import React, { useEffect, useReducer } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { getTrending, getUpcoming } from './actions/movie'
import { reducer } from './reducers/movies'
import { INITIAL_STATE } from './constants/constants'
import MovieDetail from './components/Movie/MovieDetail/MovieDetail'
import Home from './components/Home/Home'
import Movies from './components/Movies/Movies'
import NavBar from './components/NavBar/NavBar'

const App = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

  console.log(state)

  useEffect(() => {
    getUpcoming(dispatch)
    getTrending(dispatch)
  }, [])

  return (
    <Router>
      <NavBar/>
      {/* <Route exact path='/'>
        <Redirect to='/movies' />
      </Route> */}
      <Route exact path='/' render={() => <Home state={state} dispatch={dispatch} />} />
      <Route exact path='/movies/search/:search' render={({ match }) => <Movies state={state} dispatch={dispatch} match={match} />} />
      <Route exact path='/movies/movie/:id' render={({ match }) => <MovieDetail movie={state.movies.currentMovie} dispatch={dispatch} match={match} />} />
    </Router>
  )

}

export default App
