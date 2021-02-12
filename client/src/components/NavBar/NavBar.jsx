import React, { useState } from 'react'
import { Typography, Button, AppBar, Toolbar, IconButton, InputBase } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import useStyles from './styles'
import { Link, useHistory } from 'react-router-dom'
import { getTitleSearch } from '../../actions/movie'

const NavBar = ({ dispatch }) => {
    const classes = useStyles()
    const [search, setSearch] = useState('')
    const history = useHistory()

    const handleSearch = async (e) => {
        if (e.key === 'Enter') {
            console.log('search', search)

            await getTitleSearch(search, dispatch)
            history.push(`/movies/search/${search}`)
            setSearch('')
        }
    }

    const handleChange = ({ target }) => setSearch(target.value)

    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography className={classes.title} variant="h6" noWrap>
                        Material-UI
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search title…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                            value={search}
                            onChange={handleChange}
                            onKeyDown={handleSearch}
                        />
                    </div>
                    <Button className={classes.navButton} component={Link} to='/' color="inherit">Home</Button>
                    <Button className={classes.navButton} component={Link} to={'/movies/search/upcoming'} color="inherit">Upcoming</Button>
                    <Button className={classes.navButton} component={Link} to={'/movies/search/trending'} color="inherit">Trending</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default NavBar