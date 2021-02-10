import React, { useEffect, useReducer } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { getTrending, getUpcoming } from './actions/movie'
import { reducer } from './reducers/movies'
import { INITIAL_STATE } from './constants/constants'
import Container from './components/Container/Container'
import MovieDetail from './components/Movie/MovieDetail/MovieDetail'

const App = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

  console.log(state)

  useEffect(() => {
    getUpcoming(dispatch)
    getTrending(dispatch)
  }, [])

  return (
    <Router>
      <Route exact path='/'>
        <Redirect to='/movies' />
      </Route>
      <Route exact path='/movies' render={() => <Container state={state} dispatch={dispatch} />} />
      <Route exact path='/movies/:id' render={({ match }) => <MovieDetail movie={state.movies.currentMovie} dispatch={dispatch} match={match} />} />
    </Router>
  )

}

export default App
