import React, { useEffect, useReducer } from 'react'
import { getUpcoming } from './actions/movie'
import { reducer } from './reducers/movies'
import { INITIAL_STATE } from './constants/constants'

const App = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)


  
  console.log(state)


  useEffect(() => {
    getUpcoming(dispatch)
  }, [])

  return (
    <div>

    </div>
  )
}

export default App
