import React, { useEffect, useState, useRef, useCallback } from 'react'
import { getTitleSearch, getTrending, getUpcoming, setSearch } from '../../actions/movie'
import Movie from '../Movie/Movie'

const Movies = (props) => {
    const { match, state, dispatch } = props
    const { search } = match.params
    const { page, total_pages } = state.movies.search
    const movies = state.movies.search?.results
    const [finishSearch, setFinishSearch] = useState(false)

    const observer = useRef()
    const pageRef = useRef()

    const lastMovieElementRef = useCallback(node => {
        if (state.loading) return
        if (pageRef.current === page) return
        if (observer.current) observer.current.disconnect()
        setFinishSearch(total_pages === page)

        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && !finishSearch) {
                if (search === 'upcoming') {
                    console.log('useCallback', page)
                    getUpcoming(page + 1, dispatch)
                } else if (search === 'trending') {
                    getTrending(page + 1, dispatch)
                } else {
                    // getTitleSearch()
                }
            }
        })

        pageRef.current = page
        if (node) observer.current.observe(node)
    }, [finishSearch, page])


    useEffect(() => {
        if (state.movies[search]) {
            setSearch(state.movies[search], dispatch)
        } else {
            getTitleSearch(search, dispatch)
        }
    }, [search])

    return (
        <div style={{ paddingTop: '70px' }}>
            {movies.map((movie, index) => {
                if (movie.poster_path) {
                    if (movies.length === index + 1) {
                        return <span ref={lastMovieElementRef} key={Math.random()}><Movie movie={movie} /></span>
                    } else {
                        return <Movie movie={movie} key={Math.random()} />
                    }
                }
            })}
            {state.loading && <div>LOADING...</div>}
        </div>
    )
}

export default Movies
