import { fade, makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    app: {
        height: 56,
        [`${theme.breakpoints.up("xs")} and (orientation: landscape)`]: {
            height: 48
        },
        [theme.breakpoints.up("sm")]: {
            height: 64
        }

    }
}))