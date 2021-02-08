import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUpcoming } from './actions/movie'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUpcoming())
  }, [])

  return (
    <div>

    </div>
  )
}

export default App
